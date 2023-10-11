import React, { createContext, useContext, useEffect, useState } from "react";
import { authService } from "../services/authService";
import { message } from "antd";
import tokenMethod, { cookieToken, localToken } from "../utils/token";
import { useNavigate } from "react-router-dom";
import PATHS from "../constants/path";
import { orderService } from "../services/orderService";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate()
  const [showedModal, setShowedModal] = useState("");
  const [profile, setProfile] = useState ({}) // la object rong
  const [courseInfo, setCourseInfo] = useState([])
  const [paymentInfo , setPaymentInfo] = useState ([])
  // console.log("profile 1",profile)
  useEffect (() =>{
    // neu accessToken co thi 
    const accessToken = !!tokenMethod.get()?.accessToken
    if(accessToken) {
      // lay:
      handleGetProfile()
      handleGetProfileCourse()
      handleGetProfilePayment()
    }
  },[])
  const handleShowModal = (modalType) => {
    setShowedModal(modalType || "");
  };
  const handleCloseModal = (e) => {
    e?.stopPropagation();
    setShowedModal("");
  };

  // ================= TOKEN ====================//
    // CHO AN/ KHI NHAN LIEN KET THI HIEN NHU DANG NHẠP VAO THÌ HIEN THONG TIN

    // B1: vao utils tạo token.js 
    // B2: vao constants de tao storage.js 

  // ===================== CALL API =======================
  // b1: tao ham handleLogin (call api) sau do truyen vao loginData, callback
  // b2: truyen ham handleLogin xuong ben duoi AuthContext.Provider va sau do truyen vao ben login form (useAuthContext) vaf sau do gang vao cho login thanh cong
  // b3: xu ly payload
  // b4: xu ly API login (ham try catch)
  // b5: check xem res co ton tai hay k

  // ======================== LOGIN ============================
  const handleLogin = async (loginData, callback) =>{
    // nho tao payload
    const payload = {...loginData}
    // xu ly API login
    try {
      const res = await authService.login(payload)
      console.log("res", res)
      // check xem res co ton tai hay k va neu ton tai thi
      if (res?.data?.data){
        const {token: accessToken, refreshToken} = res.data.data || {}
        // console.log("accessToken", accessToken)
        // console.log("refreshToken",refreshToken)
        // luu token : localStorage & cookie
        // cach 4:
        tokenMethod.set({
          accessToken,
          refreshToken,
        });

        // lay thong tin profile
        handleGetProfile()
        // dong modall va thong bao thanh cong
        handleCloseModal()

       // truyen vao loi nhan dang nhap thanh cong
      message.success("đang nhập thành công")
      } else {
        message.error("đăng nhập thất bại")
      }
    } catch (error) {
      console.log("error", error)
    } finally {
      callback?.()
    }

  }
  // =================== REGISTER ==================

  const handleRegister = async (registerData, callback) => {
    const {name, email, password} = registerData || {}
    // xu ly payload
    const payload ={
      // vao swagger de check
      firstName :name,
      lastName: "",
      email,
      password
    }
    console.log("payload", payload)
    // xu ly API 
    try {
      const res = await authService.register(payload)
      if (res?.data?.data?.id){
        // handleLogin (neu dk xong dang nhap luon account)
        handleLogin({
          email,
          password
        })
        //  thong bao
        handleCloseModal()
        message.success("đăng ký thành công")
      } else{
        message.error("đăng ký thất bại")
      }
    } catch (error) {
      console.log("error", error)
      message.error("đăng ký thất bại")
    } finally{
      callback?.()
    }
  }


  // =================== LOGOUT ====================
  const handleLogout = () =>{
    tokenMethod.remove();
    // tao ham navigate de di den trang
    navigate(PATHS.HOME)
    message.success("tài khoản của bạn dã đăng xuất")
  }


  // ==================== GET PROFILE ==================
  // ========> vào network lỗi Unauthorized: là không có quyền lấy tt vì chưa được xác thực
  // =========> 
  //    b1: check headers -> request headers sẽ thấy k có token được gửi vao trong khi đó trong swagger yêu cầu cần có token nếu k có token sẽ bị lỗi
  //    b2: cần confit cái header vào getprofile trong authService( xem)

  const handleGetProfile = async () => {
    // call api get profile
    // vi sd nhieu lan nen tao usestate de tai sd
    // ====> profile se duoc goi khi login vi vay vao ham login de bo profile
    try {
      // xem trong authService
      const res = await authService.getProfile()
      // check neu co du lieu thi tra ve profile ?
      if (res?.data?.data) {
        setProfile(res.data.data)
      }
    } catch (error) {
      // neu loi thi login nhung k lay dc proflie thi (neu nhu vay vao profile se k co ys nghia vi se k lay duoc thong tin . vi vay neu loi thi cho logout de nguoi ta dang nhap lai)
      console.log("error", error)
      handleLogout()
    }
  }

  // ===================== XU LY CHAN CAC KHOA HOC DA DANG KY ====================
  // b1: call API
  // b2: co 2 cai useState de phia tren de chua
  // b3: check trong useEffect xem co token hay k
  const handleGetProfileCourse = async () =>{
    try {
      const res = await orderService.getCourseHistories();
      const orderedCourses = res?.data?.data?.orders || [];
      setCourseInfo(orderedCourses)
    } catch (error) {
      console.log("getCourseHistories error", error)
    }
  }

  const handleGetProfilePayment = async () =>{
    try {
      const res = await orderService.getPaymentHistories();
      const payments = res?.data?.data?.orders || [];
      setPaymentInfo(payments)
    } catch (error) {
      console.log("getPaymentHistories error", error)
    }
  }

  // ========= call API UPDATE THONG TIN TAI KHOAN =========
  const handleUpdateProfile = async (profileData) =>{
    try {
      const {firstName, email, password,facebookURL, introduce, phone, website } = profileData
      const payload = {firstName: firstName,
         lastName: "",
          email,
          password,
          facebookURL,
          website,
          introduce,
          phone
        }
      const res = await authService.updateProfile(payload);
      console.log("res?.data?.data", res?.data?.data)
      if (res?.data?.data?.id){
        message.success("cập nhật thông tin thành công")
        // can phai update lai thong tin moi
        handleGetProfile();
      } 
    } catch (error) {
      console.log("error", error)
      message.error("cập nhật thông tin thất bại")
    }
  }

  return (
    <AuthContext.Provider
      value={{ showedModal, profile, courseInfo, paymentInfo, handleShowModal, handleCloseModal, handleLogin,handleLogout, handleRegister, handleGetProfileCourse, handleGetProfilePayment, handleUpdateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);

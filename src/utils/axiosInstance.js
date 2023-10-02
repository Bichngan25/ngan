import axios from "axios";
import { BASE_URL } from "../constants/environments";
import tokenMethod from "./token";

// tao 1 axiosInstance cua axios
const axiosInstance = axios.create({
    baseURL: BASE_URL,
})
// interceptors cho phep can thiep vao qua trinh nhan phan hoi (response) tuw server
axiosInstance.interceptors.response.use(
    // ===== trong phan authContext co nhung cho muon goi de lay thong tin can phai .data.data
    // b1: tra ve response
    (response) => {
        // console.log("response", response)
        return response //response.data
    },
    // tra ve error
    async (error) => {
        console.log("error", error)
        const originalRequest = error.config
        // neu ma loi 403 hoac 401 va request khong chua key _retry
        // 403 la bi loi ==== 401 la het han
        if((error.response?.status === 403 || error.response?.status === 401) && 
        // bien _retry bang false
        !!!originalRequest._retry){
            originalRequest._retry = true;
            try {
                // call API de cap nhap token moi
                const res = await axiosInstance.put("/customer/refresh",{
                    refreshToken: tokenMethod.get()?.refreshToken,
                })
                const { token: accessToken, refreshToken } = res.data.data || {};
                // luu lai token moi vao local storage hoac cookie
                tokenMethod.set({
                    //  dong bo voi authcontext
                    accessToken: tokenData?.token,
                    refreshToken: tokenData?.refreshToken
                })
                // thay doi token trong header cua yeu cau ban dau
                originalRequest.headers.Authorization = `Bearer ${accessToken}`
                // goi lai yeu cau ban dau voi token moi
                return axiosInstance (originalRequest)
            } catch (error) {
                console.log("error", error)
                // xu ly loi neu k the cap nhap token moi
                tokenMethod.remove()
                // window.location.href = "/"
            }
        }
        // neu loi k phai laf 403 hoawc 401 thi tra ve loi ban dau
        return Promise.reject(error)
    }
)

// interceptors cho phep can thiep vao qua trinh gui yeu cau (request) tu server
axiosInstance.interceptors.request.use(
    // =======> xem ben authService
    (config) => {
        // console.log("config",config)
        // xu ly yeu cau truoc khi gui di
        config.headers.Authorization = `Bearer ${tokenMethod.get()?.accessToken}`;
        return config;
    },
    (error) => {
        // xu ly loi neu co 
        return Promise.request(error)
    }
)

export default axiosInstance;

// // gang BASE_UR tu environments.js tu constants

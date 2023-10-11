import React, { useEffect, useRef, useState } from 'react'
import InfoOrder from './InfoOrder'
import FormOrder from './FormOrder'
import PaymentOrder from './PaymentOrder'
import { useNavigate, useParams } from 'react-router-dom'
import { courseService } from '../../services/courseService'
import useMutation from '../../hooks/useMutation'
import { ROLE } from '../../constants/role'
import { formatCurrency } from '../../utils/format'
import useForm from '../../hooks/useForm'
import { regrexRule, requireRule } from '../../utils/validate'
import { useAuthContext } from '../../context/AuthContext'
import Button from '../../components/Button'
import { message } from 'antd'
import { orderService } from '../../services/orderService'
import PATHS from '../../constants/path'

const CourseOderPage = () => {
  const formRef = useRef({})
  const navigate = useNavigate()
     // b1: chuan bij data

    // handle getCourseBySlug when courseSlug param change
    // su dung ham useParams de lay duoc slug
    const {courseSlug} = useParams()
    // console.log("courseSlug", courseSlug)

       // ========= GET PROFILE =============
       const { profile, courseInfo } = useAuthContext();
      //  console.log("courseInfo", courseInfo)
      // some : duyet qua mang vaf neu chir co 1 trong nhung dk thoai dk thif se tra ve true
      // every: duyet qua mang vaf yeu cau tat ca phai thoai dk, con neu chi can 1 dk k thoai thi se tra ve false
      const isAlreadyOrder = courseInfo?.some((item) => item?.course?.slug === courseSlug)
       const {
         firstName: profileName,
         email: profileEmail,
         phone: profilePhone,
       } = profile || {};
      //  console.log("profile", profile)
   

       // useMutation: post, put, delete
    // useQuery: get (lay tt lien vaf k can dieu kien, pahi duoc goi lien ngay luc defined)


    //  *** doi voi truong hop : dat dieu kien sau do moi call thi su dung useMutation
    // execute:  dung de bat su kien 
    const {data: courseDetailData, execute: executeCourseDetail} = useMutation(
        courseService.getCourseBySlug
    )
        // console.log("courseDetailData", courseDetailData)
    useEffect(() =>{
        // neu slug co gia tri tri execute
        if (courseSlug) executeCourseDetail?.(courseSlug, {})
    },[])

    //========= modify render data=======
    const {teams, price, tags} = courseDetailData || {}

    // =========== child props ============
    const InfoOrderProps = {
      ...courseDetailData,
      teacherInfo: teams?.find((item) => item.tags.includes(ROLE.Teacher)) || {},
      price: formatCurrency(price),
    };
    // console.log("InfoOrderProps", InfoOrderProps)


 
    // ========== Handle PROFILE FORM ===========
    // khi onsubmit khoa hocj thi goi validate
    // sau khi validate thi lay thong tin form
    const {form, register, validate, setForm} = useForm({
      name: "",
      email: "",
      phone: "",
      type: ""
    },
    {
      name: [requireRule("Vui lòng nhập tên")],
      email:[
        requireRule("Vui lòng nhập email"),
        regrexRule("email","Vui lòng nhập đúng định dạng email")
      ],
      phone: [
        requireRule("Vui lòng nhập số điện thoại"),
        regrexRule("email","Vui lòng nhập đúng định dạng số điện thoại")
      ],
      type: [requireRule("Vui lòng chọn hình thức học")]
    })
    
    useEffect(() => {
      if(isAlreadyOrder && courseInfo?.length > 0){
       const orderedCourse = courseInfo?.find((item) => item?.course?.slug === courseSlug)
       console.log("orderedCourse", orderedCourse)
       setForm({
        name: orderedCourse.name || "",
        email: profileEmail || "",
        phone: orderedCourse.phone || "",
        type: orderedCourse.type || "",
      });
      setPaymentMethod(orderedCourse.paymentMethod)
      } else {
        setForm({
          name: profileName || "",
          email: profileEmail || "",
          phone: profilePhone || "",
          type: "",
        });
      }
    }, [profileName, profileEmail, profilePhone, isAlreadyOrder]);

      // ============== Handle PAYMENTMETHOD change ==============
  const [paymentMethod, setPaymentMethod] = useState("");
  const handlePaymentMethodChange = (payment) => {
    setPaymentMethod(payment);
  };

  // ============== HANDLE ORDER COURSE ============
  const {loading: orderLoading, execute: orderCourse} = useMutation(
    orderService.orderCourse
  )

    //  ============== bat su kien onOrder ====================
    const _onOrder = () => {
       // b1 : validate form
       const profileError = validate();
      //  check xem cai keys cua pfrofileError 
      if (Object.keys(profileError).length > 0){
        // console.log("profileError",profileError)
      } else {
        if (paymentMethod) {
          // PAYLOAD
          const payload = {
            // dua theo swatger
            name: form.name,
            phone: form.phone,
            course: courseDetailData?.id,
            type: form.type,
            paymentMethod
          }
          // console.log("payload", payload)
          orderCourse(payload,{
            onSuccess: () =>{
              navigate(PATHS.PROFILE.MY_COURSE)
              message.success("bạn đã thanh toán thành công")
            },
            onFail: () =>{
              message.error("đăng ký thất bại")
            }
          })
        }else {
          message.error("vui lòng chọn hình thức thanh toán")
        }
      }
    }


    // ============== XU LY CHAN KHOA HOC DA DANG KY =================
    // B1: vao authcontext

  return (
    <div>
        <main className="mainwrapper --ptop">
    <section className="sccourseorder">
      <div className="container small">
        <InfoOrder {...InfoOrderProps}/>
        <FormOrder register={register} types={tags || {}} disabled={isAlreadyOrder}/>
        <PaymentOrder
        // payment duoc thay doi
        handleChange={handlePaymentMethodChange}
        selectedPayment={paymentMethod}
        disabled={isAlreadyOrder}
        ref={formRef}
        />
        {/* addclass --processing khi bấm đăng ký */}
        <Button onClick={_onOrder} disabled={isAlreadyOrder} loading={orderLoading} style={{width: "100%"}}>
          <span>{isAlreadyOrder ? "đã đăng ký" : "Đăng ký khoá học"}</span>
         
        </Button>
      </div>
    </section>
  </main>
    </div>
  )
}

export default CourseOderPage

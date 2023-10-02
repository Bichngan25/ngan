import React, { useState } from 'react'
import ContactTitle from './ContactTitle'
import ContactSidebar from './ContactSidebar'
import ContactForm from './ContactForm'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useMutation from '../../hooks/useMutation'

const ContactPage = () => {
  // b1: tao ham submit , nhan vao thong tin cua form (formData) nham muc dich khi nguwoi dung nhan nut gui se thi se goi function
  // b2: truyen thong tin vao cho contactform => qua contact form de truyen prors
  // b3: phan tich component de tai su dung => tao component input (phantich)
  // b4: vao contact form de chinh sua input de tuong ung voi component input sau do xu li form
  // b5: xử lý btn ở contact form
  const navigave = useNavigate ()
  // const [loading, setLoading] = useState(false)

  // CALL USEMUTATION
  // return ve ham execute (ham thuc thi) , data, error, loading
  const {execute, data, error, loading} = useMutation((payload)=> axios.post("https://cfdcourses.cfdcircle.vn/api/v1/subscribes",payload))

  const handleFormSubmit = async (submitValue) => {
    // call api 
    // set loading co o USEMUTATION
  //  setLoading(true)

  //  vao HOOK DE TAO USEMUTATION
   const payload ={
    name: submitValue.name || "",
    title: submitValue.topic || "",
    phone: submitValue.phone || "",
    email: submitValue.email || "",
    description: submitValue.content || ""

   }
  //  thay vi dung try catch thi lam ngan gon bang execute va truyen vao payload
   execute?.(payload,{
    onSuccess:(()=>{
      setTimeout(()=>{
        navigave("/")
        // alert("thanh cong")
      },2000)
    })
   })

  //  vao USEMUTATION
    // try {
    //   const res = await axios.post("https://cfdcourses.cfdcircle.vn/api/v1/subscribes",payload)
    //   console.log("res", res)
    //   if (res.data){
    //     alert("thanh cong")
    //   }
    // } catch (error) {
    //   console.log("error", error)
    // }
    // finally{
    //   setLoading(false)
    // }
    console.log("call API with value", submitValue)
    // setTimeout (() => {
    //   // back to ...
    //   navigave("/")
    // }, 1000);
  }
  return (
    <div>
      <main className="mainwrapper contact --ptop">
    <div className="container">
      <ContactTitle/>
      
    </div>
    <div className="contact__content">
      <div className="container">
        <div className="wrapper">
         <ContactSidebar/>
         {/* b2: truyen thong tin vao cho contactform */}
        <ContactForm handleFormSubmit={handleFormSubmit}/>
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}

export default ContactPage

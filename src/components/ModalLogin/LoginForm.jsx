import React, { useState } from 'react'
import useForm from '../../hooks/useForm'
import { regrexRule, requireRule } from '../../utils/validate'
import Input from '../Input'
import Button from '../Button'
import { message } from 'antd'
import { useAuthContext } from '../../context/AuthContext'
import { MODAL_TYPE } from '../../constants/general'
import ComponentLoading from '../ComponentLoading'

// call API
// b1: goi ham handleLogin ( authcontext)
// b2: truyen handleLogin, ham callback xuong cho da login xong 
// b3: 

const LoginForm = () => {
    const { handleShowModal, handleCloseModal, handleLogin } = useAuthContext();
    const [loading, setLoading] = useState(false);
    const {form, register, validate} = useForm (
    {
        email:"",
        password:"",
     },
     {
     email: [
        requireRule("Vui lòng nhập email"),
        regrexRule("Vui lòng nhập đúng định dạng email", "email")
      ],
      password: [
        requireRule("Vui lòng nhập mật khẩu"),
      ],
    }
     )
    const _onSubmit = (e) => {
        e.preventDefault()
        const errorObject = validate();
        if (Object.keys(errorObject).length > 0 ) {
            console.log("Submit Error", errorObject)
          } else {
            setLoading(true);
            console.log("Submit Success", form)
            // check xem co phai function k roi moi goi
            handleLogin?.(form, () =>{
                  setTimeout(()=>{
                setLoading(false)
                // handleCloseModal()
            },300)
            })
        
          }
    }

    return (
      <>
      <div className="modal__wrapper-content mdlogin active" style={{ position: "relative" }}>
        <div className="form__bottom">
        {loading && <ComponentLoading/>}
          <p>Bạn chưa có tài khoản?</p>
          <div  className="color--primary btnmodal"
          data-modal="mdregister"
          onClick={() => handleShowModal(MODAL_TYPE.register)}><strong>Đăng ký</strong></div>
        </div>
        <form onSubmit={_onSubmit} className="form">
            <Input
                label="Email"
                required
                placeholder="Email"
                {...register("email")}
                />
            <Input
                label={"Password"}
                required
                placeholder="Password"
                type="Password"
                {...register("password")}
                />
          <Button className="form__btn-register" type="submit">Đăng nhập</Button>
        </form>
      </div>
      </>
  )
 
}

export default LoginForm

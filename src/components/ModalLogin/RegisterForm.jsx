import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useForm from '../../hooks/useForm';
import { regrexRule, requireRule } from '../../utils/validate';
import { MODAL_TYPE } from '../../constants/general';
import Input from '../Input';
import { Link } from 'react-router-dom';
import PATHS from '../../constants/path';
import Button from '../Button';
import ReactDOM from 'react-dom'
import ComponentLoading from '../ComponentLoading';


const RegisterForm = () => {

        const { handleShowModal, handleCloseModal, handleRegister } = useAuthContext();
        const [loading, setLoading] = useState(false);
        const {form, register, validate} = useForm (
        {   
            name:"",
            email:"",
            password:"",
            confirmPassword:"",
         },
         {
            name: [
             requireRule("Vui lòng nhập tên"),
            ],
            email: [
            requireRule("Vui lòng nhập email"),
            regrexRule("Vui lòng nhập đúng định dạng email", "email")
          ],
          password: [requireRule("Vui lòng nhập mật khẩu")],
          confirmPassword: [requireRule ("Vui lòng xác nhận mật khẩu"), (value, values) =>{
            if (values.password && value !== values.password) {
                return "xác nhận mật khẩu sai"
            }
            else false;
        }]
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
                // check ham neu ton tai duoi dang function k
                if (typeof handleRegister === "function"){
                  handleRegister?.(form, () =>{
                    setTimeout(()=>{
                    setLoading(false)
                    // alert("đăng nhâp thành công")
                    // nho goi ham de close
                    // handleCloseModal()
                },300)
                })
                } else{
                  setLoading(false)
                }
              }
        }
        return (
    <div className="modal__wrapper-content mdregister active" style={{ position: "relative" }}>
       {loading && <ComponentLoading />}
    <div className="form__bottom">
      <p>Bạn đã có tài khoản?</p>
      <div className="color--primary btnmodal" data-modal="mdlogin" onClick={() => handleShowModal(MODAL_TYPE.login)}><strong>Đăng nhập</strong></div>
    </div>
    <form onSubmit={_onSubmit} action="#" className="form">
        <Input
             label="Họ và tên"
            required
            placeholder="Họ và tên"
            {...register("name")}
         />
        <Input
             label="Email"
            required
            placeholder="Email"
            {...register("email")}
         />
        <Input
            label={"Mật khẩu"}
            required
            placeholder="Mật khẩu"
            type="Password"
            {...register("password")}
        />
        <Input
            label={"Xác nhận mật khẩu"}
            required
            placeholder="Xác nhận mật khẩu"
            type="Password"
            {...register("confirmPassword")}
        />
      <p className="form__argee">
        Với việc đăng ký, bạn đã đồng ý
        <Link className="color--primary" to={PATHS.PRIVACY } onClick={() => {handleCloseModal()}}>Chính Sách Điều Khoản</Link> của CFD
      </p>
      <Button className="form__btn-register" type="submit">Đăng ký tài khoản</Button>
    </form>
  </div>
  )
}

export default RegisterForm

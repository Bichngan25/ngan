import React, { useEffect } from 'react'
import { regrexRule, requireRule } from '../../utils/validate'
import { useAuthContext } from '../../context/AuthContext'
import useForm from '../../hooks/useForm'
import Input from '../../components/Input'
import Button from '../../components/Button'


const rules = {
  firstName: [requireRule("vui lòng nhập họ và tên")],
  email: [
    // da disable nen k duoc sua email
    requireRule("vui lòng nhập email"),
    regrexRule("emai", "vui lòng nhập đúng định dạng email")
  ],
  phone: [
    requireRule("vui lòng nhập số điện thoại"),
    regrexRule(
      /(84|0[3|5|7|8|9])+([0-9]{8})\b/, "vui lòng nhập đúng định dang số điện thoại"
    )
  ],
  password:[requireRule("vui lòng nhập mật khẩu")],
  // website:[requireRule("vui lòng nhập website")],
  // facebookURL:[requireRule("vui lòng nhập facebook")],
  // introduce:[requireRule("vui lòng nhập thông tin giới thiệu")],
  
}
const MyInfo = () => {
  const {profile, handleUpdateProfile } = useAuthContext()
  const {form, setForm, register, validate} = useForm ({
    firstName:"",
    email:"",
    phone:"",
    password:"******",
    facebookURL: "",
    website: "",
    introduce:""
  }, rules)

  const _onSubmit = (e) =>{
    e.preventDefault();
    const errorObject = validate()
    if (Object.keys(errorObject).length > 0) {
      console.log("Submit error", errorObject)
    } else {
      handleUpdateProfile?.(form)
    }
  }

  useEffect(() =>{
    if (profile) {
      setForm({...form, ...profile})
    }
  },[profile])
  return (
    <div>
      <div className="tab__content-item" style={{display: 'block'}}>
                <form action="#" className="form">
                  {/* <div className="form-container"> */}
                    <Input
                    label="Họ và tên"
                    required
                    placeholder="Họ và tên"
                    {...register("firstName")}
                    />
                     <Input
                    label="Số điện thoại"
                    required
                    placeholder="Số điện thoại"
                    {...register("phone")}
                    />
                     {/* </div> */}
                  {/* <div className="form-container"> */}
                    <Input
                      label="Email"
                      required
                      placeholder="Email"
                      disabled
                      {...register("email")}
                      />
                      <Input
                      label="Mật khẩu"
                      required
                      placeholder="Mật khẩu"
                      disabled
                      {...register("password")}
                      />
                  {/* </div> */}
                  <Input
                      label="Facebook URL"
                      placeholder="Facebook URL"
                      {...register("FacebookURL")}
                      />
                  <Input
                      label="Website"
                      placeholder="Website"
                      {...register("Website")}
                      />
                  <Input
                      label="Giới thiệu bản thân"
                      renderInput={(inputProps) =>{
                        return <textarea {...inputProps}/>
                      }}
                      {...register("introduce")}
                      />
                    <div className="btnsubmit">
                      <Button >Lưu lại</Button>
                    </div>
                </form>
              </div>
    </div>
  )
}

export default MyInfo

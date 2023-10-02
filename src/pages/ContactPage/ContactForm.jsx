import React, { useState } from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Select from '../../components/Select'
import TextArea from '../../components/TextArea'
import validate, { regrexRule, requireRule } from '../../utils/validate'
import useForm from '../../hooks/useForm'
// import Input from '../../components/Input'

// xu ly form
// khi xu ly form can co 2 usestate

// XU LY INPUT VA BTN
// b1: tao ham useState
// b2: tao ham _onsubmit de bat su kien submit => gang onsubmit vao de gui form
// b3: tao ham onchange de bat su kien onchange
// b4: validate
// b5: tạo component btn đẻ xử lý btn
// b6: check ham handleFormSubmit tai error
// b7: tao ham register(dang ky) de rut ngan code (name, error, value, onchange)
// b8: tao ham errorobject = validate(); de toi uu code phan cuar validate


// XU LY SELECT
// b1: tao component select

// TEXTAREA
// b1: tao component textarea

const ContactForm = ({handleFormSubmit}) => {
  const rules = {
    name: [
      // DA DUOC LAM NGAN GON BEN VALIDATE HAM REQUIRERULE
      // {
      //   required:true,
      //   message: "Vui lòng nhập tên"
      // }
      requireRule("Vui lòng nhập tên")
    ],
    email: [
      requireRule("Vui lòng nhập email"),
      regrexRule("Vui lòng nhập đúng định dạng email", "email")
    ],
    phone: [
      requireRule("Vui lòng nhập số điện thoại"),
      regrexRule("Vui lòng nhập đúng số điện thoại", "phone")
    ],
    topic: [
      requireRule("Vui lòng nhập chủ đề")
    ],
    content: [
      requireRule("Vui lòng nhập nội dung")
    ]
  }
const {form, error, register, validate} = useForm ({
    name:"",
      email:"",
      phone:"",
      topic:"",
      content:"",
},
rules )
  // CHUYEN QUA USEFORM
    // const [form, setForm] = useState({
    //   // chua thong tin
    //   name:"",
    //   email:"",
    //   phone:"",
    //   topic:"",
    //   content:"",
    // })
    // const [error, setError] = useState({})
    // // tao ham onchange de bat su kien onchange
    // const _onChange = (e) => {
    //   // co 2 gia tri
    //   const {value, name} = e.target;
    //   // xet lai form => lay tat ca cac gia tri cua form sau do tha doi name thanh gia tri moi
    //   setForm({...form, [name]: value});
    //   // _onchange gang lai vao input onchange

    // }
    // const register = (registerField) => {
    //   return{
    //     error: error[registerField],
    //     value: form[registerField],
    //     onChange: (e) => setForm({ ...form, [registerField]: e.target.value}),
    //   }
    // };

    // tao ham _onsubmit de bat su kien submit
    const _onSubmit = () => {
      // console.log("submit form with value: ", form)
      // truoc khi submit thi se tien hanh error vi vay can tao ham errorobject

      // b8: toi uu hoa code cho validate
      // const rules = {
      //   name: [
      //     // DA DUOC LAM NGAN GON BEN VALIDATE HAM REQUIRERULE
      //     // {
      //     //   required:true,
      //     //   message: "Vui lòng nhập tên"
      //     // }
      //     requireRule("Vui lòng nhập tên")
      //   ],
      //   email: [
      //     requireRule("Vui lòng nhập email"),
      //     regrexRule("Vui lòng nhập đúng định dạng email", "email")
      //   ],
      //   phone: [
      //     requireRule("Vui lòng nhập số điện thoại"),
      //     regrexRule("Vui lòng nhập đúng số điện thoại", "phone")
      //   ],
      //   topic: [
      //     requireRule("Vui lòng nhập chủ đề")
      //   ],
      //   content: [
      //     requireRule("Vui lòng nhập nội dung")
      //   ]
      // }
      // ----1: dua rules(nhung yeu cau), form(nhung gia tri hienj tai)
      const errorObject = validate(rules, form);
      // ----2: vao utils de tao validate


      // B4: tien hanh VALIDATE (la check theo dieu kien va tra ve error tuong ung)
      // b5: regex

      // neu khong error k co thi dang required thi no se tra ve loi tuong ung
      // if (!!!form.name) {
      //   errorObject.name = "Vui lòng nhập tên"
      // }
      // if (!!!form.email) {
      //   errorObject.email = "Vui lòng nhập Email"
      // }
      // b5: regex
      // doi voi email can regex ( nho them // va chu g o cuoi)
      // .test co nghia la test duoc form email voi cac ky tu
      // ! neu tra ve loi thi 
      // else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form.email)) {
      //   errorObject.email = "Vui lòng nhập đúng dịnh dạng Email"
      // }

      // if (!!!form.phone) {
      //   errorObject.phone = "Vui lòng nhập Số điện thoại"
      // }
      // else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(form.phone)) {
      //   errorObject.phone = "Vui lòng nhập đúng dịnh dạng số điện thoaị"
      // }
      // if (!!!form.topic) {
      //   errorObject.topic = "Vui lòng chọn chủ đề"
      // }
      // if (!!!form.content) {
      //   errorObject.content = "Vui lòng điền nội dung"
      // }
      // b5: regex
      // KET THUC QUA TRINH VALIDATE

      // du co error hay k thi van phai xet lai error
      // setError (errorObject)
      //  neu errorObject lon hon 0 thi submit bi loi, truong hop con lai thi submit thanh cong
      if (Object.keys(errorObject).length > 0 ) {
        console.log("Submit Error", errorObject)
      } else {
        console.log("Submit Success", form)
        // check form xem co phai form duoc truyen tu ben ngoai vao hay k? vif neu k thi no goi ham thi se bi loi vi vay can check truong xem no co gia tri hay k roi no moi goi ham
        handleFormSubmit?.(form)
      }
    };
      // sau do truyen bien error vao de k hien thi loi 

    // b7: tao ham register(dang ky) de rut ngan code (name, error, value, onchange)
      // const register = (registerField) => {
      //   return{
      //     error: error[registerField],
      //     value: form[registerField],
      //     onChange: (e) => setForm({ ...form, [registerField]: e.target.value}),
      //   }
      // };
  return (
    <div>
        <div className="form">
            <h3 className="title --t3">Gửi yêu cầu hỗ trợ</h3>
            {/* chinh sua input de tuong ung voi component input */}
            <Input
            // name="name"
              label={"Họ và Tên"}
              // là true
              required
              // là false
              // required={false}
              placeholder="Họ và Tên"
              // error={error.name}
              // onChange={_onChange}
              // b7: them ham register
              {...register("name")}
            />
             <Input
              label={"Email"}
              required
              placeholder="Email"
              {...register("email")}
            />
              <Input
              label={"Phone"}
              required
              placeholder="Phone"
              {...register("phone")}
            />
             {/* select
              --- khi UI chi thay doi 1 element va element do nam trong 1 component khac thi 
              co thu thuat RENDER PROS---
              * RENDER PROS: chuyen thong tin giong tren input
              //b1: thay doi thong tin giong input
              // b2: them renderinput vao component input 
              */}

              <Input 
              label={"Chủ đề cần hỗ trợ"}
              required
              value={form.topic}
              {...register("topic")}
              // tao them renderInput de khi chay co the tra ve select
              // chuyen inputProps sang component input
              renderInput={(inputProps) => <Select
              // xem ben duoi
                options={[
                  {value:"", label:"--"},
                  {value:"react", label:"ReactJs"},
                  {value:"responsive", label:"Web Responsive"}
                ]} 
                {...inputProps}
              />}
              />
              {/* textarea */}
              <Input 
              label={"Nội dung"}
              required
              placeholder="Nội dung"
              value={form.content}
              {...register("content")}
              // tao them renderInput de khi chay co the tra ve select
              // chuyen inputProps sang component input
              renderInput={(inputProps) =>{
                // console.log("inputProps", inputProps);
                return<TextArea {...inputProps} />
              }}
              />
            {/* <div className="form-group">
              <label className="label">Chủ đề cần hỗ trợ <span>*</span>
               <div className="select">
                <div className="head form__input">--</div>
                <div className="sub">
                  <a href="#">Web Responsive</a>
                  <a href="#">React &amp; Redux</a>
                </div>
              </div> 
              chuyen gia tri option 
              <Select options={[
                {value:"", label:"--"},
                {value:"react", label:"ReactJs"},
                {value:"responsive", label:"Web Responsive"}
                // chuyen vao component select de dam bao options truyen duoc vao select
              ]} 
              // value="react"
              // onchange

              value={form.topic}
              // xet lai form de lay toan bo thong tin cua form va dua ra gia tri moi
              onChange={(e) => setForm({...form, topic: e.target.value})}
              />
              </label>
            </div> */}
            {/* <div className="form-group">
              <label className="label">Nội dung <span>*</span></label>
              <textarea className="form__input" defaultValue={""} />
            </div> */}
            <div className="btncontrol">
              {/* <button className="btn btn--primary" onClick={_onSubmit}>Gửi</button> */}

              {/* xu ly text */}
              {/* <button>Gửi</button> */}

              <Button variant='border' onClick={_onSubmit}>Gửi</Button>
            </div>
          </div>
    </div>
  )
}

export default ContactForm

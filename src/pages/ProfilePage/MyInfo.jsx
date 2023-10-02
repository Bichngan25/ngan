import React from 'react'

const MyInfo = () => {
  return (
    <div>
      <div className="tab__content-item" style={{display: 'block'}}>
                <form action="#" className="form">
                  <div className="form-container">
                    <div className="form-group">
                      <label className="label">Họ và tên <span>*</span></label>
                      <input defaultValue="Nghĩa Trần" type="text" className="form__input formerror" />
                      <div className="error">Vui lòng nhập họ và tên</div>
                    </div>
                    <div className="form-group">
                      <label className="label">Số điện thoại <span>*</span></label>
                      {/* <input defaultValue={0989596913} type="text" className="form__input" /> */}
                    </div>
                  </div>
                  <div className="form-container">
                    <div className="form-group">
                      <label className="label">Email <span>*</span></label>
                      <input defaultValue="trannghia2018@gmail.com" disabled type="email" className="form__input" />
                    </div>
                    <div className="form-group">
                      <div className="form-grouppass">
                        <label className="label">Mật khẩu <span>*</span></label>
                        <div className="textchange btnmodal" data-modal="mdchangepass">Đổi mật khẩu
                        </div>
                      </div>
                      <input defaultValue={12345568900} type="password" disabled className="form__input" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="label">Facebook URL</label>
                    <input defaultValue="https://nghiatran.info" type="text" className="form__input" placeholder />
                  </div>
                  <div className="form-group">
                    <label className="label">Website</label>
                    <input defaultValue type="text" className="form__input" />
                  </div>
                  <div className="form-container textarea">
                    <label className="label">Giới thiệu bản thân</label>
                    <textarea className="form__input" name="content" defaultValue={""} />
                  </div>
                  <p className="noti">Cập nhận thông tin thành công</p>
                  <div className="form-group">
                    <div className="btnsubmit">
                      <button className="btn btn--primary">Lưu lại</button>
                    </div>
                  </div>
                </form>
              </div>
    </div>
  )
}

export default MyInfo

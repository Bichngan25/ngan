import React from 'react'

const ChangePassWordPage = () => {
  return (
    <div>
    <main className="mainwrapper changepassword">
    <div className="container">
      <div className="form">
        <h3 className="title --t3">Khôi phục mật khẩu</h3>
        <div className="form-group">
          <label className="label">Mật khẩu mới <span>*</span></label>
          <input defaultValue type="password" className="form__input" />
        </div>
        <div className="form-group">
          <label className="label">Xác nhận mật khẩu <span>*</span></label>
          <input defaultValue type="password" className="form__input formerror" />
          <p className="error">Dòng thông báo lỗi</p>
        </div>
        <div className="btncontrol">
          <a href="#" className="btn btn--primary">Cập nhật</a>
        </div>
      </div>
    </div>
  </main>
  </div>
  )
}

export default ChangePassWordPage

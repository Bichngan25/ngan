import React from 'react'

const Modal = () => {
  return (
    <div>
       <div className="modal">
    <div className="modal__wrapper">
      <div className="modal__wrapper-content mdnotice active">
        <img src="img/check.svg" alt />
        <h3 className="title --t3">Gửi thông tin thành công!</h3>
        <p>Chúng tôi sẽ phản hồi lại cho bạn trong thời gian sớm nhất có thể</p>
        <a href="contact.html" className="btn btn--primary">Đồng Ý</a>
      </div>
    </div>
    <div className="modal__overlay" />
  </div>
    </div>
  )
}

export default Modal

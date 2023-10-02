import React from 'react'

const ContactSidebar = () => {
  return (
    <div>
       <div className="sidebar">
            <div className="sidebar__address infor">
              <div className="infor__item">
                <label className="label">CFD Circle</label>
                <p className="title --t4">666/46/29 Ba Tháng Hai, phường 14, quận 10, TPHCM
                </p>
              </div>
              <div className="infor__item">
                <label className="label">Email</label>
                <p className="title --t4">info@cfdcircle.vn</p>
              </div>
              <div className="infor__item">
                <label className="label">Số điện thoại</label>
                <p className="title --t4">098 9596 913</p>
              </div>
            </div>
            <div className="sidebar__business">
              <p>
                Đối với yêu cầu kinh doanh xin vui lòng gửi cho chúng
                tôi tại:
              </p>
              <a href="#">business@cfdcircle.vn</a>
            </div>
            <a href="#" className="sidebar__messenger btn btn--primary">Trò chuyện trực tuyến</a>
          </div>
    </div>
  )
}

export default ContactSidebar

import React, { useEffect } from 'react'
import { Link, NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom'
import PATHS from '../../constants/path'
import tokenMethod from '../../utils/token'
import { useAuthContext } from '../../context/AuthContext'

const ProfilePage = () => {
  // xu ly chan vao trang thu cong
  // if (!!!tokenMethod.get()) {
  //   return <Navigate to ={PATHS.HOME}/>
  // }
  // =============== PRIVATEROUTE =================
  // B1  : vao component tao privateRoute
  // b2 : sang app.jsx de truyen privateRoute 

  // 
  const {profile, handleGetProfileCourse, handleGetProfilePayment} = useAuthContext()
  // vao swagger de xem thong tin
  const { firstName, introduce, email, phone, website} = profile || {}
  // console.log("profile", profile)

  // *** useEffect  luon co dau ngoac vuoong
  useEffect(() => {
    handleGetProfileCourse()
    handleGetProfilePayment()
  },[])

  return (
    <div>
       <main className="mainwrapper profilepage">
    <div className="container">
      <div className="wrapper">
        <div className="sidebar">
          <div className="sidebar__info">
            <div className="useravatar">
              <div className="avatar">
                <div className="img"><img src="/img/avatar_nghia.jpg" alt="avatar" /></div>
              </div>
              <h3 className="title --t3">{firstName}</h3>
            </div>
          </div>
          <div className="sidebar__content">
            <h4>Giới thiệu</h4>
            <p className="description">{introduce}</p>
            <ul>
              <li><img src="/img/icon-mail-outline.svg" alt="icon" /><span>{email}</span>
              </li>
              <li><img src="/img/icon-phone-outline.svg" alt="icon" /><span>{phone}</span></li>
              <li><img src="/img/icon-link.svg" alt="icon" /><a href="#" target="_blank">{website}</a></li>
            </ul>
            <div className="social">
              <a href="#"><img src="/img/icon-facebook-dark.svg" alt /></a>
              <a href="#"><img src="/img/icon-linkedin-dark.svg" alt /></a>
              <a href="#"><img src="/img/icon-youtube-dark.svg" alt /></a>
            </div>
          </div>
        </div>
        <div className="tabwrap">
          <div className="tab">
            <div className="tab__title">
              {/* nho them end vao vi Navlink no se  twu sinh active */}
              <NavLink end to="/profile">Thông tin cá nhân</NavLink>
              <NavLink to="/profile/my-course">Khóa học của tôi</NavLink>
              <NavLink to="/profile/my-payment">Lịch sử thanh toán</NavLink>
            </div>
            <div className="tab__content">
              <Outlet/>
              {/* Thông tin cá nhân */}
              {/* <MyInfo /> */}
              {/* Khoá học của tôi */}
              {/* <MyCourse /> */}
              {/* Lịch sử thanh thánh */}
              {/* <MyPayment /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}

export default ProfilePage

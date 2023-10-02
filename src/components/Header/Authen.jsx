import React, { useEffect, useState} from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { MODAL_TYPE } from '../../constants/general';
import tokenMethod, { localToken } from '../../utils/token';
import { Link } from 'react-router-dom';
import PATHS from '../../constants/path';

const Authen = () => {
  const {handleShowModal, handleLogout, profile} = useAuthContext();
  // console.log('localStorage.getItem("token")', localToken.get());
// ========= 
  const[showDropdown, setShowDropdown] = useState(false)
  //  ======> profileImage ======
  const {profileImage, firstName} = profile || {}
  const _onShowDropdown =(e) =>{
    e?.stopPropagation()
    setShowDropdown(true)
  }
  const _onCloseShowDropdown =(e) =>{
    e?.stopPropagation()
    setShowDropdown(false)
  }

  useEffect (() =>{
    document.addEventListener("click", () =>{
      _onCloseShowDropdown()
    })
    return() =>{
      document.removeEventListener("click", () =>{
        _onCloseShowDropdown()
      })
    }
  },[])
  if (!!tokenMethod.get()) {
    return(
        //  user logged 
       <div className="header__logged">
        <div className="userlogged">
          <div className="userlogged__avatar user" 
          data-dropdown="userlogged__dropdown" onClick={_onShowDropdown}>
            <div className="userlogged__avatar-img user__img">
              {/* neu co hinh thi lay hinh trong profileImage con neu k co thi lay hinh mac dinh */}
              <img src={profileImage || "/img/cfd-share-thumbnail-facebook.png"} alt="Avatar teacher" />
            </div>
            <i className="userlogged__avatar-icon"><svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3.5L7.00003 10.5L14 3.5H0Z" fill="white" />
              </svg>
            </i>
          </div>
          <div className={`userlogged__dropdown dropdown ${showDropdown ? "active" : ""}`}>
            <div className="userlogged__dropdown-info">
              <div className="user__img">
              <img src={profileImage || "/img/cfd-share-thumbnail-facebook.png"} alt="Avatar teacher" />
              </div>
              <Link to={PATHS.PROFILE.INDEX} className="user__info">
                <p className="title --t4"><strong>{firstName || ""}</strong></p>
                <span className="email">Thông tin tài khoản</span>
              </Link>
            </div>
            <div className="userlogged__dropdown-list">
              <Link to={PATHS.PROFILE.MY_COURSE}>Khóa học của tôi</Link>
              <Link to={PATHS.PROFILE.MY_PAYMENT}>Lịch sử thanh toán</Link>
              <Link to={PATHS.CONTACT}>Hỗ trợ</Link>
              {/* neu thay doi the co the thay doi css */}
              <a href="#" 
              onClick={(e) =>{
                e.preventDefault();
                handleLogout?.();
              }}
              >Đăng xuất{" "} <i><img src="/img/iconlogout.svg" alt /></i></a>
            </div>
          </div>
        </div>
      </div>  
    )
  }
  return (
    <div>
    <div className="header__auth">
  <div
  href="javascript:void(0)" 
  className="btn btn--transparent btnmodal" 
  data-modal="mdlogin">
    <span onClick={(e) => {
    e.stopPropagation()
      handleShowModal(MODAL_TYPE.register)}}>Đăng ký /&nbsp;</span>
    <span onClick={(e) => 
      {
        e.stopPropagation()
        handleShowModal(MODAL_TYPE.login)}}>Đăng nhập</span>
  </div>
</div>
    </div>
  )
}

export default Authen

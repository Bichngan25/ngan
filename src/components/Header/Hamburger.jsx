import React, { useEffect } from 'react'
import { useMainContext } from '../../context/MainContext'

const Hamburger = () => {
      // // ham maincontextprovider xem ben fouder context (maincontext)
  const {isShowNavbar, handleShowNavbar} = useMainContext()

  useEffect(() =>{
        // neu isshownovbar dang mo thi remove cai class menushow
    if (!isShowNavbar) {
      $("body").removeClass("menu-show")
    } 
    // va nguoc lai neu no dang dong thi add class menushow vao
    else{
      $("body").addClass("menu-show")
    } 
}, [isShowNavbar])
  const _toggleMenu = (e) => {
    e.stopPropagation();
    handleShowNavbar(!isShowNavbar)
  }
  return (
    <div>
      <div onClick={_toggleMenu} className={`header__humburger ${!isShowNavbar ? "" :"--close"}`}>
        <div className="header__humburger-button">
          <span />
          <span />
          <span />
        </div>
        <div className="header__humburger-text">
        <span>Menu</span>
        <span>Đóng</span>
        </div>
      </div>
    </div>
  )
}

export default Hamburger

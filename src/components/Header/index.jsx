import React, { useEffect } from 'react'
import { useMainContext } from '../../context/MainContext'
import Hamburger from './Hamburger'
import Logo from './Logo'
import Authen from './Authen'
import { useLocation } from 'react-router-dom'
import PATHS from '../../constants/path'

const Header = () => {

  // HAMBERGER
  // ========TAT MO NAVBAR========

  //  ---------- DUNG ISSHOWNAVBAR XU LY CLASS--------
  //  B1: tao ham useMainContext
  // b2: truyen gtri vao noi can truyen class --close

  // *  CLICK VAO header__humburger THI THUC THI TOGGLE
  // b1: tao ham togglemenu
  // b2: onclick vaf de togglemenu vao header__humburger

  // ----------  CONTROL VIEC CHI DUOC CLICK VAO CHO CAN CLICK CHU K CLICK VAO CA HEADER--------
  // b1: dua event vao togglemenu vaf tra ve  e.stopPropagation

  // ---------- XỬ LÝ VIỆC CÓ THẺ NHẤN VAOF OVERLAY CÓ THỂ RA TRANG CẦN TRỎ, NHẤN VÀO BUTTON THÌ OUT NAVBAR VÀ CHUYỂN ĐẾN TRANG CẦN HIỂN THỊ------------------
  // B1: su dung hook úselocation . uselocation se duoc tra ve nhieu thong so nhung trong do se sd pathname
  //      * uselocation: VAO MAINCONTEXT

  // ----------xử lý overlay ------
  // b1: đem maincontext vao overlay

// ======= BACKGROUND HEADER ========
// b1: taoj ham useEffect (lay thong tin tuwf main.js qua vaf gan vao)
// ------nho goi ham 
// b2: tao ham isTransparent 
// b3: tao ham uselocation de bat duoc pathname

  const {pathname} = useLocation();
  const isTransparent = [PATHS.HOME, PATHS.ABOUT].includes(pathname)
  useEffect (()=>{
    function setBgHeader(scrollY) {
        let header = $('header')
        if (scrollY > header.height()) {
            header.addClass('--bgwhite');
        } else {
          // dua dieu kien istransparent khi toi buoc background
          if (isTransparent){
            header.removeClass('--bgwhite');
          }
        }
    }
    function scrollBgHeader() {
        let scrollY = $(window).scrollTop();
        if ($('.header').hasClass('--transparent')) {
            setBgHeader(scrollY);
        }
    }
    // goi ham
    window.addEventListener("scroll", scrollBgHeader)
    return() =>{
      window.removeEventListener("scroll", scrollBgHeader)
    }
    // // dua dieu kien istransparent khi toi buoc background
},[isTransparent])

  return (
    <div>
      {/* <header className="header --transparent"> */}
      <header className={`header --transparent ${!isTransparent || ""}`}>
    <div className="container-fluid">
      {/* <div className="header__humburger"> */}
      {/* ------khi dong thi se co --close va close thi phu thuoc vao ishownavbar */}
      {/* ------khi show thi k co class --close . con khi dong thi class */}
      <Hamburger/>
      <Logo/>
      <Authen/>
    </div>
  </header>
    </div>
  )
}

export default Header

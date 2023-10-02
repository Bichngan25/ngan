import React from 'react'
import Button from '../../components/Button'
import tokenMethod from '../../utils/token'
import { useNavigate } from 'react-router-dom'
import PATHS from '../../constants/path'
import { useAuthContext } from '../../context/AuthContext'
import { MODAL_TYPE } from '../../constants/general'

// ========== XU LY VIDEO =========
// B1: can convert LOAD VIDEO HERO HOME ben main.js sang

// ========= nut bat dau hoc ==========
const HeroSection = () => {
  const {handleShowModal} = useAuthContext()
  const navigate = useNavigate()
  const _onStart = () =>{
    // tao navigate de navigate den paths
    if (!!tokenMethod.get()){
      // neu da tao tai khoan dang nhap roi thi se di den trang cac khoa hoc cua toi
      navigate(PATHS.PROFILE.MY_COURSE)
      // con neu chua thi di den dang ky
    } else {
      handleShowModal?.(MODAL_TYPE.login)
    }
  }
  
  return (
    <div>
       <section className="hero">
      <div className="hero__content">
        <div className="container">
          <h1 className="title --white">Học Viện Đào Tạo<br /> Lập Trình Front-End Thực Chiến</h1>
          <p className="text">Dạy từ kinh nghiệm, học từ thực tế để tạo ra sản phẩm có giá trị.</p>
          <Button className=" btnmodal" data-modal="mdlogin" onClick={_onStart} >Bắt đầu học</Button>
        </div>
      </div>
      <div className="hero__bottom">
        <div className="container-fluid">
          <div className="hero__bottom-social">
            <a href="https://www.facebook.com/cfdcircle" target="_blank"><img src="/img/icon-facebook.svg" alt="Facebook CFD" /></a>
            <a href="https://www.youtube.com/cfdcircle" target="_blank"><img src="/img/icon-youtube.svg" alt="Youtube CFD" /></a>
          </div>
        </div>
      </div>
      <div className="hero__background">
        <img className="hero__background-img" src="/img/bg-hero-home.jpg" alt="CFD Training Background" />
        <div className="hero__background-video"
        //  ===== lay phan src gang vao cai src cuar no
        // data-src="/video/CFD-video-bg2.mp4"
        >
          {/* gang phan video ben js vao 
          bo phan src vao */}
          (<video preload="none" autoPlay loop muted playsInline>
            <source src="/video/CFD-video-bg2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>)
        </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection

  // function loadVideoBG() {
    //     let videoBgWrap = $('.hero__background-video'),
    //         srcVideoBg = videoBgWrap.data('src');
    //     setTimeout(function () {
    //         videoBgWrap.html('<video preload="none" autoplay loop muted playsinline><source src="' + srcVideoBg + '" type="video/mp4">Your browser does not support the video tag.</video>')
    //     }, 500);
    // }
    // loadVideoBG()

import React from 'react'
import Overlay from '../../components/Overlay'
import PageLoading from '../../components/PageLoading'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import ModalLogin from '../../components/ModalLogin'
import Modal from '../../components/Modal'
import { Outlet } from 'react-router-dom'
import MainContextProvider from '../../context/MainContext'
import AuthContextProvider from '../../context/AuthContext'


// ============ AUTHCONTEXT ===============
// b1: vao context de tao authcontext
// b2 : gang authcon text vao trang

const MainLayout = () => {
  return (
    // ham maincontextprovider xem ben fouder context (maincontext)
    <MainContextProvider>
      <AuthContextProvider>
        <PageLoading/>
        <Header/>
        <Navbar/>
        <Overlay/>
        {/* Main */}
        <Outlet/>
        <Footer/>
        <Modal/>
        {/* Modal Đăng Nhập / Đăng Ký */}
        <ModalLogin/>
      </AuthContextProvider>
    </MainContextProvider>
  )
}

export default MainLayout

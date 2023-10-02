import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMainContext } from '../../context/MainContext'

const Navbar = () => {

  return (
    <div>
       <nav className="navbar">
    <ul className="navbar__main">
      <li className="navbar__link">
        {/* chuyen tat ca the a thanh navlink - chuyen tat ca cac href thanh to
        bo link html thanh dau / phia truoc vd: about.html => /about
        */}
        <NavLink to="/" className="navbar__item">Trang chủ</NavLink>
      </li>
      <li className="navbar__link">
        <NavLink to="/about" className="navbar__item">Về CFD Circle</NavLink>
      </li>
      <li className="navbar__link">
        <NavLink to="/courses" className="navbar__item">Khóa học</NavLink>
      </li>
      <li className="navbar__link">
        <NavLink to="/blog" className="navbar__item">Bài viết</NavLink>
      </li>
      <li className="navbar__link">
        <NavLink to="/contact" className="navbar__item">Liên hệ</NavLink>
      </li>
    </ul>
    <div className="navbar__overlay" />
  </nav>
    </div>
  )
}

export default Navbar

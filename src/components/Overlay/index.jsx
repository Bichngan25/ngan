import React from 'react'
import { useMainContext } from '../../context/MainContext'

const Overlay = () => {
  const {handleShowNavbar} = useMainContext()
  return <div className="overlay" onClick={() => handleShowNavbar(false)}/>
}

export default Overlay

import React from 'react'
import tokenMethod from '../../utils/token'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
import { MODAL_TYPE } from '../../constants/general'


// b1: truyen vao cais path ten redirectPath
const PrivateRoute = ({redirectPath = ""}) => {
    // B4 : 
    const {handleShowModal} = useAuthContext
    const navigate = useNavigate()
    // b2 :neu k co tokenMethod.get
    if (!!!tokenMethod.get()){
        handleShowModal?.(MODAL_TYPE.login)
        // tra ve navigate den redirectPath
        return <Navigate to={redirectPath}/>
    } else{
        // tra ve trang truoc do
        navigate(-1)
    }
    // b3: neu co thi render ra outlet
  return <Outlet/>
}
// b5: sang app.jsx de truyen privateRoute 

export default PrivateRoute

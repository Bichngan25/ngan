import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// b1: tao Maincontext
// b2: tao mainContextProvider va se return ra Maincontext.provider 
// b3: trong mainCOntextPrider se nhanj vao children va trong maincontextprovider se nhan vao children
// b4: trong main context provider se nhan vao 1 prop value(nhung data, function)
// b5: tao hook ten useMainContext tra ve useContext
// b6: tao usestate

const MainContext = createContext ({})
const MainContextProvider =({children}) =>{
      // ---------- XỬ LÝ VIỆC CÓ THẺ NHẤN VAOF OVERLAY CÓ THỂ RA TRANG CẦN TRỎ, NHẤN VÀO BUTTON THÌ OUT NAVBAR VÀ CHUYỂN ĐẾN TRANG CẦN HIỂN THỊ------------------
  // B1: su dung hook úselocation . uselocation se duoc tra ve nhieu thong so nhung trong do se sd pathname
  //      * uselocation:
//   B2: tao useeffect de bat duoc su thay doi
    const {pathname} = useLocation();
    console.log("pathname", pathname)
    // tao ham show navbar( tuong tu nhu loading)
    const [isShowNavbar,SetIsShowNavbar] = useState(false)
    useEffect(() =>{
        // scroll to top 
        window.scrollTo({
            top:0,
            let: 0,
            behavior:"smooth"
        })
        SetIsShowNavbar(false);
    },[pathname])
    const handleShowNavbar = (isShow) => {
        SetIsShowNavbar(isShow)
    }
    return <MainContext.Provider value={{isShowNavbar, handleShowNavbar}}>{children}</MainContext.Provider>;
}

export default MainContextProvider

// cac gia tri( state, function, data) deu se nhan duoc . vif vay khi sd chir can goi useContext
export const useMainContext = () => useContext (MainContext);
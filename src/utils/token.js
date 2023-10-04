import Cookies from "js-cookie";
import { STORAGE } from "../constants/storage";

// ========= localStorage ============
export const localToken = {
    get : () => JSON.parse(localStorage.getItem(STORAGE.token)),
    set : (token) => localStorage.setItem(STORAGE.token, JSON.stringify(token)),
    remove: () => localStorage.removeItem(STORAGE.token),
}

//  =========== cookie ===============
export const cookieToken = {
    get: () =>
      JSON.parse(
        Cookies.get(STORAGE.token) !== undefined
          ? Cookies.get(STORAGE.token)
          : null
      ),
    set: (token) => Cookies.set(STORAGE.token, JSON.stringify(token)),
    remove: () => Cookies.remove(STORAGE.token),
  };
// export const cookieToken = {
//     get: () =>
//     // vi json.parse k the parse ra undefined nen 
//     JSON.parse(
//       Cookies.get(STORAGE.token) !== undefined
//         ? Cookies.get(STORAGE.token)
//         : null
//     ),
//     // get: () =>
//     // JSON.parse(
//     //   Cookies.get(STORAGE.token) === undefined
//     //     ? null : Cookies.get(STORAGE.token)
//     // ),
//     set: (token) => Cookies.set(STORAGE.token, JSON.stringify(token)),
//     remove: () => Cookies.remove(STORAGE.token)
// }


//lam ngan gon de khi muon chuyen tu cookie hay localstorage 
// hay nguoc lai thi chi can goi ham va command cai con laij 
// de su dung de khong phai chinh sua tung cho

// ================= goi ham =================
const tokenMethod = {
    get:() =>{
        return localToken.get();
        // return cookieToken.get()
    },
    set: (token) =>{
        return localToken.set(token)
        // return cookieToken.set(token)
    },
    remove: () =>{
        return localToken.remove()
        // return cookieToken.remove()
    }
}
export default tokenMethod
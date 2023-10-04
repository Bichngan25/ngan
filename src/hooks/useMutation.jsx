import { useState } from "react"

  // return ve ham execute (ham thuc thi) , data, error, loading
//   nho nhan vao promite
const useMutation = (promise) => {
    const [data, setData] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)

    // nho nhan vao payload
    const execute = async (payload, callback = {})=> {
        // dua quy quyet dinh khi chay ham thanh cong vaf that bai
        const {onSuccess, onFail} = callback
        // try {
        //     const res = await axios.post("https://cfdcourses.cfdcircle.vn/api/v1/subscribes",payload)
        //     console.log("res", res)
        //     if (res.data){
        //       alert("thanh cong")
        //     }
        //   } catch (error) {
        //     console.log("error", error)
        //   }
        //   finally{
        //     setLoading(false)
        //   }

        try {
          setLoading(true)
            // promise se thay the await axios.post("https://cfdcourses.cfdcircle.vn/api/v1/subscribes",payload)
            const res = await promise(payload)
            setData(res.data?.data || [])
            onSuccess?.(res.data?.data)
          } catch (error) {
            setError(error)
            onFail?.(error)
          }
          finally{
            setLoading(false)
          }
    }

  return {
    execute,
    data,
    error,
    loading
  }
}

export default useMutation

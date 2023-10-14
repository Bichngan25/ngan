import axios from 'axios';
import React, { useEffect, useState } from 'react'

  // TRA VE DATA, ERROR, LOADING, REFETCH
  // VI VAY CAN TAO HAM 

  // NHO TRUYEN DEPENDENCIES vi moi dau vo goi thi se k biet goij cai gi( vd nhu trang course thi se co nhiu ID ben trong)
  const useQuery = (promise, dependencies = []) => {
    const [data, setData] = useState([]);
    // cho loading bang false vi khi chua chay no se chua tai trang va moi lan goi ham se loading
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState ([])

    // tao ham axios
    const fetchData = async (query) => {
      // luon tao setloading
      setLoading(true);
      //  Lệnh try được dùng để kiểm tra (thực thi) một đoạn mã, nếu đoạn mã đó có chứa câu lệnh bị lỗi thì những câu lệnh nằm phía sau câu lệnh bị lỗi sẽ không được thực thi. Tuy nhiên, những câu lệnh nằm ngoài lệnh try thì vẫn thực thi bình thường.
      // Lệnh try cần phải sử dụng kèm với lệnh catch hoặc lệnh finally
      try{
        const res = await promise (query);
        // console.log("res", res);
        // thuc hien loi hua check xem co data hay k
        // if(res?.data?.length > 0) {
          setData(res.data?.data || []);
        // }
      } catch (error) {
        // console.log("error", error)
        setError(error)
      } finally{
        setLoading(false)
      }
    }
     useEffect(() =>{
    fetchData();
  },dependencies);

    return {
      data,
      loading,
      error,
      // moi lan goi lai refetch se goi ham fetch
      reFetch: fetch,
    }
  }


  export default useQuery

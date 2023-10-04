import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import CoursePaymentItem from '../../components/CoursePaymentItem'
import { Empty } from 'antd'

const MyPayment = () => {
  const {paymentInfo} = useAuthContext()
  return (
    <div>
      <div className="tab__content-item" style={{display: 'block'}}>
              {/* !!! neu k co thi de thong tin la k tim thay du lieu */}
              {!!!paymentInfo.length && (
                  <Empty
                  description="không tìm thấy dữ liệu nào"
                  style={{margin: "0 auto"}}
                  />
                )}
                  {/* !! neu co thif lay du lieu */}
                  {!!paymentInfo.length && paymentInfo.map((item, index) =>(
                  <CoursePaymentItem 
                  key={item.id || new Date().getTime() + index}
                  {...item}
                  />
                ))}
              </div>
    </div>
  )
}

export default MyPayment

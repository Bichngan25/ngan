import React from 'react'
import { formatCurrency, formatDate } from '../../utils/format'
import { PAYMENT_METHOD_LABELS } from '../../constants/general'

const CoursePaymentItem = ({name, paymentMethod, createdAt, course}) => {
    const paymentMethodName = PAYMENT_METHOD_LABELS[paymentMethod]
  return (
    <div>
      <div className="itemhistory">
                  <div className="name">{name}</div>
                  <div className="payment">{paymentMethodName}</div>
                  <div className="date">{formatDate(createdAt)}</div>
                  <div className="money">{formatCurrency(course?.price)} VND</div>
                </div>
    </div>
  )
}

export default CoursePaymentItem

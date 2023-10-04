import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { Empty } from 'antd'
import CourseItem from '../../components/CourseItem'
import { COURSE_ITEM_TYPE } from '../../utils/general'

const MyCourse = () => {
  const{courseInfo} = useAuthContext()
  return (
    <div>
      <div className="tab__content-item" style={{display: 'block'}}>
                <div className="courses__list"> 
                {/* !!! neu k co thi de thong tin la k tim thay du lieu */}
                {!!!courseInfo.length && (
                  <Empty 
                  description="không tìm thấy dữ liệu nào"
                  style={{margin: "0 auto"}}
                  />
                )}
                {/* !! neu co courseInfo thif lay du lieu */}
                {!!courseInfo.length && courseInfo.map((item, index) =>(
                  <CourseItem 
                  key={item.id || new Date().getTime() + index}
                  type={COURSE_ITEM_TYPE.normal}
                  {...item?.course}
                  />
                ))}
                </div>
              </div>
    </div>
  )
}

export default MyCourse

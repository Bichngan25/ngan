import React from 'react'
import Button from '../../components/Button'
import PATHS from '../../constants/path'
import { Empty } from 'antd'
import CourseItem from '../../components/CourseItem'

const CourseSection = ({courses = [], loading = false}) => {
  return (
    <div>
    <section className="courses">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">Tất cả <span className="color--primary">khóa học</span></h2>
        </div>
        
          {
            // ap dung empty 
            !loading && courses?.length === 0 ? (
            <Empty description="không tìm thấy khoá học nào"
             style={{margin : "0 auto"}} 
             /> ): (
              <>
                <div className="courses__list">
                    {courses.map((courses, index) => {
                  // chinh sua, them ben component (courseItem) cho phu hop
                   return <CourseItem key={courses?.id || index} {...courses}/>
                   })}
                </div>
                  <div className="courses__btnall">
                      {/* chuyen a thanh button vaf chuyen href thanh link nam trong component*/}
                      {/* phan link chuyen trang thi thay vao thanh path */}
                      {/* phan class name thay thanh variant */}
                      <Button 
                      link={PATHS.COURSE.INDEX} 
                      className="course__btn" 
                      variant='grey' 
                      >
                        Tất cả khoá học
                        </Button>
                  </div>
                  </>
             )}
        </div>
      </section>
    </div>
  )
}

export default CourseSection

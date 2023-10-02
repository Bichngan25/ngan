import React from 'react'
import useQuery from '../../hooks/useQuery';
import { courseService } from '../../services/courseService';
import useDebounce from '../../hooks/useDebounce';
import { Empty, Skeleton } from 'antd';
import CourseItem from '../../components/CourseItem';

const CoursesPage = () => {
  // goi usequery  de lay data
  const { data, loading : apiLoading } = useQuery(courseService.getCourses);
  // b2: goi data?.courses de lay data trong courses
  const courses = data?.courses || [];

  const loading = useDebounce(apiLoading, 300);

  return (
    <>
    <div>
        <main className="mainwrapper courses --ptop">
    <div className="container">
      <div className="textbox">
        <div className="container">
          <h2 className="title --t2">Tất cả khoá học</h2>
        </div>
      </div>
      <div className="courses__list">
        {/* trang thai sau khi loading roi thi k tim thay du lieu */}
        {!loading && courses?.length === 0 && (
          <Empty description="không tìm thấy dữ liệu" style ={{margin: "0 auto"}}/>
        )}
        {/* trang thai dang di lay du lieu */}
        {loading && Array(4).fill("").map((_, index)=>(
          <div
          key={index} 
          className="courses__list-item"
          style={{
            height: "50vh",
          }}>
            <Skeleton active/>
            <br/>
            <Skeleton active/>
          </div>
        ))}
        {/* loading xong roi va co data */}
        {courses?.length > 0 && !loading && courses.map((course, index)=>{
          return <CourseItem key={course?.id || index} {...course}/>
        })}
      </div>
    </div>
  </main>
    </div>
    </>
  )
}

export default CoursesPage

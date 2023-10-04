import { Empty, Skeleton } from 'antd';
import React from 'react'
import CourseItem from '../../components/CourseItem';

const CoursesSection = ({ courses = [], loading = false }) => {
  return (
    <div>
      <section className="courses">
      <div className="container">
        <div className="heading --center --noline">
          <h2 className="heading__title title --t2">Khoá học đề xuất</h2>
        </div>
        <div className="courses__list">
        {!loading && courses?.length === 0 && (
            <Empty
              description="Không tìm thấy dữ liệu nào"
              style={{ margin: "0 auto" }}
            />
          )}
          {loading &&
            Array(4)
              .fill("")
              .map((_, index) => (
                <div key={index} className="courses__list-item">
                  <Skeleton active />
                </div>
              ))}
        {courses?.length > 0 &&
            !loading &&
            courses.map((course, index) => {
              if (index < 3) {
                return <CourseItem key={course?.id || index} {...course} />;
              }
              return "";
            })}

        
          {/* <div className="courses__list-item">
            <div className="img">
              <a href="course-detail.html">
                <img src="https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg" alt="Khóa học CFD" className="course__thumbnail" />
                <span className="course__img-badge badge">OFFLINE | ONLINE</span>
              </a>
            </div>
            <div className="content">
              <p className="label">Frontend</p>
              <h3 className="title --t3"><a href="https://cfdcircle.vn/khoa-hoc/khoa-hoc-lap-trinh-frontend-newbie-28">Frontend
                  Newbie</a></h3>
              <div className="content__info">
                <div className="user">
                  <div className="user__img">
                    <img src="https://cfdcircle.vn/files/avatars/480x480/VAOXpQdhq3yNvBMQlDItAYKU29ZO0gsxPTxdryL5.jpg" alt="Avatar teacher" />
                  </div>
                  <p className="user__name">Trần Nghĩa</p>
                </div>
                <div className="price">
                  <strong className="price__discount">4.500.000đ</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="courses__list-item">
            <div className="img">
              <a href="course-detail.html">
                <img src="https://cfdcircle.vn/files/thumbnails/9VVXxGDc4ujKCegv4zcejuxJ4gC8C1qeXnECvy7s.jpg" alt="Khóa học CFD" className="course__thumbnail" />
                <span className="course__img-badge badge">OFFLINE | ONLINE</span>
              </a>
            </div>
            <div className="content">
              <p className="label">Frontend</p>
              <h3 className="title --t3"><a href="course-detail.html">Web Responsive</a></h3>
              <div className="content__info">
                <div className="user">
                  <div className="user__img">
                    <img src="https://cfdcircle.vn/files/avatars/480x480/VAOXpQdhq3yNvBMQlDItAYKU29ZO0gsxPTxdryL5.jpg" alt="Avatar teacher" />
                  </div>
                  <p className="user__name">Trần Nghĩa</p>
                </div>
                <div className="price">
                  <strong className="price__discount">4.900.000đ</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="courses__list-item">
            <div className="img">
              <a href="https://cfdcircle.vn/khoa-hoc/khoa-hoc-lap-trinh-reactjs-master-32">
                <img src="https://cfdcircle.vn/files/thumbnails/ZUTudJyluuW4DGhZ6iXS2z6jRnEe7RnKTKhDTR6h.jpg" alt="Khóa học CFD" className="course__thumbnail" />
                <span className="course__img-badge badge">OFFLINE | ONLINE</span>
              </a>
            </div>
            <div className="content">
              <p className="label">Frontend</p>
              <h3 className="title --t3"><a href="course-detail.html">ReactJS Master</a></h3>
              <div className="content__info">
                <div className="user">
                  <div className="user__img">
                    <img src="https://cfdcircle.vn/files/avatars/480x480/jttYg5V8Bv03QAC7bkQTT73dZeZKGR8vctClG6XK.jpg" alt="Avatar teacher" />
                  </div>
                  <p className="user__name">Đặng Thuyền Vương</p>
                </div>
                <div className="price">
                  <strong className="price__discount">6.000.000đ</strong>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    </div>
  )
}

export default CoursesSection

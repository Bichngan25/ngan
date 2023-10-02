import React, { useEffect } from 'react'
import CourseItem from '../../components/CourseItem';
import { Empty } from 'antd';
import { COURSE_ITEM_TYPE } from '../../utils/general';


// ======= XU LY DATA ========
// b1: call API get courses
// b2 : filter nhung course co startDate > toDate
// b3: truyen vao courseComingSection thong qua props

// de course la gia tri rong de biet du k truyen vao thi la array rong
const CourseComingSection = ({courses = [], loading = false}) => {
  // vao main.js copy code de vao useEffect
  //  ================= COURSE COMING HOME ================
  // toi uu code course coming list ben duoi

  // ================ XU LY COURSES ITEM BEN COMPONENT ==================
  useEffect (()=>{
    function courseComingList() {
      let courseComingSlider = $("#coursecoming__slider");
      courseComingSlider.flickity({
          cellAlign: "left",
          contain: true,
          prevNextButtons: false,
          pageDots: false,
          dragThreshold: 0,
          wrapAround: true
      });

      $(".coursecoming .control .control__next").on(
          "click",
          function (e) {
              e.preventDefault();
              courseComingSlider.flickity("next");
          }
      );
      $(".coursecoming .control .control__prev").on(
          "click",
          function (e) {
              e.preventDefault();
              courseComingSlider.flickity("previous");
          }
      )
  }
  courseComingList()
  },[courses])

  return (
    <div>
       <section className="coursecoming --scpadding">
      <div className="container">
        <div className="heading">
          <h2 className="heading__title title --t2">Khoá học <span className="color--primary">sắp khai giảng</span>
          </h2>
          <div className="control">
            <div className="control__prev">
              <img src="/img/icon-btn-control.svg" alt="icon prev" />
            </div>
            <div className="control__next">
              <img src="/img/icon-btn-control.svg" alt="icon next" />
            </div>
          </div>
        </div>
      </div>
      {/* loading : neu loading tai xong nhung course =0, co nghia la dang bi emty */}
      {
        !loading && courses?.length === 0 ? (
        <Empty description="không có dữ liệu" />) : (
        courses?.length > 0 && (
          <div className="coursecoming__list" id="coursecoming__slider">
          {
            // map: loop qua các phần tử và tạo ra một array mới, item trong array sẽ do callback return về
            courses?.map((course, index)=>{
              // console.log("course", course)
              return(
                <CourseItem key={course.id || index} {...course} type={COURSE_ITEM_TYPE.comming}/>
              )
            })
          }
        </div>
        )
        )
      }
     
     
    </section>
    </div>
  )
}

export default CourseComingSection

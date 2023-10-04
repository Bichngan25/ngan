import React from 'react'
import { Link } from 'react-router-dom'
import PATHS from '../../constants/path'
import moment from 'moment'
import { ROLE } from '../../constants/role'
import { formatCurrency, formatDate } from '../../utils/format'
import Button from '../Button'
import { COURSE_ITEM_TYPE } from '../../utils/general'
import { Tag } from 'antd'

// COURSE_ITEM_TYPE.normal : xem tron constants
const CourseItem = ({ type = COURSE_ITEM_TYPE.normal ,image, slug, name, teams, startDate, tags, price}) => {
// THAY SRC IMG
    const detailPath = PATHS.COURSE.INDEX + `/${slug}`
    const courseOrderPath = "/course-order" + `/${slug}`
    // role: ben constant
    const teacherInfo = teams?.find((item) => item.tags.includes(ROLE.Teacher));
    console.log("teacherInfo", teacherInfo)


    // ========== COURSE ============//
    if(type === COURSE_ITEM_TYPE.normal){
      return(
        <div className="courses__list-item">
            <div className="img">
              <Link to={detailPath}>
                <img src={image || ""} alt="Khóa học CFD" className="course__thumbnail" />
               {tags?.length > 0 && <span className="course__img-badge badge">{tags.join(" | ")}</span>}
              </Link>
            </div>
            <div className="content">
              <p className="label">Front-End</p>
              <h3 className="title --t3"><Link to={detailPath}>{name}</Link></h3>
              <div className="content__info">
              {
                teacherInfo && (
                  <div className="user">
                  <div className="user__img"><img src={teacherInfo.image || ""} alt="Avatar teacher" /></div>
                  <p className="user__name">{teacherInfo.name}</p>
                </div>
                )
              }
               
                <div className="price"><strong>{formatCurrency(price)}đ</strong></div>
              </div>
              {/* <div className="content__action">
                <a href="course-order.html" className="btn btn--primary">Đăng ký ngay</a>
                <a href="course-detail.html" className="btn btn--default"><img src="/img/icon-paper.svg" alt="icon paper" /></a>
              </div> */}
            </div>
          </div>
      )
    }
  return (
        <div className="coursecoming__item">
                <div className="coursecoming__item-img">
                  <Link to={detailPath}>
                    {/* the a doi thanh the link va href thanh to */}
                    <img 
                    src={image || ""} 
                    alt="Khóa học sắp ra mắt CFD" />
                  </Link>
                </div>
                <div className="coursecoming__item-content">
                  <p className="category label">Front-end</p>
                  <h2 className="title --t2"><Link to={detailPath}>{name || ""}</Link></h2>
                  {
                    // check lai thong tin xem co thong tin hay k
                    teacherInfo?.id && (
                        <div className="user">
                    <div className="user__img">
                      <img src={teacherInfo.image || ""} alt="Avatar teacher" />
                    </div>
                    <p className="user__name">{teacherInfo.name || ""}</p>
                  </div>
                    )
                  }
                  <div className="info">
                    {
                        // check
                        startDate && (
                            <div className="labeltext">
                            <span className="label --blue">Ngày khai giảng</span>
                            {/* cai moment sau do add moment */}
                            <p className="title --t2">{formatDate(startDate)}</p>
                          </div>
                        )
                    }
                    {
                      tags?.length > 0 && (
                        <div className="labeltext">
                        <span className="label --blue">Hình thức học</span>
                        <p className="title --t2">{tags.join(" | ")}</p>
                      </div>
                      )
                    }
                  </div>
                  <div className="btnwrap">
                    {/* day la button not link. vi vay vao component (button) them link vao */}
                    <Button link={courseOrderPath}>Đăng Ký Học</Button>
                    <Button link={detailPath} variant='border'>Xem chi tiết</Button>
                  </div>
                </div>
          </div>
  )
}

export default CourseItem
import React from 'react'

const MyCourse = () => {
  return (
    <div>
      <div className="tab__content-item" style={{display: 'block'}}>
                <div className="courses__list">
                  <div className="courses__list-item">
                    <div className="img">
                      <a href="course-detail.html">
                        <img src="https://cfdcircle.vn/files/thumbnails/ahvVmtDlrzUPhKLDrc4YkdA8iFbACauYCN76TSGs.jpg" alt="Khóa học CFD" className="course__thumbnail" />
                        <span className="course__img-badge badge">Offline | Online</span>
                      </a>
                    </div>
                    <div className="content">
                      <p className="label">Front-End</p>
                      <h3 className="title --t3"><a href="course-detail.html">Frontend Newbie</a></h3>
                      <div className="content__info">
                        <div className="user">
                          <div className="user__img"><img src="/img/avatar_nghia.jpg" alt="Avatar teacher" /></div>
                          <p className="user__name">Trần Nghĩa</p>
                        </div>
                        <div className="price"><strong>4.500.000đ</strong></div>
                      </div>
                      <div className="content__action">
                        <a href="course-order.html" className="btn btn--primary">Đăng ký ngay</a>
                        <a href="course-detail.html" className="btn btn--default"><img src="/img/icon-paper.svg" alt="icon paper" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="courses__list-item">
                    <div className="img">
                      <a href="course-detail.html">
                        <img src="https://cfdcircle.vn/files/thumbnails/9VVXxGDc4ujKCegv4zcejuxJ4gC8C1qeXnECvy7s.jpg" alt="Khóa học CFD" className="course__thumbnail" />
                        <span className="course__img-badge badge">Offline | Online</span>
                      </a>
                    </div>
                    <div className="content">
                      <p className="label">Front-End</p>
                      <h3 className="title --t3"><a href="https://cfdcircle.vn/files/thumbnails/9VVXxGDc4ujKCegv4zcejuxJ4gC8C1qeXnECvy7s.jpg">Web
                          Responsive</a></h3>
                      <div className="content__info">
                        <div className="user">
                          <div className="user__img">
                            <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
                          </div>
                          <p className="user__name">Trần Nghĩa</p>
                        </div>
                        <div className="price"><strong>4.900.000đ</strong></div>
                      </div>
                      <div className="content__action">
                        <a href="course-order.html" className="btn btn--primary">Đăng ký ngay</a>
                        <a href="course-detail.html" className="btn btn--default"><img src="/img/icon-paper.svg" alt="icon paper" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default MyCourse

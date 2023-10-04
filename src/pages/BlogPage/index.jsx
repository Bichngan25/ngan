import React from 'react'
import { useNavigate } from 'react-router-dom'

const BlogPage = () => {
  const navigave = useNavigate ()
  
  return (
    <div>
    <main className="mainwrapper blog --ptop">
    <div className="container">
      <div className="textbox">
        <div className="container">
          <h2 className="title --t2">Blog</h2>
        </div>
      </div>
      <div className="blog__menu">
        <a href="#" className="blog__menu-item active">Tất cả</a>
        <a href="#" className="blog__menu-item">Tin tức</a>
        <a href="#" className="blog__menu-item">Dev</a>
        <a href="#" className="blog__menu-item">Design</a>
        <a href="#" className="blog__menu-item">Tài Nguyên</a>
      </div>
      <div className="blog__list">
        <div className="blog__list-item">
          <div className="img">
            <a href="blog-detail.html">
              <img src="https://cfdcircle.vn/files/thumbnails/JuQE6Rd3DGuiHJOpgEb3Jg1KoLoa25OlLrl1pDQa.jpg" alt="Khóa học CFD" className="course__thumbnail" />
            </a>
          </div>
          <div className="content">
            <p className="label">Tài nguyên</p>
            <h2 className="title --t3">
              <a href="blog-detail.html">Top 5 bản thiết kế landing page figma miễn phí dành cho front-end
                dev và designer</a>
            </h2>
            <div className="content__info">
              <div className="user">
                <div className="user__img">
                  <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="date">10/12/2022</div>
            </div>
          </div>
        </div>
        <div className="blog__list-item">
          <div className="img">
            <a href="blog-detail.html">
              <img src="https://cfdcircle.vn/files/thumbnails/ebQvh5lMnPglamK4Q8DDWdoyzTnHLcDej5KJnlJh.jpg" alt="Khóa học CFD" className="course__thumbnail" />
            </a>
          </div>
          <div className="content">
            <p className="label">Dev</p>
            <h2 className="title --t3">
              <a href="blog-detail.html">Xây dựng portfolio cá nhân để thành công trong sự nghiệp của
                bạn</a>
            </h2>
            <div className="content__info">
              <div className="user">
                <div className="user__img">
                  <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="date">10/12/2022</div>
            </div>
          </div>
        </div>
        <div className="blog__list-item">
          <div className="img">
            <a href="blog-detail.html">
              <img src="https://cfdcircle.vn/files/thumbnails/ZXjS4gWbyeJ95CrLVUTwZI90CQQwBIrDI9Ik64sq.jpg" alt="Khóa học CFD" className="course__thumbnail" />
            </a>
          </div>
          <div className="content">
            <p className="label">Dev</p>
            <h2 className="title --t3">
              <a href="blog-detail.html">ReactJS là gì? Tại sao ReactJs là thư viện Javascript phổ biến
                nhất hiện nay</a>
            </h2>
            <div className="content__info">
              <div className="user">
                <div className="user__img">
                  <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="date">10/12/2022</div>
            </div>
          </div>
        </div>
        <div className="blog__list-item">
          <div className="img">
            <a href="blog-detail.html">
              <img src="https://cfdcircle.vn/files/thumbnails/ZettvAFqback8Jzxiyz3DVPjvkoBUhUJY94DJwSK.jpg" alt="Khóa học CFD" className="course__thumbnail" />
            </a>
          </div>
          <div className="content">
            <p className="label">Dev</p>
            <h2 className="title --t3">
              <a href="blog-detail.html">18 xu hướng web animation nổi bật trong năm 2023</a>
            </h2>
            <div className="content__info">
              <div className="user">
                <div className="user__img">
                  <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="date">10/12/2022</div>
            </div>
          </div>
        </div>
        <div className="blog__list-item">
          <div className="img">
            <a href="blog-detail.html">
              <img src="https://cfdcircle.vn/files/thumbnails/Tey1o9gldaFwCrCvQ0vgSDKuE6CKFYnBm4dWIVps.jpg" alt="Khóa học CFD" className="course__thumbnail" />
            </a>
          </div>
          <div className="content">
            <p className="label">Dev</p>
            <h2 className="title --t3">
              <a href="blog-detail.html">Zustand - State Management là gì? Liệu có thể so sánh được với
                Redux hay không?</a>
            </h2>
            <div className="content__info">
              <div className="user">
                <div className="user__img">
                  <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="date">10/12/2022</div>
            </div>
          </div>
        </div>
        <div className="blog__list-item">
          <div className="img">
            <a href="blog-detail.html">
              <img src="https://cfdcircle.vn/files/thumbnails/esliqep9bvqPUmju6zn1Cf6cFBBwNXhcZlwHcwtL.jpg" alt="Khóa học CFD" className="course__thumbnail" />
            </a>
          </div>
          <div className="content">
            <p className="label">Dev</p>
            <h2 className="title --t3">
              <a href="blog-detail.html">Tất tần tật về Shorthands trong CSS</a>
            </h2>
            <div className="content__info">
              <div className="user">
                <div className="user__img">
                  <img src="/img/avatar_nghia.jpg" alt="Avatar teacher" />
                </div>
                <p className="user__name">Trần Nghĩa</p>
              </div>
              <div className="date">10/12/2022</div>
            </div>
          </div>
        </div>
      </div>
      <ul className="paging">
        <li><a href="#"><i><img src="/img/iconprev.svg" alt /></i></a></li>
        <li><a href="#" className="active">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#"><i><img src="/img/iconprev.svg" alt /></i></a></li>
      </ul>
    </div>
  </main>
  </div>
  )
}

export default BlogPage

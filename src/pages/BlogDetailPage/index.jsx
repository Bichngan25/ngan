import React from 'react'
import { useParams } from 'react-router-dom'

const BlogDetailPage = () => {
  const { blogslug } = useParams()
  console.log("blogslug", blogslug)

  return (
    <div>
      <main className="mainwrapper blogdetail --ptop">
    <div className="container">
      <div className="wrapper">
        <div className="blogdetail__title">
          <h1 className="title --t2">Xây Dựng Portfolio Cá Nhân Để Thành Công Trong Sự Nghiệp Của Bạn</h1>
          <ul className="meta">
            <li className="meta__item">Đăng bởi Trần Nghĩa</li>
            <li className="meta__item">Dev</li>
            <li className="meta__item">15/07/2021</li>
          </ul>
        </div>
        <div className="blogdetail__content">
          <img src="https://cfdcircle.vn/files/thumbnails/ebQvh5lMnPglamK4Q8DDWdoyzTnHLcDej5KJnlJh.jpg" alt="Post thumnail" />
          <div className="blogdetail__content-entry">
            <p>Nếu bạn đang muốn tìm kiếm một công việc mới hoặc muốn phát triển sự nghiệp của mình, thì
              việc xây dựng một
              portfolio cá nhân là điều rất quan trọng. Portfolio cá nhân cho phép bạn giới thiệu bản thân
              và kinh nghiệm của
              mình với nhà tuyển dụng hoặc khách hàng tiềm năng. Trong bài viết này, chúng ta sẽ tìm hiểu
              chi tiết về cách xây
              dựng một portfolio cá nhân để giúp bạn thành công trong sự nghiệp của mình.</p>
            <h2>Ai nên xây dựng portfolio cá nhân?</h2>
            <p>Portfolio cá nhân là phù hợp cho mọi người, từ sinh viên mới tốt nghiệp đến những người đã có
              kinh nghiệm nhiều
              năm trong lĩnh vực của mình. Những người sau đây nên đặc biệt lưu ý đến việc xây dựng
              portfolio cá nhân:</p>
            <ul>
              <li><strong>Sinh viên</strong>: Nếu bạn đang tìm kiếm công việc đầu tiên của mình, một
                portfolio cá nhân sẽ giúp
                bạn thu hút sự chú ý của nhà tuyển dụng.</li>
              <li><strong>Người làm tự do (freelancer)</strong>: Nếu bạn là một nhà thiết kế đồ họa, nhà
                phát triển web hay
                một nghệ sĩ tự do khác, portfolio cá nhân sẽ giúp bạn trưng bày tài năng của mình và thu
                hút khách hàng tiềm
                năng.</li>
              <li><strong>Người muốn thăng tiến trong sự nghiệp</strong>: Nếu bạn muốn chuyển sang một vai
                trò mới hoặc muốn
                được thăng tiến trong công việc hiện tại của mình, một portfolio cá nhân sẽ giúp bạn
                chứng minh rằng bạn có
                những kỹ năng cần thiết để đạt được mục tiêu đó.</li>
            </ul>
            <h2>Những gì cần có trong một portfolio cá nhân?</h2>
            <p>Một portfolio cá nhân hiệu quả cần có các thành phần sau:</p>
            <h3>Hình ảnh chuyên nghiệp</h3>
            <p>Một bức ảnh chuyên nghiệp sẽ giúp bạn giới thiệu mình với sự chuyên nghiệp và chắc chắn. Bạn
              nên chọn một bức ảnh
              chụp chính diện, với ánh sáng tốt và phù hợp với ngành nghề của bạn.</p>
            <p><img src="https://cfdcircle.vn/files/blog/xay-dung-porfolio-cfd-circle.jpg" alt="CFD Circle" width="100%" height="auto" /></p>
            <h3>Giới thiệu bản thân</h3>
            <p>Giới thiệu bản thân là bước đầu tiên trong việc xây dựng portfolio cá nhân. Bạn nên đưa ra
              thông tin cơ bản về
              bản thân, bao gồm tên, vị trí hiện tại, kinh nghiệm và mục tiêu nghề nghiệp của bạn.</p>
            <h3>Các dự án đã hoàn thành</h3>
            <p>Nếu bạn là một nhà thiết kế đồ họa hay nhà phát triển web, thì bạn nên bao gồm các dự án đã
              hoàn thành của mình
              trong portfolio cá nhân. Đây sẽ giúp cho nhà tuyển dụng hoặc khách hàng tiềm năng có được
              cái nhìn rõ ràng về
              khả năng của bạn.</p>
            <h3>Những kỹ năng của bạn</h3>
            <p>Bạn nên liệt kê các kỹ năng chính của mình trong portfolio cá nhân. Bạn cũng nên đánh giá mức
              độ thành thạo của
              mình đối với từng kỹ năng này, bao gồm cả kỹ năng mềm và kỹ năng chuyên môn.</p>
            <h3>Những chứng chỉ hoặc giải thưởng</h3>
            <p>Nếu bạn có các chứng chỉ liên quan đến ngành nghề của mình hoặc đã nhận được các giải thưởng
              trong quá trình làm
              việc, hãy đưa chúng vào portfolio cá nhân để tăng tính chuyên nghiệp và uy tín cho bản thân.
            </p>
            <h3>Những đánh giá từ khách hàng hoặc nhà tuyển dụng</h3>
            <p>Nếu bạn đã từng làm việc với khách hàng hoặc được nhà tuyển dụng đánh giá cao, hãy đưa những
              đánh giá này vào
              portfolio cá nhân. Điều này sẽ giúp tăng tính xác thực và độ tin cậy của bạn.</p>
            <h2>Làm thế nào để xây dựng portfolio cá nhân?</h2>
            <p>Để xây dựng một portfolio cá nhân hiệu quả, bạn nên tuân theo các bước sau:</p>
            <h3>Bước 1: Xác định mục tiêu của bạn</h3>
            <p>Trước khi bắt đầu xây dựng portfolio cá nhân, bạn cần phải xác định mục tiêu của mình. Bạn
              cần phải thực hiện các
              bước sau:</p>
            <ul>
              <li>Xác định ngành nghề mà bạn muốn theo đuổi.</li>
              <li>Xác định vị trí công việc mà bạn muốn đạt được.</li>
              <li>Tìm hiểu những kỹ năng và kiến thức cần thiết cho vị trí công việc đó và tập trung vào
                chúng.</li>
            </ul>
            <p><img src="https://cfdcircle.vn/files/blog/xay-dung-porfolio-2-cfd-circle.jpg" alt="CFD Circle" width="100%" height="auto" /></p>
            <h3>Bước 2: Chọn nền tảng để xây dựng portfolio cá nhân</h3>
            <p>Bạn có thể sử dụng các nền tảng miễn phí như Wix, WordPress hay Squarespace để xây dựng
              portfolio cá nhân của
              mình. Bạn cũng có thể tự thiết kế trang web của mình nếu bạn có kiến thức về lập trình.</p>
            <h3>Bước 3: Lựa chọn template và tùy chỉnh</h3>
            <p>Sau khi đã chọn được nền tảng để xây dựng portfolio cá nhân của mình, bạn có thể lựa chọn một
              mẫu phù hợp và tùy
              chỉnh nó để phù hợp với phong cách của bản thân. Hoặc bạn có thể tự thiết kế giao diện theo
              ngành nghề và hướng
              sáng tạo của riêng mình.</p>
            <p><strong>Top 5 Bản Thiết Kế Landing Page Figma Miễn Phí Dành Cho Front-End Dev Và
                Designer</strong></p>
            <p><a href="https://cfdcircle.vn/top-5-ban-thiet-ke-landing-page-figma-mien-phi-danh-cho-front-end-dev-va-designer-82" target="_blank" rel="noopener">Xem các bản thiết kế Landing Page Portfolio Figma miễn
                phí</a></p>
            <h3>Bước 4: Tạo nội dung cho portfolio cá nhân</h3>
            <p>Sau khi đã hoàn tất các bước trên, bạn có thể bắt đầu tạo nội dung cho portfolio cá nhân của
              mình. Hãy chú ý đến
              các thành phần quan trọng như đã đề cập ở trên và đảm bảo rằng nội dung của bạn phù hợp với
              mục tiêu của bạn.
            </p>
            <h3>Bước 5: Tối ưu hóa nội dung cho SEO</h3>
            <p>Để đảm bảo rằng portfolio cá nhân của bạn được tìm thấy trên công cụ tìm kiếm, hãy sử dụng
              các từ khóa phù hợp
              với ngành nghề của bạn và tối ưu hóa nội dung của bạn cho SEO.</p>
            <p><img src="https://cfdcircle.vn/files/blog/xay-dung-porfolio-3-cfd-circle.jpg" alt="CFD Circle" width="100%" height="auto" /></p>
            <h2>Những lợi ích của việc xây dựng portfolio cá nhân</h2>
            <p>Xây dựng portfolio cá nhân có rất nhiều lợi ích, bao gồm:</p>
            <h3>Tăng tính chuyên nghiệp và uy tín của bạn</h3>
            <p>Một portfolio cá nhân chuyên nghiệp sẽ giúp bạn tăng tính chuyên nghiệp và uy tín của mình
              trong mắt nhà tuyển
              dụng hoặc khách hàng tiềm năng.</p>
            <h3>Giúp bạn thu hút sự chú ý của nhà tuyển dụng</h3>
            <p>Nếu bạn đang tìm kiếm việc làm mới, một portfolio cá nhân sẽ giúp bạn thu hút sự chú ý của
              nhà tuyển dụng và tăng
              cơ hội được tuyển dụng.</p>
            <h3>Giúp bạn trưng bày tài năng của mình</h3>
            <p>Nếu bạn là một nhà thiết kế đồ họa hoặc nhà phát triển web, một portfolio cá nhân sẽ giúp bạn
              trưng bày tài năng
              của mình với khách hàng tiềm năng.</p>
            <h3>Giúp bạn cải thiện kỹ năng tự quản lý</h3>
            <p>Việc xây dựng và quản lý portfolio cá nhân của mình cũng giúp bạn cải thiện kỹ năng tự quản
              lý và tự truyền đạt
              thông tin.</p>
          </div>
          <div className="blogdetail__line" />
          <div className="blogdetail__content-social btngroup">
            <a href="#" className="btn btn-fb"><img src="/img/icon-fb-share.svg" alt /><span>Share</span></a>
            <a href="#" className="btn btn-linkedin"><img src="/img/icon-in-share.svg" alt /><span>Share</span></a>
          </div>
        </div>
      </div>
      <div className="blogdetail__related">
        <h2 className="blogdetail__related-title title --t2">Bài viết liên quan</h2>
        <div className="blog__list">
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
                <a href="blog-detail.html">Zustand - State Management là gì? Liệu có thể so sánh được
                  với
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
      </div>
    </div>
  </main>
  </div>
  )
}

export default BlogDetailPage

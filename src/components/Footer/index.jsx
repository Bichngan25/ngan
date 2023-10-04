import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
    <div className="container">
      <div className="content">
        <div className="content-item">
          <h3 className="label">Thông tin</h3>
          <ul>
            <li><a href="about.html">Về CFD Circle</a></li>
            <li><a href="courses.html">Khóa học</a></li>
            <li><a href="blog.html">Bài viết</a></li>
          </ul>
        </div>
        <div className="content-item">
          <h3 className="label">Hỗ trợ</h3>
          <ul>
            <li><a href="contact.html">Trung tâm hỗ trợ</a></li>
            <li><a href="payment-method.html">Phương thức thanh toán</a></li>
            <li><a href="privacy.html">Chính sách và điều khoản</a></li>
          </ul>
        </div>
        <div className="content-item">
          <h3 className="label">Kết nối</h3>
          <ul>
            <li><a href="https://www.facebook.com/groups/cfdteam" target="_blank"><i><img src="/img/icon-cfd-footer.svg" alt /></i><span>Cộng đồng</span></a>
            </li>
            <li><a href="https://www.facebook.com/cfdcircle" target="_blank"><i><img src="/img/icon-fb-footer.svg" alt /></i><span>Facebook</span></a></li>
            <li><a href="https://www.youtube.com/cfdcircle" target="_blank"><i><img src="/img/icon-ytb-ft.svg" alt /></i><span>Youtube</span></a></li>
          </ul>
        </div>
        <div className="content-item">
          <h3 className="label">Liên hệ</h3>
          <ul>
            <li><a href="https://goo.gl/maps/RnCAPv3CBjUgTUFd8" target="_blank"><i><img src="/img/icon-address.svg" alt /></i><span>666/46/29 Ba Tháng Hai,
                  phường 14, quận
                  10, TPHCM</span></a></li>
            <li><a href="tel:0989596913"><i><img src="/img/icon-phone.svg" alt /></i><span>(+84) 98 9596
                  913</span></a>
            </li>
            <li><a href="mailto:info@cfdcircle.vn"><i><img src="/img/icon-mail.svg" alt /></i><span>info@cfdcircle.vn</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <div className="copyright">
          <img src="/img/icon-footer-copy.svg" alt /><span>© 2023 CFD Circle</span>
        </div>
        <a href="./" target="_blank" className="logobct"><img src="/img/logo-bo-cong-thuong.png" alt /></a>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footer

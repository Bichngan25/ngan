import React from 'react'

const FaqSection = () => {
  return (
    <div>
      <section className="faq --scpadding">
      <div className="container">
        <div className="faq__inner">
          <div className="heading --noline --center">
            <h2 className="heading__title title --t2">Câu hỏi <span className="color--primary">thường gặp</span>
            </h2>
          </div>
          <div className="faq__list">
            <div className="accordion">
              <h3 className="accordion__title label">Thông tin chung</h3>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Muốn đặt câu hỏi với giảng viên, thì phải làm sao?</strong></h4>
                </div>
                <div className="accordion__content-text">
                  I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials”
                  that
                  offers
                  some tangible benefits over alternatives like VueJS for simple page interactions.
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Thành viên sáng lập CFD gồm những ai?</strong></h4>
                </div>
                <div className="accordion__content-text">
                  Đối với hình thức học Offline hoặc Online cùng lớp offline thông qua Google Meet thì
                  học viên có thể hỏi trực tiếp trong
                  lúc học, cũng như là hỏi trên nhóm chat Facebook của lớp bạn đang học, giảng viên và
                  mentor sẽ hỗ trợ 24/7. <br /><br />
                  Đối với hình thức học Video Mentor, học viên có thể đặt câu hỏi trong các buổi dạy
                  online của giảng viên, cũng như là
                  hỏi trên nhóm chat Telegram của lớp bạn đang học, giảng viên và mentor sẽ hỗ trợ
                  24/7. <br /><br />
                  Đối với hình thức học Video, học viên có thể đặt câu hỏi thông qua nhóm chat
                  Facebook hỗ trợ học viên của đội ngũ giảng
                  viên và mentor CFD Circle.
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Học tại CFD Circle xong có đi làm hay thực tập được không?</strong></h4>
                </div>
                <div className="accordion__content-text">
                  Khóa học thực chiến tại CFD Circle giúp học viên trải nghiệm dự án, quy trình làm
                  việc và kỹ năng thực tế cần có để
                  không chỉ xin thực tập mà còn có thể ứng tuyển các vị trí chính thức cao hơn như ở
                  các công ty.
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>CFD Circle có cam kết đầu ra và cấp chứng chỉ không?</strong></h4>
                </div>
                <div className="accordion__content-text">
                  Hiện tại, CFD Circle không quảng cáo bằng cách cam kết đầu ra 100% để thu hút học
                  viên, vì thế, CFD không cam kết đầu ra
                  và chứng chỉ, điều chúng tôi làm là cố gắng hết sức để truyền đạt và giúp cho tất cả
                  học viên có thể làm được việc và
                  các kỹ năng thực tế cần có sau khóa học và ứng tuyển ít nhất là vị trí fresher cho
                  các công ty.
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Học tại CFD Circle sao cho hiệu quả nhất?</strong></h4>
                </div>
                <div className="accordion__content-text">
                  Học viên cần chuẩn bị đủ thời gian để học Offline hoặc Online, cũng như thời gian để
                  hoàn thành bài tập, tự học tại
                  nhà.<br /><br /> Tự tin vào bản thân, kiên trì, cố gắng và sức chiến đấu cao không lùi
                  bước, chủ động hỏi những vấn đề chưa
                  rõ để được giải đáp và hỗ trợ. <br /><br /> Hạn chế tối đa việc nghỉ học, nếu có nghỉ
                  thì phải xin và xem lại video được ghi
                  lại trong lúc học để hoàn thành bài tập và kiến thức ngày hôm đó.
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Sau mỗi buổi học có quay video để xem lại không?</strong></h4>
                </div>
                <div className="accordion__content-text">
                  CFD Circle sẽ quay lại video buổi học offline để các bạn không tham gia được có thể
                  xem lại bằng cách đăng nhập vào
                  website CFD, chọn mục Khóa Học Của Tôi, chọn Khóa Đang Học và xem lại
                  video.<br /><br />Bản quyền video thuộc về CFD Circle,
                  nên nếu học viên tìm cách tải video về và chia sẻ thì sẽ bị khóa tài khoản vĩnh
                  viễn.
                </div>
              </div>
            </div>
            <div className="accordion">
              <h3 className="accordion__title label">Đăng ký, thanh toán</h3>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Đăng ký khóa học tại CFD Circle như thế nào?</strong></h4>
                </div>
                <div className="accordion__content-text">
                  Bạn đăng ký tài khoản, chọn khóa học muốn học, điền đầy đủ thông tin và bấm đăng ký
                  học.<br /><br />
                  Đối với khoá học Offline: Bạn có thể thanh toán bằng chuyển khoản ngân hàng, ví điện
                  tử Momo hoặc đóng tiền mặt tại văn
                  phòng CFD Circle. Đội ngũ CFD Circle sẽ gửi email cho bạn để xác nhận khi bạn đăng
                  ký khoá học thành công.<br /><br />
                  Đối với khoá học Online hoặc Video: Bạn có thể thanh toán bằng chuyển khoản ngân
                  hàng hoặc ví điện tử Momo.<br /><br />
                  Thông tin chuyển khoản sẽ được gửi đến email của bạn ngay khi bạn đăng ký khoá học,
                  khoá học sẽ được kích hoạt khi bạn
                  thanh toán thành công.
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Làm sao để được giảm giá khoá học?</strong></h4>
                </div>
                <div className="accordion__content-text">
                  Đối với khoá học Offline hoặc Online cùng lớp Offline:<br />
                  - Giảm giá cho mỗi học viên khi học theo nhóm 2 người trở lên (áp dụng trên từng
                  khoá học cụ thể).<br />
                  Đối với khoá học video:<br />
                  - Chương trình giảm giá tuỳ từng mỗi khoá học khác nhau.
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Làm sao để đăng ký làm giảng viên/đối tác hoặc mentor tại CFD
                      Circle</strong></h4>
                </div>
                <div className="accordion__content-text">
                  Đối với giảng viên/đối tác:<br />
                  Bạn có thể đăng ký trở thành giảng viên/đối tác nội dung cho CFD Circle thì vui lòng
                  bấm <a href="https://cfdcircle.vn/dang-ky-giang-vien" target="_blank"><strong>đăng
                      ký giảng viên</strong></a>. <br /><br />
                  Đối với mentor:<br />
                  CFD Circle sẽ thông báo tuyển dụng mentor rộng rãi thông qua website và nhóm Cộng
                  đồng CFD Circle để các bạn có thể ứng
                  tuyển.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default FaqSection

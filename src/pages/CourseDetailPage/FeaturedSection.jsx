import React from 'react'

const FeaturedSection = () => {
  return (
    <div>
      <section className="featured">
      <img src="img/icon-cfd.svg" alt className="featured__c" />
      <div className="container">
        <div className="featured__title">
          <h2 className="title --t2 --white"><span>Ưu điểm</span><br />của
            khoá học</h2>
        </div>
        <div className="featured__content">
          <div className="featured__content-item">
            <h3 className="title --t3 --white">Hình thức học offline hoặc online.</h3>
            <p>Học viên có thể học offline hoặc online cùng với lớp offline thông qua Google Meet. Trải
              nghiệm học và được
              hỗ trợ như học offline.</p>
          </div>
          <div className="featured__content-item">
            <h3 className="title --t3 --white">Hỗ trợ từng học viên 24/7</h3>
            <p>Ngoài những buổi học trên lớp thì khi về nhà các bạn cũng sẽ được hỗ trợ để hoàn thành bài
              tập và dự án liên
              tục xuyên suốt khoá học thông qua google meet.</p>
          </div>
          <div className="featured__content-item">
            <h3 className="title --t3 --white">Buổi học được quay video</h3>
            <p>Mỗi buổi học được quay video lại để học viên có thể xem lại khi cần thiết. Cũng như khi bạn
              nghỉ thì cũng có
              thể học lại thông qua video buổi học đó.</p>
          </div>
          <div className="featured__content-item">
            <h3 className="title --t3 --white">Được học lại miễn phí nếu hoàn thành ít nhất 42 buổi học</h3>
            <p>Khi bạn đã hoàn thành ít nhất 42/48 buổi nhưng cảm thấy chưa vững thì sẽ được học lại miễn
              phí vào khoá tiếp
              theo.</p>
          </div>
          <div className="featured__content-item">
            <h3 className="title --t3 --white">Hoàn thành 5-6 dự án &amp; có đủ kỹ năng ứng tuyển vị trí
              Front-end Dev</h3>
            <p>Với hình thức học thực chiến liên tục trên dự án, sau khoá học bạn có thể hoàn thành ít nhất
              5-6 dự án
              website responsive và React Js theo bản thiết kế và có kiến thức vững chắc để ứng tuyển vị
              trí chính thức
              Front-end Dev tại các công ty.</p>
          </div>
          <div className="featured__content-item">
            <h3 className="title --t3 --white">Tham gia tiệc cuối khoá miễn phí</h3>
            <p>Sau mỗi khoá học, CFD Circle sẽ tổ chức tiệc cuối khoá không tính phí để cùng ngồi lại với
              nhau và chia sẻ
              nhằm tạo sự gắn kết cho tất cả học viên.</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default FeaturedSection

import React from 'react'

const FeaturedSection = () => {
  return (
    <div>
       <section className="featured">
      <img src="/img/icon-cfd.svg" alt className="featured__c" />
      <div className="container">
        <div className="featured__title">
          <h2 className="title --t2 --white">Những điều <br /><span>Đặc biệt</span> Tại CFD</h2>
        </div>
        <div className="featured__content">
          <div className="featured__content-item">
            <h3 className="title --t3 --white">Chương trình học thực chiến</h3>
            <p>
              CFD Circle đào tạo thực chiến trên dự án, đi thẳng vào trọng tâm, sát với yêu cầu thực tế,
              được truyền đạt từ những
              giảng viên giàu kinh nghiệm và tâm huyết.
            </p>
          </div>
          <div className="featured__content-item">
            <h3 className="title --t3 --white">Đồng hành và hỗ trợ 24/7</h3>
            <p>
              Giảng viên, mentor và học viên là một team gắn kết, cùng nhau hỗ trợ, kết nối và giúp đỡ lẫn
              nhau trong suốt quá trình
              học và phát triển sự nghiệp.
            </p>
          </div>
          <div className="featured__content-item">
            <h3 className="title --t3 --white">Hình thức học đa dạng</h3>
            <p>
              Học offline hoặc online cùng lớp offline thông qua Google Meet, học viên được hỗ trợ và đánh
              giá như học viên học
              offline.
            </p>
          </div>
          <div className="featured__content-item">
            <h3 className="title --t3 --white">Đặt chữ "Tâm" trong tất cả mọi việc</h3>
            <p>
              Cái tâm của người dạy, cùng sự tâm huyết của người học, ắt sẽ thành công trên con đường sự
              nghiệp của mỗi chúng ta.
            </p>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default FeaturedSection

import React from 'react'
import Accordion from '../../components/Accordion';

const ContentDetailSection = ({description, startDate, schedule = {},content = [],required = [],teams = []}) => {
  const modifiedContent = content?.map((item, index) => {
    const { id, title, description } = item;
    return {
      id: id || new Date().getTime() + index,
      title: title,
      content: description,
    };
  });
  return (
    <div>
      <section className="contentdetail">
      <div className="content">
        <div className="container">
          <div className="contentrow ctintro">
            <h3 className="contentrow__title title --t3">Giới thiệu</h3>
            <div className="contenteditor" dangerouslySetInnerHTML={{ __html: description }}/>

              {/* <h2 style={{fontSize: 'inherit', margin: 'inherit', fontFamily: 'inherit', lineHeight: 'inherit'}}>
                Khoá học LẬP TRÌNH
                FRONT-END MASTER này phù hợp với những bạn đang là sinh viên ngành IT hoặc trái ngành
                muốn trở thành Lập
                Trình Viên Front-end Chuyên Nghiệp để đi làm tại các công ty nhưng không thể tự học hoặc
                tự học nhưng chưa
                thể ứng dụng và hoàn thiện dự án thực tế một cách tốt nhất. Khoá học FRONT-END MASTER
                chính là lựa chọn phù
                hợp nhất với bạn. Đội ngũ CFD Circle sẽ giúp bạn có đầy đủ kiến thức, kinh nghiệm kỷ
                năng cần thiết bằng
                việc giảng dạy giúp bạn hoàn thành được ít nhất 5-6 dự án thực tế. Ngoài những
                kiến thức thì bạn sẽ
                tích luỹ được rất nhiều kinh nghiệm thực tế trong quá trình học và làm dự án để dễ dàng
                ứng tuyển thành
                công.</h2>
              <h3><strong>Khoá học FRONTEND MASTER được chia làm 3 giai đoạn chính:</strong></h3>
              <p>- <strong>FRONTEND NEWBIE</strong>: <strong>Thời lượng</strong> 6 tuần (2
                buổi/tuần). <strong>Thời gian
                  học</strong> 18h45 - 21h45 thứ 3, 7</p>
              <p>- <strong>WEB RESPONSIVE</strong>:<strong>Thời lượng</strong> 5 tuần (3 buổi/tuần).
                <strong>Thời gian
                  học</strong> 18h45 - 21h45 thứ 2,4,6
              </p>
              <p>- <strong>REACTJS MASTER:</strong> <strong>Thời lượng</strong> 6 tuần (3 buổi/tuần).
                <strong>Thời gian
                  học</strong> 18h45 - 21h45 thứ 2,4,6
              </p>
              <p><strong>HÌNH THỨC HỌC: </strong>OFFLINE HOẶC ONLINE GOOGLE MEET CÙNG VỚI LỚP OFFLINE</p>
              <p><strong>SỐ LƯỢNG HỌC VIÊN: </strong>15-20 học viên</p>
              <p style={{color: '#00afab'}}>KHOÁ HỌC NÀY ĐANG CÓ ƯU ĐÃI <strong style={{fontSize: 22}}>GIẢM
                  GIÁ</strong> TỪ
                <strong style={{fontSize: 22}}>15.400.000 VND</strong> CHỈ CÒN <strong style={{fontSize: 22}}>14.700.000
                  VND.</strong>
              </p>
              <p style={{color: '#00afab'}}><strong style={{fontSize: 22}}>GIẢM 200K</strong> CHO MỖI HỌC
                VIÊN HỌC THEO <strong style={{fontSize: 22}}>NHÓM 2 NGƯỜI.</strong></p>
              <p style={{color: '#00afab'}}><strong style={{fontSize: 22}}>GIẢM 300K</strong> CHO MỖI HỌC
                VIÊN HỌC THEO <strong style={{fontSize: 22}}>NHÓM TỪ 3 NGƯỜI</strong> TRỞ LÊN.</p> */}

              <div className="videowrap"><iframe title="YouTube video player" src="https://www.youtube.com/embed/C7GoVPoamdM?rel=0" width={560} height={315} frameBorder={0} allowFullScreen="allowfullscreen" /></div> 
          </div>
          <div className="contentrow ctschedule">
            <h3 className="contentrow__title title --t3">Lịch học</h3>
            <div className="ctschedule__box">
              <div className="info">
                <div className="labeltext">
                  <span className="label --blue">Khai giảng</span>
                  <p className="title --t3">{startDate}</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Ngày học</span>
                  <p className="title --t3">{schedule.days}</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Thời gian</span>
                  <p className="title --t3">{schedule.time}</p>
                </div>
                <div className="labeltext">
                  <span className="label --blue">Địa điểm</span>
                  <p className="title --t3">{schedule.address}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contentrow ctlession">
            <h3 className="contentrow__title title --t3">Nội dung khoá học</h3>
            {!!content.length && <Accordion data={modifiedContent} />}
            {/* <div className="accordion">
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Kiến thức về thiết kế website, Photoshop, Figma &amp; Chrome Dev
                      Tool</strong></h4>
                </div>
                <div className="accordion__content-text --transparent" style={{display: 'none'}}>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thiết lập Photoshop cho Front-end Dev</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Giới thiệu các công cụ thao tác với bản thiết kế</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Đo đạc text, size, màu sắc, font chữ, resize, crop, export hình từ
                        Photoshop &amp;
                        Figma</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Kiến thức tổng quan thiết kế giao diện website</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Chrome Dev Tool</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Phân tích bản thiết kế &amp; thực hành</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Hiểu về Container và Container-Fluid</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thực hành cắt &amp; xuất hình từ bản thiết kế</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>HTML, SEO, BEM và thực hành code HTML</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Giới thiệu HTML</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Các thẻ HTML thông dụng</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Code HTML chuẩn SEO</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Phân tích bản thiết kế và hướng dẫn thực hành code HTML cho dự
                        án</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>CSS/CSS3 &amp; thực hành ứng dụng dự án</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>CSS phần 1, thực hành dự án Luxestate</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>CSS phần 2, thực hành dự án Luxestate</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Dàn layout với CSS Flexbox, thực hành dự án Luxestate</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>CSS3, thực hành dự án Luxestate</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Thực hành dự án Luxestate</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Hướng dẫn code &amp; tối ưu dự án Luxestate</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Hướng dẫn code dự án Luxestate</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Hướng dẫn tối ưu hình ảnh, HTML, CSS cho dự án</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Javascript nền tảng &amp; thực hành</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Tổng quan và khái niệm cơ bản Javascript.</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Làm việc với String và Loop</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Làm việc với Array &amp; Object</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thực hành bài tập luyện tư duy (phần 1)</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thực hành bài tập luyện tư duy (phần 2)</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thực hành bài tập luyện tư duy (phần 3)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Javascript ES6 &amp; thực hành</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Javascript ES6 là gì?</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Arrow function</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Template literals (template string)</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Destructuring, Rest</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Spread, Default parameter</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thực hành bài tập Javascript</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Báo cáo và đánh giá dự án Luxestate</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Báo cáo dự án Luxestate</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Đánh giá và góp ý dự án Luxestate</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>HTML nâng cao. Quy tắc BEM</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Các thẻ HTML nâng cao</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Quy tắc đặt tên class chuẩn BEM</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Phân tích bản thiết kế và thực hành cắt hình, code HTML dự án
                      Wooder</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Phân tích bản thiết kế Wooder</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thực hành cắt hình, code HTML dự án Wooder</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>CSS nâng cao và chia layout với CSS Grid</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Các thuộc tính CSS nâng cao</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Ôn tập Flexbox</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Chia layout với CSS Grid</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>SCSS toàn diện</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Khái niệm SCSS</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Cài đặt trình biên dịch SCSS</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Xếp chồng – Nested Rule, Biến – variable, Kế thừa – Extends, Import,
                        Vòng lặp - Loop, Mệnh đề
                        điều kiện IF</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Phân tách và cấu trúc file SCSS</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Responsive Website</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Phân biệt Responsive Website và Adaptive Website</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Breakpoints</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Hướng dẫn code Responsive dự án Wooder</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Kiến thức tổng quan về Responsive Website</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Media Query</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Grunt và Cấu trúc dự án</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Khái niệm Grunt &amp; Cài đặt Grunt</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Cấu trúc file, thư mục dự án với SCSS và Grunt</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Thực hành code Responsive dự án Wooder</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thực hành ứng dụng Grunt, SCSS vào dự án Wooder (Phần 2)</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thực hành ứng dụng Grunt, SCSS vào dự án Wooder (Phần 1)</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Javascript DOM, BOM, Javascript nâng cao và các thư viện JS thông
                      dụng</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Kiến thức Javascript DOM, BOM.</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Hướng dẫn ứng dụng các thư viện Javascript thông dụng vào dự án</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Javascript nâng cao và thực hành bài tập</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Thực hành ứng dụng Javascript và thư viện vào dự án Wooder</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thực hành các tính năng trên dự án bằng Javascript thuần</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thực hành ứng dụng thư viện Javascript trên dự án</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Báo cáo, đánh giá &amp; góp ý tối ưu dự án Wooder</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Báo cáo và đánh giá dự án</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Góp ý và tối ưu dự án</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Thực hành dự án Web Responsive</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Phân tích và triển khai dự án Web Responsive</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Hướng dẫn hoàn hành dự án Web Responsive</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thực hành dự án Web Responsive. Các kỹ thuật tối ưu tốc độ
                        website</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Báo cáo, đánh giá &amp; góp ý tối ưu Web Responsive</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Báo cáo và đánh giá dự án Web Responsive</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Góp ý tối ưu dự án Web Responsive</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Làm quen với các kiến thức React cơ bản</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Component, Props, State</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Style, Event</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>useEffect</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Xử lý form trong React</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thao tác cơ bản với Form</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Validate form</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Tối ưu Validate form</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Xây dựng Single Page Application trong React</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Giới thiệu và cài đặt thư viện react-router-dom@6</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Tìm hiểu qua các cách sử dụng react-router-dom phổ biến</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Xử lý layout</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Làm việc với API từ Backend</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Giới thiệu và làm việc với api từ Backend bằng fetch</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Cài đặt và setup axios</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Làm việc với RestFul API từ Backend</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Authentication với JWT</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Giới thiệu về JWT</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Làm chức năng login trong React với JWT</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Hoàn thành kiến thức React cơ bản</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Portal</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Cài đặt thư viện ngoài React</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>useId</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Thực hành dự án Đăng Ký Khóa Học (CFDCourses)</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Forgot và reset password</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Refresh token tự động</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Render trang chi tiết khóa học</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Hoàn thành chức năng cá nhân</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Giới thiệu dự án</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Tối ưu và deploy dự án</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Lazy component</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>useMemo, useCallback, React.memo</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>useId, useTransition, useDeferredValue</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Deploy dự án lên Vercel</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Redux và những thư viện liên quan</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Thực hành dự án E-commerce</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Setup dự án template</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Lấy thông tin sản phẩm</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Làm chức năng phân trang sản phẩm</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Hoàn thành trang sản phẩm</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Sort</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>minPrice, maxPrice</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Filter theo rating</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Tìm kiếm sản phẩm</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Hoàn thành trang cá nhân</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Đăng nhập / đăng ký</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thay đổi thông tin cá nhân</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Cập nhật avatar</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Sản phẩm yêu thích</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Quản lý sổ địa chỉ, sổ thanh toán</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Hoàn thành chức năng giỏ hàng</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thêm , xóa sản phẩm vào giỏ hàng</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Tăng / giảm số lượng sản phẩm trong giỏ hàng</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Xử lý popup thông báo khi thêm sản phẩm thành công</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Hoàn thành chức năng chi tiết sản phẩm</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Render thông tin cơ bản trang chi tiết sản phẩm</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Xử lý Image Modal</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Rút gọn nội dung với ShortContent</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Hoàn thành chức năng checkout</strong></h4>
                </div>
                <div className="accordion__content-text --transparent" style={{display: 'none'}}>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Xử lý form checkout</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Thêm / xóa promotion</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Xử lý đơn hàng thành công</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Hoàn thành chức năng Đặt hàng &amp; Đánh giá sản phẩm</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Xử lý trang xem sản phẩm đặt hàng</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Làm chức năng review sản phẩm khi nhận hàng thành công</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Hoàn thành chức năng Translate</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Tự làm chức năng Translate bằng thư viện tự xây dựng</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Error boundaries</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Slider</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Forgot và reset password</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion__content">
                <div className="accordion__content-title">
                  <h4><strong>Hướng dẫn làm CV, tìm việc và trả lời phỏng vấn ứng tuyển</strong></h4>
                </div>
                <div className="accordion__content-text --transparent">
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Hướng dẫn làm CV chuẩn IT</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Hướng dẫn tìm việc</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Hướng dẫn trả lời phỏng vấn</span>
                    </p>
                  </div>
                  <div className="item --lock">
                    <p>
                      <i><img src="https://cfdcircle.vn/img/iconlock.svg" alt="CFD Circle" /></i>
                      <span>Chia sẻ kinh nghiệm thực tế</span>
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="contentrow ctrequest">
            <h3 className="contentrow__title title --t3">Yêu cầu cần có</h3>
            <div className="ctrequest__content">
              {required?.map((item, index) =>(
                <p key={index}>{item}</p>
              ))}
              {/* <p>Có laptop cá nhân, cài đặt phần mềm Photoshop, VSCode.</p>
              <p>Đã tìm hiểu về lộ trình học frontend và biết cơ bản HTML, CSS là một lợi thế</p>
              <p>Hạn chế tối đa nghỉ học và hoàn thành bài tập được giao.</p>
              <p>Thành viên CFD Circle phải có tinh thần trách nhiệm, chủ động cao trong việc học, cũng
                như tự học và làm thêm tại
                nhà.</p> */}
            </div>
          </div>
          <div className="contentrow ctteacher">
            <h3 className="contentrow__title title --t3">Giảng viên</h3>
            <div className="ctteacher__content">
              {teams?.map((team) =>{
                const {id, name, image, description,jobTitle, tags } = team || {}
                const tag = tags[0]
                return(
                  <div className="itemteacher" key={id}>
                <div className="itemteacher__avatar">
                  <img src={image} alt="CFD Circle" />
                </div>
                <div className="itemteacher__info">
                  <div className="itemteacher__info-name">
                    <p className="title --t3">{tag}</p>
                    <span className="label badge --teacher">{name}</span>
                  </div>
                  <h5 className="itemteacher__info-pos label">{jobTitle}</h5>
                  <p className="itemteacher__info-des">{description}</p>
                </div>
              </div>
                );
              })}
              {/* <div className="itemteacher">
                <div className="itemteacher__avatar">
                  <img src="https://cfdcircle.vn/files/avatars/VAOXpQdhq3yNvBMQlDItAYKU29ZO0gsxPTxdryL5.jpg" alt="CFD Circle" />
                </div>
                <div className="itemteacher__info">
                  <div className="itemteacher__info-name">
                    <p className="title --t3">Trần Nghĩa</p>
                    <span className="label badge --teacher">Teacher</span>
                  </div>
                  <h5 className="itemteacher__info-pos label">Founder</h5>
                  <p className="itemteacher__info-des">Xin chào! Tôi là Trần Nghĩa - Creative Frontend
                    Developer, người sáng lập
                    CFD Circle và CFD Studio. Trong hơn 7 năm kinh nghiệm trong nghề, tôi luôn tạo
                    ra những sản phẩm chất
                    lượng cao, sáng tạo, tinh tế và phù hợp cho khách hàng trong và ngoài nước, cũng
                    như mong muốn truyền
                    đạt lại cho các bạn trẻ có đam mê và định hướng theo nghề Front-End Developer.
                  </p>
                </div>
              </div>
              <div className="itemteacher">
                <div className="itemteacher__avatar">
                  <img src="https://cfdcircle.vn/files/avatars/clnqEpgnMNYKIqNbxoOHi4QPCiDhH3Fklnyz2239.jpg" alt="CFD Circle" />
                </div>
                <div className="itemteacher__info">
                  <div className="itemteacher__info-name">
                    <p className="title --t3">Đức Huy</p>
                    <span className="label badge --mentor">Mentor</span>
                  </div>
                  <h5 className="itemteacher__info-pos label">Fullstack Developer</h5>
                  <p className="itemteacher__info-des">Xin chào! Tôi là Huy Nguyễn - Fullstack Developer,
                    người đồng sáng lập CFD
                    Circle &amp; CFD Studio. Với mong muốn truyền đạt những kinh nghiệm thực tế có
                    được trong hơn 5 năm đi
                    làm cho các bạn trẻ có đam mê với lập trình front-end, cũng như back-end. Hi
                    vọng tôi sẽ giúp cho các
                    bạn có cái đầy đủ kiến thức và kỹ năng để ứng tuyển vào vị trí mà bạn hướng đến.
                  </p>
                </div>
              </div>
              <div className="itemteacher">
                <div className="itemteacher__avatar">
                  <img src="https://cfdcircle.vn/files/avatars/3QNIeOtW3IMj0cy1OWfCAB6s8vNpMus4sOatVm20.jpg" alt="CFD Circle" />
                </div>
                <div className="itemteacher__info">
                  <div className="itemteacher__info-name">
                    <p className="title --t3">Huỳnh Anh Kiệt</p>
                    <div className="label badge --mentor">Mentor</div>
                  </div>
                  <h5 className="itemteacher__info-pos label">Front-end Developer</h5>
                  <p className="itemteacher__info-des">Chào bạn, nếu bạn đọc những dòng này hẳn là bạn rất
                    quan tâm đến việc trở
                    thành một developer, nhất là Front-end Developer. Vì vậy, mình là Huỳnh Anh Kiệt
                    - hiện đang làm việc
                    với vị trí Software Engineer - chapter Front-End tại Kyanon Digital và CFD
                    Studio, đồng thời, là cựu học
                    viên của CFD Circle sẽ đồng hành cùng bạn trong hành trình chinh phục mong ước
                    đó. Sau thời gian dài học
                    tập và làm việc, mình đã tích lũy được một số kinh nghiệm để có thể giúp đỡ
                    những bạn có niềm đam mê với
                    Front-end.</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ContentDetailSection

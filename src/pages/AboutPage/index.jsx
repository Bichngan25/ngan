import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <main className="mainwrapper aboutpage">
    <section className="banner abouthero">
      <div className="banner__content">
        <div className="container">
          <h2 className="title --white">
            <span>Sứ mệnh</span> của CFD Circle là kết nối, truyền đạt kinh nghiệm thực tế và khởi dậy cảm
            hứng từ những người tâm huyết để tạo ra sản
            phẩm chất lượng cao.
          </h2>
        </div>
      </div>
    </section>
    <section className="aboutstory">
      <div className="container">
        <div className="aboutstory__img">
          <img src="/img/cfd-circle-team.jpg" alt />
        </div>
        <div className="aboutstory__content">
          <h1 className="title --t2"><span className="color--primary">Câu chuyện</span> CFD Circle</h1>
          <p className="text">
            Chúng tôi đã từng thắc mắc tại sao nhiều bạn đã học ở các trường đại học
            nhưng khi đi làm cho các doanh nghiệp thì phải đào tạo lại? Làm sao để giúp được cho
            những bạn trái ngành có thể học và đi làm trong thời gian ngắn nhất? Và làm thế nào để tạo ra
            nhiều sản phẩm website có trải nghiệm người dùng tốt nhất? <br /><br />
            Từ đó, CFD Circle ra đời để giải quyết tất cả những vấn đề trên với mong muốn tạo ra nhiều sản
            phẩm website chất lượng, tinh tế và có giá trị cao cho Việt Nam và thế giới.
          </p>
        </div>
      </div>
    </section>
    <section className="aboutbenifit --scpadding">
      <div className="container">
        <h2 className="aboutbenifit__title title --t2">Chúng ta sẽ <span className="color--primary">đồng
            hành cùng nhau</span> <br />trên con đường tạo ra những giá trị cho cộng đồng và chính mình.</h2>
        <div className="aboutbenifit__list">
          <div className="item">
            <div className="number title --t1">1</div>
            <div className="content">
              <h3 className="title --t3">Chương trình đào tạo thực chiến</h3>
              <p className="text">
                Tất cả khoá học tại CFD Circle luôn được kiểm duyệt rất chặt chẽ, đảm bảo chất lượng với
                nhiều cấp độ khác nhau. Cùng
                phương châm luôn hướng tới một lộ trình học sát với thực tế, học viên có thể ứng dụng
                vào
                công việc ngày sau khoá học.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="number title --t1">2</div>
            <div className="content">
              <h3 className="title --t3">Luôn đặt học viên làm trọng tâm</h3>
              <p className="text">Với mong muốn đào tạo đội ngũ nhân lực chất lượng trong lĩnh vực Front-End
                Dev
                và UX/UI Design, học viên tại CFD Circle luôn được theo sát và hỗ trợ nhiệt tình để giúp
                tất
                cả mọi người hoàn thành khoá học thật tốt và tạo ra những sản phẩm có giá trị cao.</p>
            </div>
          </div>
          <div className="item">
            <div className="number title --t1">3</div>
            <div className="content">
              <h3 className="title --t3">Giảng viên giàu kinh nghiệm từ khắp mọi nơi.</h3>
              <p className="text">Với nền tảng đào tạo trực tuyến CFD Circle, giảng viên không chỉ dạy
                offline, mà
                còn
                có thể tạo ra những lớp học trực tuyến cho riêng mình thông qua chương trình đối tác nội
                dung của CFD Circle.</p>
            </div>
          </div>
          <div className="item">
            <div className="number title --t1">4</div>
            <div className="content">
              <h3 className="title --t3">Cơ hội việc làm hấp dẫn</h3>
              <p className="text">Với nhu cầu rất lớn từ các doanh nghiệp trong và ngoài nước cùng những đối
                tác tuyển dụng của CFD Circle trong lĩnh vực Front-End Dev và UX/UI Design, học viên sẽ
                có
                cơ hội nhận được thông tin việc làm hấp dẫn, phù hợp với khả năng thông qua chương trình
                CFDers
                Talent. Ngoài ra, còn có thể trở
                thành mentor tại CFD Circle khi đáp ứng đủ yêu cầu về chuyên môn.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="aboutnumbers">
      <div className="container">
        <div className="aboutnumbers__list">
          <div className="aboutnumbers__list-item">
            <h3 className="title --t2">2.5</h3>
            <p className="text title --t3">năm thành lập</p>
          </div>
          <div className="aboutnumbers__list-item">
            <h3 className="title --t2">21</h3>
            <p className="text title --t3">khoá học</p>
          </div>
          <div className="aboutnumbers__list-item">
            <h3 className="title --t2">30</h3>
            <p className="text title --t3">lớp học</p>
          </div>
          <div className="aboutnumbers__list-item">
            <h3 className="title --t2">500+</h3>
            <p className="text title --t3">học viên</p>
          </div>
        </div>
      </div>
    </section>
    <section className="aboutstudy --scpadding">
      <div className="container">
        <h2 className="aboutstudy__title title --t2"><span className="color--primary">Hình thức học</span> đa dạng</h2>
        <div className="aboutstudy__item">
          <div className="aboutstudy__item-img"><img src="/img/cfd-circle-offline.jpg" alt /></div>
          <div className="aboutstudy__item-content">
            <h4 className="title --t3">Học offline tại văn phòng</h4>
            <div className="text">
              Với trang thiết bị hiện đại, đội ngũ giảng viên &amp; mentor sẽ sát cánh cùng
              bạn trong khoá học offline tại học viện CFD Circle ở số 11b, Phan Kế Bính, Đa Kao, Quận 1,
              TP Hồ
              Chí
              Minh.
            </div>
            <a href="courses.html" className="btn btn--primary">Khám phá</a>
          </div>
        </div>
        <div className="aboutstudy__item">
          <div className="aboutstudy__item-img"><img src="/img/cfd-circle-online.jpg" alt /></div>
          <div className="aboutstudy__item-content">
            <h4 className="title --t3">Học online với lớp offline.</h4>
            <div className="text">
              Nếu bạn muốn học trực tiếp với giảng viên nhưng ở xa không thể đến
              lớp offline được thì có thể học online thông qua Google Meet, gọi video chia sẻ màn hình và
              được giảng viên, mentor hỗ trợ như khi bạn học offline.
            </div>
            <a href="courses.html" className="btn btn--primary">Khám phá</a>
          </div>
        </div>
        <div className="aboutstudy__item">
          <div className="aboutstudy__item-img"><img src="/img/cfd-circle-video.jpg" alt /></div>
          <div className="aboutstudy__item-content">
            <h4 className="title --t3">Học qua video &amp; live hỗ trợ 24/7</h4>
            <div className="text">
              Nền tảng học online của CFD Circle có rất nhiều khoá học video, bạn có thể học bất
              kỳ khi nào mình muốn. Đặc biệt, bạn sẽ được hỗ trợ từ giảng viên thông qua Google Meet hoặc
              đội ngũ mentor của CFD Circle.
            </div>
            <a href="courses.html" className="btn btn--primary">Khám phá</a>
          </div>
        </div>
      </div>
    </section>
    <section className="aboutgallery --scpadding">
      <div className="container">
        <h2 className="aboutgallery__title title --t2 --white">CFD Circle <span className="color--primary">là một team
            gắn
            kết,</span> <br />cùng nhau học tập, vui chơi và phát triển</h2>
        <div className="aboutgallery__imgs">
          <img src="https://cfdcircle.vn/files/about/Team/dsc00538.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc00541.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc00545.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc00662-1.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc00677.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc00678-1.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc01114.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc01129.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc01147.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc5506.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc5511.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc00688.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc5587-2.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc5606.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc5637-1.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc5918-2.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc5999.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc6146.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc6200.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc6216.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc6731.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc6762.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc6977.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc7008-1.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/img-0609-1.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/beauty-1618471253214-2.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/beauty-1618471376803-2.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/beauty-1618547659094-2.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/beauty-1618593111409.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/beauty-1618593213120.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/cfd-team-2.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/cfd-team-55.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/cfd-team-57.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/cfd-team-61.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/cfd-team-87.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/dsc5999.jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/img-001-(1).jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/image02-(1).jpg" alt="CFD Circle" />
          <img src="https://cfdcircle.vn/files/about/Team/img10.jpg" alt="CFD Circle" />
        </div>
      </div>
    </section>
    <section className="aboutteachers --scpadding">
      <div className="container">
        <h2 className="aboutteachers__title title --t2">đội ngũ <span className="color--primary">giảng viên và
            Mentor</span></h2>
        <div className="aboutteachers__list">
          <div className="itemteacher">
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
              <img src="https://cfdcircle.vn/files/avatars/dO8uFof8tuPUgfCJTje6ji42Dw15eoqNWHI7bi2E.jpg" alt="CFD Circle" />
            </div>
            <div className="itemteacher__info">
              <div className="itemteacher__info-name">
                <p className="title --t3">Lê Châu Hữu Thiện</p>
                <span className="label badge --teacher">Giảng viên</span>
              </div>
              <h5 className="itemteacher__info-pos label">Senior Front-end Dev</h5>
              <p className="itemteacher__info-des">Xin chào mọi người! Tôi là Thiện, hiện đang là Front-End
                Developer tại CBI
                Chi Doanh. Mình đã bén duyên tham gia vào đại gia đình CFD Circle từ khóa CFD5. Trong
                quá trình học hỏi
                và chiến đấu cùng các anh em tại đây, mình đã rút ra rất nhiều kinh nghiệm thực tiễn và
                tìm được hướng
                đi phù hợp cho bản thân. CFD Circle với mình không chỉ là nơi trao đến bạn những kiến
                thức chuyên môn
                thực chiến, mà còn truyền một ngọn lửa mãnh liệt đến từng cá nhân để thúc đẩy sự phát
                triển từ bên trong
                chúng ta.</p>
            </div>
          </div>
          <div className="itemteacher">
            <div className="itemteacher__avatar">
              <img src="https://cfdcircle.vn/files/avatars/clnqEpgnMNYKIqNbxoOHi4QPCiDhH3Fklnyz2239.jpg" alt="CFD Circle" />
            </div>
            <div className="itemteacher__info">
              <div className="itemteacher__info-name">
                <p className="title --t3">Nguyễn Đức Huy</p>
                <span className="label badge --mentor">Mentor</span>
              </div>
              <h5 className="itemteacher__info-pos label">Full-stack Developer</h5>
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
                <span className="label badge --mentor">Mentor</span>
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
          </div>
          <div className="itemteacher">
            <div className="itemteacher__avatar">
              <img src="https://cfdcircle.vn/files/avatars/mwVNfVk5NwGFYvLylpSz115l2u3bQWPa5ERikGEJ.jpg" alt="CFD Circle" />
            </div>
            <div className="itemteacher__info">
              <div className="itemteacher__info-name">
                <p className="title --t3">Nguyễn Văn Thái An</p>
                <span className="label badge --mentor">Mentor</span>
              </div>
              <h5 className="itemteacher__info-pos label">Senior Front-end Dev</h5>
              <p className="itemteacher__info-des">Xin chào! Tôi là Nguyễn An - Senior Frontend Developer tại
                T.O.P Group và
                CFD Studio. Rất mong có thể trao
                đổi và truyền đạt hết những kiến thức và kinh nghiệm từ những dự án thực tế mà tôi học
                được trong quá trình làm việc đến với học viên tại CFD Circle. Cùng học tập để hướng tới
                một Front-end
                Dev với những sản phẩm sáng tạo, tinh tế và chuyên nghiệp nào! Rất vui nếu gặp bạn ở CFD
                Circle.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="callregister">
      <div className="container">
        <div className="callregister__content">
          <h3 className="title --t2"><span className="color--primary">trở thành một phần</span> của CFD Circle
          </h3>
          <p>
            Chúng tôi rất vui khi bạn quyết định trở thành một phần của CFD Circle để cùng nhau học hỏi, lan
            toả và chia sẻ những kinh nghiệm quý giá cho cộng đồng.
          </p>
          <a href="courses.html" className="btn btn--primary">Tham gia Khoá học</a>
          <a href="contact.html" className="btn btn--border --black">Liên hệ tư vấn</a>
        </div>
      </div>
    </section>
  </main>
    </div>
  )
}

export default AboutPage

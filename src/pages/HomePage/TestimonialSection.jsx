import React, { useEffect } from 'react'

const TestimonialSection = () => {
  useEffect(() => {
    function testimonialSlider() {
      if ($('.testimonial__slider').length) {
          var $carousel = $(".testimonial__slider .images .list").flickity({
              contain: true,
              wrapAround: false,
              freeScroll: false,
              cellAlign: 'center',
              lazyLoad: 2,
              imagesLoaded: true,
              prevNextButtons: false,
              dragThreshold: 0,
              on: {
                  ready: function () {
                      let dotsSlideTes = $('.testimonial__slider .flickity-page-dots');
                      let dotsNew = $('.testimonial__slider .dots');
                      dotsSlideTes.appendTo(dotsNew);
                  },
                  change: function (index) {
                      $('.testimonial__slider .ct').removeClass('active');
                      $('.testimonial__slider .ct-' + (index + 1)).addClass('active');
                  }
              }
          });
          var flkty = $carousel.data('flickity');
          var $imgs = $('.testimonial__slider .carousel-cell picture img');

          $carousel.on('scroll.flickity', function (event, progress) {
              flkty.slides.forEach(function (slide, i) {
                  var img = $imgs[i];
                  var x = (slide.target + flkty.x) * -1 / 2;
                  img.style.transform = 'translateX( ' + x + 'px)';
              });
          });

          let ctrPrevTes = $('.testimonial .control .control__prev'),
              ctrNextTes = $('.testimonial .control .control__next');

          ctrPrevTes.on('click', function () {
              $carousel.flickity('previous', true);
          });
          ctrNextTes.on('click', function () {
              $carousel.flickity('next', true);
          });
      }
  }
  const myTimeout = setTimeout(() =>{
    testimonialSlider()
  },300)
  return () => {
    clearTimeout(myTimeout)
  }
  },[])
  return (
    <div>
       <section className="testimonial --scpadding">
      <div className="container">
        <div className="testimonial__inner">
          <div className="heading --white">
            <h2 className="heading__title title --t2 --white">Cảm nhận <span className="color--primary">học
                viên</span></h2>
            <div className="control">
              <div className="control__prev">
                <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 39L15 24L30 9" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="control__next">
                <svg width={48} height={48} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 39L15 24L30 9" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          <div className="testimonial__slider">
            <div className="testimonial__slider-list">
              <div className="item">
                <div className="text">
                  <div className="ct ct-1 active">
                    <div className="info">
                      <div className="name">
                        <h4 className="title --t3 --white">Nguyễn Thanh Tùng</h4>
                      </div>
                    </div>
                    <div className="content">
                      Khoá học này thực sự rất chất lượng. Mình từ một người làm Sale, chưa biết
                      gì về HTML, CSS, JS, mà giờ code được một web
                      hoàn chỉnh và đã đi làm front-end dev. Mentor hỗ trợ nhiệt tình, lên lớp học
                      lý thuyết xong là thực chiến luôn. Sau khoá
                      học thì được giảng viên chia sẻ kinh nghiệm.
                    </div>
                    <div className="bottom">
                      <span className="label">Học viên CFD1</span>
                      <a href="https://www.facebook.com/" target="_blank"><img src="/img/facebook.svg" alt /></a>
                    </div>
                  </div>
                  <div className="ct ct-2">
                    <div className="info">
                      <div className="name">
                        <h4 className="title --t3 --white">Huỳnh Anh Kiệt</h4>
                      </div>
                    </div>
                    <div className="content">
                      Là một nơi truyền cảm hứng cho mình thực hiện tiếp ước mơ và hoài bảo! Cảm
                      ơn các thầy đã nổ lực hỗ trợ để mình có thể
                      tiếp cận ước mơ của mình gần hơn.
                    </div>
                    <div className="bottom">
                      <span className="label">Học viên CFD2</span>
                      <a href="https://www.facebook.com/" target="_blank"><img src="/img/facebook.svg" alt /></a>
                    </div>
                  </div>
                  <div className="ct ct-3">
                    <div className="info">
                      <div className="name">
                        <h4 className="title --t3 --white">Nguyễn Anh Tuấn</h4>
                      </div>
                    </div>
                    <div className="content">
                      Mình đã từng tự học nhưng bị mất phương hướng trầm trọng, sau khóa học mình
                      đã tự code được 2 dự án riêng, 4 mentor dạy
                      và hỗ trợ học viên rất có tâm, chuyện livestream giải đáp thắc mắc cho học
                      viên tới khuya là thường xuyên. Sau khóa học
                      mình học được cách tạo giao diện sao cho đẹp tinh tế, thân thiện với người
                      dùng.
                    </div>
                    <div className="bottom">
                      <span className="label">Học viên CFD1</span>
                      <a href="https://www.facebook.com/" target="_blank"><img src="/img/facebook.svg" alt /></a>
                    </div>
                  </div>
                  <div className="ct ct-4">
                    <div className="info">
                      <div className="name">
                        <h4 className="title --t3 --white">Nguyễn Văn Tuấn</h4>
                      </div>
                    </div>
                    <div className="content">
                      Khóa học thực sự chất lượng, anh Nghĩa và mentor hỗ trợ rất nhiệt tình. Sau
                      khóa học riêng mình cảm thấy học hỏi được
                      rất nhiều.
                    </div>
                    <div className="bottom">
                      <span className="label">Học viên CFD1</span>
                      <a href="https://www.facebook.com/" target="_blank"><img src="/img/facebook.svg" alt /></a>
                    </div>
                  </div>
                </div>
                <div className="images">
                  <div className="list">
                    <div className="carousel-cell">
                      <div className="img">
                        <picture>
                          <source media="(max-width: 767px)" srcSet="https://cfdcircle.vn/files/testimonial/1648229180-thanh-tung.jpg" />
                          <img data-flickity-lazyload="https://cfdcircle.vn/files/testimonial/1648229180-thanh-tung.jpg" alt />
                        </picture>
                      </div>
                      <div className="ct_m">
                        <div className="info">
                          <div className="name">
                            <h4 className="title --t3 --white">Nguyễn Thanh Tùng</h4>
                          </div>
                        </div>
                        <div className="content">
                          Khoá học này thực sự rất chất lượng. Mình từ một người làm Sale,
                          chưa biết
                          gì về HTML, CSS, JS, mà giờ code được một web
                          hoàn chỉnh và đã đi làm front-end dev. Mentor hỗ trợ nhiệt tình, lên
                          lớp học
                          lý thuyết xong là thực chiến luôn. Sau khoá
                          học thì được giảng viên chia sẻ kinh nghiệm.
                        </div>
                        <div className="bottom">
                          <span className="label">Học viên CFD1</span>
                          <a href="https://www.facebook.com/" target="_blank"><img src="/img/facebook.svg" alt /></a>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-cell">
                      <div className="img">
                        <picture>
                          <source media="(max-width: 767px)" srcSet="https://cfdcircle.vn/files/testimonial/kiet.jpg" />
                          <img data-flickity-lazyload="https://cfdcircle.vn/files/testimonial/kiet.jpg" alt />
                        </picture>
                      </div>
                      <div className="info">
                        <div className="name">
                          <h4 className="title --t3 --white">Huỳnh Anh Kiệt</h4>
                        </div>
                      </div>
                      <div className="content">
                        Là một nơi truyền cảm hứng cho mình thực hiện tiếp ước mơ và hoài bảo!
                        Cảm
                        ơn các thầy đã nổ lực hỗ trợ để mình có thể
                        tiếp cận ước mơ của mình gần hơn.
                      </div>
                      <div className="bottom">
                        <span className="label">Học viên CFD2</span>
                        <a href="https://www.facebook.com/" target="_blank"><img src="/img/facebook.svg" alt /></a>
                      </div>
                    </div>
                    <div className="carousel-cell">
                      <div className="img">
                        <picture>
                          <source media="(max-width: 767px)" srcSet="https://cfdcircle.vn/files/testimonial/1648229287-anh-tuan.jpg" />
                          <img data-flickity-lazyload="https://cfdcircle.vn/files/testimonial/1648229287-anh-tuan.jpg" alt />
                        </picture>
                      </div>
                      <div className="ct_m">
                        <div className="info">
                          <div className="name">
                            <h4 className="title --t3 --white">Nguyễn Anh Tuấn</h4>
                          </div>
                        </div>
                        <div className="content">
                          Mình đã từng tự học nhưng bị mất phương hướng trầm trọng, sau khóa
                          học mình
                          đã tự code được 2 dự án riêng, 4 mentor dạy
                          và hỗ trợ học viên rất có tâm, chuyện livestream giải đáp thắc mắc
                          cho học
                          viên tới khuya là thường xuyên. Sau khóa học
                          mình học được cách tạo giao diện sao cho đẹp tinh tế, thân thiện với
                          người
                          dùng.
                        </div>
                        <div className="bottom">
                          <span className="label">Học viên CFD1</span>
                          <a href="https://www.facebook.com/" target="_blank"><img src="/img/facebook.svg" alt /></a>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-cell">
                      <div className="img">
                        <picture>
                          <source media="(max-width: 767px)" srcSet="https://cfdcircle.vn/files/testimonial/tuan.jpg" />
                          <img data-flickity-lazyload="https://cfdcircle.vn/files/testimonial/tuan.jpg" alt />
                        </picture>
                      </div>
                      <div className="ct_m">
                        <div className="info">
                          <div className="name">
                            <h4 className="title --t3 --white">Nguyễn Văn Tuấn</h4>
                          </div>
                        </div>
                        <div className="content">
                          Khóa học thực sự chất lượng, anh Nghĩa và mentor hỗ trợ rất nhiệt
                          tình. Sau
                          khóa học riêng mình cảm thấy học hỏi được
                          rất nhiều.
                        </div>
                        <div className="bottom">
                          <span className="label">Học viên CFD1</span>
                          <a href="https://www.facebook.com/" target="_blank"><img src="/img/facebook.svg" alt /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dots" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default TestimonialSection

import React, { useEffect } from 'react'
import Accordion from '../../components/Accordion';

const FaqSection = ({questions = [], loading = false}) => {
  // useEffect(() => {
  //   function accordion() {
  //     $(document).on('click', '.accordion .accordion__content-title', function () {
  //         $(this).next().stop().slideToggle(200);
  //         $(this).closest('.accordion__content').toggleClass('active');
  //         $(this).closest('.accordion__content').siblings('.active').removeClass('active').find('.accordion__content-text').stop().slideUp(200);
  //     });
  // }
  // accordion();
  // },[])

  // cat cac cau hoi
  const modifiedQuestions = questions?.map((item) => {
    return {
      id: item.id || "",
      title: item.question || "",
      content: item.answer || "",
    };
  });
  const commonQuestions = modifiedQuestions.slice(0, 6);
  const otherQuestions = modifiedQuestions.slice(6);

  // console.log("commonQuestions", commonQuestions)
  // console.log("otherQuestions", otherQuestions)
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
            {!loading && <Accordion data={commonQuestions} label='Thông tin chung'/>}
            {!loading && <Accordion data={otherQuestions} label='Đăng ký, thanh toán'/>}
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default FaqSection

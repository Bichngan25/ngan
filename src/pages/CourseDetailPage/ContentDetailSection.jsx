import React from 'react'
import Accordion from '../../components/Accordion';

const ContentDetailSection = ({description, startDate, schedule = {},content = [],required = [],teams = []}) => {
  const modifiedContent = content?.map((item, index) => {
    const { id, title, description } = item;
    return {
      // render ra 1 unique ID
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
            <div className="contenteditor" 
            // ===== bien doi doan HTML TRONG API
            dangerouslySetInnerHTML={{ __html: description }}
            />
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
            {/* ====== API Accordion */}
            {!!content.length && <Accordion data={modifiedContent} />}
          </div>
          <div className="contentrow ctrequest">
            <h3 className="contentrow__title title --t3">Yêu cầu cần có</h3>
            <div className="ctrequest__content">
              {/* ========= API */}
              {required?.map((item, index) =>(
                <p key={index}>{item}</p>
              ))}
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
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ContentDetailSection

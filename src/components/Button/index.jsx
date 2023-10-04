import React from 'react'
import { Link } from 'react-router-dom';

// b1: xu ly btn
// b2: xu ly text trong btn
// b3: xu ly onsubmit
// * sau nay muon them btn moi chi can them variantClass

// chuyen vao variant (khac nhau, bien the)
//  chuyen children (text o trong btn)
// chuyen ...rest de xu ly nhung trang thai con lai (onsubmit)
const Button = ({variant = "primary", children, link, className,disabled, loading, ...rest}) => {

    // tao bien variantclass va cho mac dinh la gia tri primary(chinh)
    let variantClass = "primary"
    // tao ham switch case de xu ly tung trang thay btn
    switch (variant) {
        case 'primary':
            // gan gia tri vao 
            variantClass = "btn btn--primary"
            break;
        case 'border':
            variantClass = "btn btn--border --black"
            break;
        case 'grey':
            variantClass = " btn btn--grey"
         break;
        default:
            break;
    }

    if (disabled) {
      variantClass = "btn btn--grey";
      // click k duoc (click nam trong rest)
      rest.onClick = () => {}
    }
    if (!!link) {
      return <Link to={link} className={`${variantClass} ${className || ""} ${loading ? "--processing" : ""}`} {...rest}> {children}</Link>
    }
  return (
    <div>
        {/* 1- thay doi "" t{hanh `` */}
       {/* <button className={`${btn btn--primary}`} onClick={_onSubmit}>Gửi</button> */}

        {/* 2- gan ham vao  */}
       {/* <button className={`${variantClass} ${className}`} onClick={_onSubmit}>{children}</button> */}

        {/* 3- them rest vao de thay the onsubmit */}
         <button className={`${variantClass} ${className}`} {...rest}>{children}
         {
          loading && (
            <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
            <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite" />
            </path>
          </svg>
          )
         }</button>

    </div>
  )
}

export default Button

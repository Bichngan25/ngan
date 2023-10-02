import React from 'react'
import { Link } from 'react-router-dom';

// b1: xu ly btn
// b2: xu ly text trong btn
// b3: xu ly onsubmit
// * sau nay muon them btn moi chi can them variantClass

// chuyen vao variant (khac nhau, bien the)
//  chuyen children (text o trong btn)
// chuyen ...rest de xu ly nhung trang thai con lai (onsubmit)
const Button = ({variant = "primary", children, link, className, ...rest}) => {

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
    if (!!link) {
      return <Link to={link} className={`${variantClass} ${className}`} {...rest}> {children}</Link>
    }
  return (
    <div>
        {/* 1- thay doi "" t{hanh `` */}
       {/* <button className={`${btn btn--primary}`} onClick={_onSubmit}>Gửi</button> */}

        {/* 2- gan ham vao  */}
       {/* <button className={`${variantClass} ${className}`} onClick={_onSubmit}>{children}</button> */}

        {/* 3- them rest vao de thay the onsubmit */}
         <button className={`${variantClass} ${className}`} {...rest}>{children}</button>

    </div>
  )
}

export default Button

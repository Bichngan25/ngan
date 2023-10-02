import React from 'react'
// chuyen opstions
const Select = ({options,error, ...rest}) => {
  return (
    <div>
        {/* html goc */}
       {/* <div className="select">
                <div className="head form__input">--</div>
                <div className="sub">
                  <a href="#">Web Responsive</a>
                  <a href="#">React &amp; Redux</a>
                </div>
              </div> */}

            {/* chuyen sang dang select option */}
        <select {...rest} className={`form__input ${error ? "formerror" : ""}`}>
            {
                // map: loop qua các phần tử và tạo ra một array mới, item trong array sẽ do callback return về
                options?.map((option, index) => <option key={option?. value || index} value={option?.value}>{option?.label || ""}</option>)
            }
            {/* <option value="react">React</option>
            <option value="responsive">Web Responsive</option> */}
             {/* <div className="head form__input">--</div> */}
        </select>
    </div>
  )
}

export default Select

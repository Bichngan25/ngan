import React from 'react'

// b1: input can label, required(yeu cau co dau sao hay k co dau sao), error
        // required && : neu co thi hien thi, k co thi k hien thi
        // error && : neu co thi hien thi error tuong ung 
        // ...rest : la nhung pros con lai
// b2: dua bien vao de xu li dieu kien

const Input = ({label, required, error,renderInput, ...rest}) => {
  
  return (
    <div>
       <div className="form-group">
              <label className="label">{label} {required && <span>*</span>}</label>
              {
                renderInput?.({...rest, error}) || (
                <input 
                type="text"
                {...rest}
                className={`form__input ${error ? "formerror" : ""}`} />
                )
              }
              {/* b2: dua bien vao de xu li dieu kien */}
              {/* <input 
                {...rest}
               type="text"
                className={`form__input ${error ? "formerror" : ""}`} /> */}
              {error && <p className="error">{error}</p>}
            </div>
    </div>
  )
}

export default Input

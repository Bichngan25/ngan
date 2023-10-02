import React from 'react'

const TextArea = ({ error, ...rest }) => {
    return (
      <textarea
        className={`form__input ${!!error ? "formerror" : ""}`}
        {...rest}
      />
    );
  };
  
  export default TextArea;

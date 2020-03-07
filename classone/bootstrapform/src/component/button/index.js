import React from 'react';
const Button = (props) => {
    return (
          <button type={props.buttonType} className={props.buttonClass}>{props.btnValue}</button>
      );
}
export default Button;
import React from 'react';
const Label = (props) => {
    console.log(props);
    return (
    <label htmlFor={props.htmlFor}>{props.labelname}</label> 
      );
}
export default Label ;
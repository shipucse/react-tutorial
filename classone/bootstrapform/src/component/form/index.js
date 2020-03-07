import React from 'react';
import Label from '../label';
import Input from '../input';
import Button from '../button';
const Form = () => {
    return (
        <div className="container">
        <div className="App">
          <div className="form-group">
            <Label labelname="Email" htmlFor="email" />
            <Input inputid="email" type="email" inputclass="form-control"/>
          </div>
          <div className="form-group">
            <Label labelname="Password" htmlFor="password"/>
            <Input  inputid="password" type="password" inputclass="form-control"/>
          </div>
          <Button buttonType="submit"  buttonClass= "btn btn-success" btnValue="Save"/>
        </div>
        </div>
      );
}
export default Form ;
import React from 'react';
import './App.css';
import Form from './component/form';

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      counter : 0,
    }
  };
  render(){
    return (
      <div>
        <Form />
          <button onClick={() => {this.setState({counter:this.state.counter+1})}}>{this.state.counter}</button>
      </div>

      );
  }
}
export default App;

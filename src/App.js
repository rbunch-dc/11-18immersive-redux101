import React, { Component } from 'react';
import './App.css'
import Student from './containers/Student';
import Test from './containers/Test'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Student />
        <Test />
      </div>
    );
  }
}

export default App;

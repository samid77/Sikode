import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage}/>
      </div>
    );
  }
}

export default App;

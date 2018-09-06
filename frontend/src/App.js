import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Registration from './components/Registration';
// import './App.css';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/registration" component={Registration}/>
        <Route exact path="/login" component={Login}/>
      </div>
    );
  }
}

export default App;

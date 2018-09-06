import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Homepage from './components/Homepage';
import QuestionForm from './components/QuestionForm';
import AnswerForm from './components/AnswerForm';

import './App.css';
import Registration from './components/Registration';
// import './App.css';
import Login from './components/Login';

class App extends Component 
{
  render() 
  {
    return (
              <div>
                <Navbar />
                  <Route exact path="/" component={Homepage} />
                  <Route exact path="/registration" component={Registration}/>
                  <Route exact path="/login" component={Login}/>
                  <Route path="/questionform" component={QuestionForm} />
                  <Route path="/answerform" component={AnswerForm} />
                <Footer />
              </div>
            );
  }
}

export default App;

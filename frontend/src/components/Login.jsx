import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

export default class Login extends Component 
{
  state= 
  {
    statusRedirect: false
  }
      
  fungsiLogin = (e) => 
  {
    var self = this;
    // console.log(e.username.value);
    // console.log(e.password.value);
    axios.post(`http://localhost:8003/userlogin`, 
    {
      username: e.username.value,
      password: e.password.value
    }).then((hasil) => 
    {
      var userID= hasil.data
      if(userID !== 0) 
      {
        cookies.set("sessionid", userID, {path: '/'})
        self.setState({
                        statusRedirect: true
                      });
      }    
    });
  }

  render() 
  {
    if(this.state.statusRedirect) return <Redirect to="/"/>
  
    return (
        <body className="hold-transition login-page" >
        <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        {/* /.login-logo */}
        <div className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <form action="../../index2.html" method="post">
            <div className="form-group has-feedback">
              <input id="username" ref="username" type="text" className="form-control" placeholder="Username" />
              {/* <span className="glyphicon glyphicon-envelope form-control-feedback" /> */}
            </div>
            <div className="form-group has-feedback">
              <input id="password" ref="password" type="password" className="form-control" placeholder="Password" />
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="row">
              <div className="col-xs-8">
                <div className="icheckbox_square-blue">
                  <label>
                    <input type="checkbox" /> Remember Me
                  </label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-xs-4">
                <button type="button" onClick={() => this.fungsiLogin(this.refs)} className="btn btn-info pull-right" className="btn btn-primary btn-block btn-flat">Sign In</button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook" /> Sign in using
              Facebook</a>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus" /> Sign in using
              Google+</a>
          </div>
          {/* /.social-auth-links */}
          <a href="#">I forgot my password</a><br />
          <Link to="/register" className="text-center">Register a new membership</Link>
        </div>
        {/* /.login-box-body */}
      </div>
     
    {/* /.login-box */}
    {/* jQuery 3 */}
    {/* Bootstrap 3.3.7 */}
    {/* iCheck */}
   </body>
  )}
}
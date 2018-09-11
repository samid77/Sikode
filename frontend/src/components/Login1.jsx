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
            <div className="col-md-6">
              <div className="box box-info" >
                <div className="box-header with-border">
                  <h3 className="box-title">Horizontal Form</h3>
                </div>
                {/* /.box-header */}

                {/* form start */}
                <form className="form-horizontal">
                  <div className="box-body">
                    <div className="form-group">
                      <label htmlFor="username" className="col-sm-2 control-label">username</label>
                      <div className="col-sm-10">
                        <input type="text" ref="username" className="form-control" id="username" placeholder="username" />
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                      <div className="col-sm-10">
                        <input type="password" ref="password" className="form-control" id="inputPassword3" placeholder="Password" />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" /> Remember me
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.box-body */}

                  <div className="box-footer">
                    <button type="submit" className="btn btn-default">Cancel</button>
                    <button type="button" onClick={() => this.fungsiLogin(this.refs)} className="btn btn-info pull-right" >Sign in</button>
                  </div>
                  {/* /.box-footer */}
                </form>
              </div>

            </div>
            )
  }
}

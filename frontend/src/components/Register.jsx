import React, { Component } from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies()


export default class Register extends Component 
{
  state = 
  {  
    redirect: false,
    passConfirm:'',
  }


  onchange = (e) => 
  {
    switch(e.target.name)
    {
      case 'photo':
      this.setState({
                      foto:e.target.files[0],
                    });
      break;
    }
  }

  value = (e) => 
  {
    var pass1=e.password.value;
    var pass2=e.passconfirm.value;
    if(pass1 != pass2){
      this.setState({
      styleForm:'is-invalid'
      })
      alert('Please insert same password! ')
    }else{
      this.setState({
        styleForm:'is-valid'
      })
    axios.post('http://localhost:8003/tambahUser/',
    {
        fullname: e.fullname.value,
        username: e.username.value,
        email: e.email.value,
        password: e.password.value
    })
    .then((hasil) => {
        var respon = hasil.data;
        console.log(hasil.data) 
        if(respon == '1') 
        {
          this.setState({
            redirect: true
          })
        }
      })
    }
  };


  render() 
  {
    if (this.state.redirect) return <Redirect to="/" />
    
    return (
        <body className="hold-transition register-page">
            
        
        <div className="register-box">
        <div className="register-logo">
          <a href="../../index2.html"><b>Admin</b>LTE</a>
        </div>
        <div className="register-box-body">
          <p className="login-box-msg">Register a new membership</p>
          <form role="form" onSubmit={this.tambahData} encType="multipart/form-data">
            <div className="form-group has-feedback">
              <input id="fullname" ref="fullname" type="text" className="form-control" placeholder="Full name" />
              <span className="glyphicon glyphicon-user form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input id="username" ref="username" type="text" className="form-control" placeholder="Username" />
              <span className="glyphicon glyphicon-user form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input id="email" ref="email" type="email" className="form-control" placeholder="email" />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input id="password" ref="password" type="password" className="form-control" placeholder="Password" required/>
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            <div className="form-group has-feedback">
              <input id="passconfirm" ref="passconfirm" type="password" className="form-control" placeholder="Password Confirmation" required/>
              <span className="glyphicon glyphicon-lock form-control-feedback" />
            </div>
            {/* <div className="form-group has-feedback">
              <input id="fullname" ref="fullname" type="password" className="form-control" placeholder="Retype password" />
              <span className="glyphicon glyphicon-log-in form-control-feedback" />
            </div> */}
            <div className="row">
              <div className="col-xs-8">
                <div className="icheckbox_square-blue hover">
                  <label>
                    <input type="checkbox" /> I agree to the <a href="#">terms</a>
                  </label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-xs-4">
                <button button onClick={() => this.value(this.refs)} type="submit" className="btn btn-success btn-block btn-flat">Register</button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" className="btn btn-block btn-social btn-facebook btn-flat"><i className="fa fa-facebook" /> Sign up using
              Facebook</a>
            <a href="#" className="btn btn-block btn-social btn-google btn-flat"><i className="fa fa-google-plus" /> Sign up using
              Google+</a>
          </div>
          <Link to="/login" className="text-center">I already have a membership</Link>
        </div>
        {/* /.form-box */}
      </div>
      </body>
    )
    //   {/* /.register-box */}
    //   {/* jQuery 3 */}
    //   {/* Bootstrap 3.3.7 */}
    //   {/* iCheck */}
      


            // <div className="box box-primary">
            //     <div className="box-header with-border">
            //       <h3 className="box-title">Quick Example</h3>
            //     </div>
            //     {/* /.box-header */}
                
            //     {/* form start */}
            //     <form role="form" onSubmit={this.tambahData} encType="multipart/form-data" >
            //       <div className="box-body">
            //         <div className="form-group">
            //           <label htmlFor="fullname">Fullname</label>
            //           <input ref="fullname" type="text" className="form-control" id="fullname" placeholder="Enter fullname" />
            //         </div>

            //         <div className="form-group">
            //           <label htmlFor="username">Username</label>
            //           <input ref="username" type="text" className="form-control" id="username" placeholder="Enter username" />
            //         </div>

            //         <div className="form-group">
            //           <label htmlFor="password">Password</label>
            //           <input ref="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            //         </div>

            //         <div className="form-group">
            //           <label htmlFor="email">Email </label>
            //           <input ref="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
            //         </div>
                    
            //         <div className="form-group">
            //           <label htmlFor="exampleInputFile">File input</label>
            //           <input name="photo" onChange={this.onchange} type="file" id="exampleInputFile" />
            //           <p className="help-block">Example block-level help text here.</p>
            //         </div>

            //         <div className="checkbox">
            //           <label>
            //             <input type="checkbox" /> Check me out
            //           </label>
            //         </div>
            //       </div>
            //       {/* /.box-body */}
                  
            //       <div className="box-footer">
            //         <button onClick={() => this.value(this.refs)} type="submit" className="btn btn-primary">Submit</button>
            //       </div>
            //     </form>
            //   </div>
            // )
    
  }
}




            
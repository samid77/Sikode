import React, { Component } from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Footer from './Footer';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies()


export default class Registration extends Component {
  state = {
    
    fullname: '',
    username: '',
    email: '',
    password: '',
    foto: '',
    redirect: false
  }


  onchange = (e) => {
    switch(e.target.name){
      case 'photo':
      this.setState({
        foto:e.target.files[0],
      });
      break;
    }
  }

  value = (e) => {
    var fullname = e.fullname.value;
    var username = e.username.value;
    var email = e.email.value;
    var password = e.password.value;

    this.setState({
      fullname: fullname,
      username: username,
      email: email,
      password: password
    }) 
  }

  tambahData = (e) => {
    e.preventDefault();
    // 9. new form data seperti gudang/library. karena didalam form maka menggunakan append. kenapa menggunakan state karena state dia tas sudah diganti
    let formData = new FormData();
    formData.append('file', this.state.foto);
    formData.append('fullname', this.state.fullname);
    formData.append('username', this.state.username);
    formData.append('email', this.state.email);
    formData.append('password', this.state.password);
    // console.log (detailproduk)
    axios.post('http://localhost:8002/tambahUser/', formData)
  //   .then((hasil) => {
  //     var respon = hasil.data;
  //     console.log(respon) 
  //     if(respon === 1) 
  //     {
  //       this.setState({
  //         redirect: true
  //       })
  //     }
  // })
  }


  render() {
    return (
      <div className="box box-primary">
  <div className="box-header with-border">
    <h3 className="box-title">Quick Example</h3>
  </div>
  {/* /.box-header */}
  {/* form start */}
  <form role="form" onSubmit={this.tambahData} encType="multipart/form-data" >
    <div className="box-body">
      <div className="form-group">
        <label htmlFor="fullname">Fullname</label>
        <input ref="fullname" type="text" className="form-control" id="fullname" placeholder="Enter fullname" />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input ref="username" type="text" className="form-control" id="username" placeholder="Enter username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input ref="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email </label>
        <input ref="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
      </div>
      
      <div className="form-group">
        <label htmlFor="exampleInputFile">File input</label>
        <input name="photo" onChange={this.onchange} type="file" id="exampleInputFile" />
        <p className="help-block">Example block-level help text here.</p>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" /> Check me out
        </label>
      </div>
    </div>
    {/* /.box-body */}
    <div className="box-footer">
      <button onClick={() => this.value(this.refs)} type="submit" className="btn btn-primary">Submit</button>
    </div>
  </form>
</div>

    )
  }
}




            
import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
// import { connect } from 'react-redux';
const cookies = new Cookies()


/** form question */
class QuestionForm extends Component {

    state= {
        Redirect:false
    }

    onchange = (e) => {
        switch(e.target.name){
          case 'image':
          this.setState({
            foto:e.target.files[0],
          });
          break;
        }
      }

    

    value = (e) => {
        var questiontitle = e.questiontitle.value;
        var questioncontent = e.questioncontent.value; 
        var usersid = cookies.get('sessionid')
        var tags = e.tags.value
              this.setState({
                questiontitle: questiontitle,
                questioncontent: questioncontent,
                usersid:usersid,
                tags:tags
              }) 
            }
            
    add = (e) => {
        var questiontitle = e.questiontitle.value;
        var questioncontent = e.questioncontent.value; 
        var usersid = cookies.get('sessionid')
        var tags = e.tags.value
              this.setState({
                questiontitle: questiontitle,
                questioncontent: questioncontent,
                usersid:usersid,
                tags:tags
              }) 
            }
            
      tambahData = (e) => {
        e.preventDefault();
        // 9. new form data seperti gudang/library. karena didalam form maka menggunakan append. kenapa menggunakan state karena state dia tas sudah diganti
        let formData = new FormData();
        formData.append('file', this.state.foto);
        formData.append('title', this.state.questiontitle);
        formData.append('content', this.state.questioncontent);
        formData.append('usersid', this.state.usersid);
        
        axios.post('http://localhost:8003/addquestion', formData)
        // .then((hasil) => 
        // {
        //   var respon = hasil.data;
        //   console.log(respon) 
        //   if(respon === 1) 
        //   {
        //     this.setState({
        //       redirect: true
        //     })
        //   }
        // })
      }

  render() {
    if(cookies.get('sessionid') === undefined) return <Redirect to="/login"/>
    return(
        <div>
            <Navbar />
            <div className="content-wrapper">
                <div className="container" style={{minHeight: '600px'}}>
                    <section className="content">
                    <div className="col-md-6">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h1 className="box-title">Question Form</h1>
                            </div>
                            {/* /.box-header */}

                            {/* form start */}
                            <form role="form" onSubmit={this.tambahData} encType="multipart/form-data">
                                <div className="box-body">
                                    {/* <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                    </div> */}
                                    <div className="form-group">
                                        <label htmlFor="questiontitle">Title</label>
                                        <input type="text" className="form-control" ref="questiontitle" placeholder="Please Input Your Question Title" />
                                    </div>

                                    {/* <div className="form-group">
                                        <label htmlFor="questioncontent">The Question</label>
                                        <input type="text" className="form-control" ref="questioncontent" placeholder="Please Type What Are You Want to Know" />
                                    </div> */}

                                    <div class="form-group">
                                        <label>The Question</label>
                                        <textarea class="form-control" ref="questioncontent" rows="3" placeholder="Please Type What Are You Want to Know"></textarea>
                                    </div>

                                    {/* <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                    </div> */}
                                    
                                    <div className="form-group">
                                        <label htmlFor="exampleInputFile">Image</label>
                                        <input type="file" name="image" onChange={this.onchange} id="exampleInputFile" />
                                        <p className="help-block">Example block-level help text here.</p>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Tag</label>
                                            <select className="form-control select2" multiple="multiple" data-placeholder="Select a State" style={{width: '100%'}}>
                                            <option>Javascript</option>
                                            <option>React JS</option>
                                            <option>Express JS</option>
                                            <option>Node JS</option>
                                            <option>React Native</option>
                                            </select>
                                        

                                        {/* <div className="input-group input-group-sm">
                                            <select ref="tags" className="form-control">
                                                <option>--- Please choose the tag(s) ---</option>
                                                <option>Javascript</option>
                                                <option>React JS</option>
                                                <option>Express JS</option>
                                                <option>Node JS</option>
                                                <option>React Native</option>
                                            </select>    
                                            <span className="input-group-btn">
                                                <button refs="tambah" value='1' onClick={() => this.add(this.refs)} className="btn btn-info btn-flat">Add!</button>
                                            </span>
                                        </div> */}
                                        <br />
                                        {/* <div className="input-group input-group-sm">
                                            <input type="text" className="form-control" placeholder="Please type your custom tag" />
                                            <span className="input-group-btn">
                                                <button type="button" className="btn btn-info btn-flat">Add!</button>
                                            </span>
                                        </div> */}
                                    </div>
                                </div>
                                {/* /.box-body */}

                                <div className="box-footer">
                                    <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    </section>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}
export default QuestionForm;

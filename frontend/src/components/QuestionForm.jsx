import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default class QuestionForm extends Component 
{
  render() 
  {
    return (
            <div>
               
                <div className="col-md-6">
                    <div className="box box-primary">
                        <div className="box-header with-border">
                            <h1 className="box-title">Question Form</h1>
                        </div>
                        {/* /.box-header */}

                        {/* form start */}
                        <form role="form">
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
                                    <input type="file" id="exampleInputFile" />
                                    <p className="help-block">Example block-level help text here.</p>
                                </div>
                                
                                <div className="form-group">
                                    <label>Tag</label>

                                    <div className="input-group input-group-sm">
                                        <select className="form-control">
                                            <option>--- Please choose the tag(s) ---</option>
                                            <option>Javascript</option>
                                            <option>React JS</option>
                                            <option>Express JS</option>
                                            <option>Node JS</option>
                                            <option>React Native</option>
                                        </select>    
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-info btn-flat">Add!</button>
                                        </span>
                                    </div>
                                    <br />
                                    <div className="input-group input-group-sm">
                                        <input type="text" className="form-control" placeholder="Please type your custom tag" />
                                        <span className="input-group-btn">
                                            <button type="button" className="btn btn-info btn-flat">Add!</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {/* /.box-body */}

                            <div className="box-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            )
  }
}

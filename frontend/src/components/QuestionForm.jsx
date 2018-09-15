import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
import Navbar from './Navbar';
import Footer from './Footer';

const cookie =new Cookies();

/** form question */
class QuestionForm extends Component {
  render() {
      /**cookies session */
    if (cookie.get('sessionid') === undefined)
    {
        return <Redirect to='/login'/>
    }
    /**end */

    return(
        <div>
            <Navbar />
            
            <div className="content-wrapper" style={{}}>
            
                <div className="" style={{minHeight: '600px'}}>
                    <section className="content">
                    <div className="col-md-1"> </div>
                    <div className="col-md-6">
                    <h2 className='' style={{paddingBottom:"10px"}}> Ask Question</h2>
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
                                    <button type="submit" className="btn btn-success">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* widget section as Information for post require */}
                    <div className="col-md-1"></div>  
                    

                    <div className="col-md-3">
                        <div class="box box-success box-solid">
                            <div className="box-header with-border" >
                                <h3 className="box-title"><b>How to Tag</b></h3>&nbsp;
                                <a href="#tag-editor" className="js-back-to-edit-field s-sidebarwidget--action d-none md:d-inline">back <svg aria-hidden="true" className="svg-icon va-middle iconArrowUpSm" width={14} height={14} viewBox="0 0 14 14"><path d="M3 9h8L7 5z" /></svg></a>
                            </div>
                            <div className="box-body" style={{padding:"30px",backgroundColor:"#49cc7d"}}>
                                <ul className="list-unstyled">
                                <div className="s-sidebarwidget--content d-block">
                                    <p>A tag is a keyword or label that categorizes your question with other, similar questions. Choose one or more (up to 5) tags that will help answerers to find and interpret your question.</p>
                                    <p><span className="dingus">►</span> complete the sentence: <i>my question is about...</i></p>
                                    <p><span className="dingus">►</span> use tags that describe things or concepts that are <i>essential</i>, not incidental to your question</p>
                                    <p><span className="dingus">►</span> favor using <a href="/tags" target="_blank">existing popular tags</a></p>
                                    <p><span className="dingus">►</span> read the descriptions that appear below the tag</p>
                                    <p>If your question is primarily about a topic for which you can't find a tag:</p>
                                    <p><span className="dingus">►</span> combine multiple words into single-words with hyphens (e.g. <a href="/questions/tagged/ruby-on-rails" className="post-tag" title rel="tag">ruby-on-rails</a>), up to a maximum of 35 characters</p>
                                    <p><span className="dingus">►</span> <a href="/help/privileges/create-tags" target="_blank">creating new tags is a privilege</a>; if you can't yet create a tag you need, then post this question without it, then <a href="https://meta.stackoverflow.com" target="_blank">ask the community to create it for you</a></p>
                                    <p className="ar"><a href="/tags" target="_blank">popular tags »</a></p>
                                </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    </section>
                </div>
                <br/><br/><br/><br/><br/><br/>
            </div>
            <Footer />
        </div>
    );
  }
}
export default QuestionForm;

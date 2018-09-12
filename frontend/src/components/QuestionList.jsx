import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

class QuestionList extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <div className="content-wrapper">
            <div className="container">
                <h3><b>Topic Headers</b></h3>
                <div className="row">
                    <div className="col-md-8">
                        <div className="box box-widget">
                            <div className="box-body">
                                <ul className="list-unstyled">
                                    <li style={{padding:'5px'}}>
                                        <h4><b>Lorem ipsum dolor sit amet</b></h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolorem distinctio! Dignissimos sint corporis quia hic temporibus! Mollitia aspernatur nostrum laudantium nihil odit at distinctio autem impedit, modi id harum.</p><a>See details ...</a>
                                    </li>
                                    <div>
                                        <small class="label pull-right bg-green">Tag</small>
                                        <small style={{marginRight: '5px'}} class="label pull-right bg-green">Tag</small>
                                        <small style={{marginRight: '5px'}} class="label pull-right bg-green">Tag</small>
                                    </div><hr />
                                    <li style={{padding:'5px'}}>
                                        <h4><b>Lorem ipsum dolor sit amet</b></h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolorem distinctio! Dignissimos sint corporis quia hic temporibus! Mollitia aspernatur nostrum laudantium nihil odit at distinctio autem impedit, modi id harum.</p>
                                        <a>See details ...</a>
                                    </li>
                                    <div>
                                        <small class="label pull-right bg-green">Tag</small>
                                        <small style={{marginRight: '5px'}} class="label pull-right bg-green">Tag</small>
                                        <small style={{marginRight: '5px'}} class="label pull-right bg-green">Tag</small>
                                    </div>
                                    <hr />
                                    <li style={{padding:'5px'}}>
                                        <h4><b>Lorem ipsum dolor sit amet</b></h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolorem distinctio! Dignissimos sint corporis quia hic temporibus! Mollitia aspernatur nostrum laudantium nihil odit at distinctio autem impedit, modi id harum.</p>
                                        <a>See details ...</a>
                                    </li>
                                    <div>
                                        <small class="label pull-right bg-green">Tag</small>
                                        <small style={{marginRight: '5px'}} class="label pull-right bg-green">Tag</small>
                                        <small style={{marginRight: '5px'}} class="label pull-right bg-green">Tag</small>
                                    </div>
                                    <hr />
                                    <li style={{padding:'5px'}}>
                                        <h4><b>Lorem ipsum dolor sit amet</b></h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolorem distinctio! Dignissimos sint corporis quia hic temporibus! Mollitia aspernatur nostrum laudantium nihil odit at distinctio autem impedit, modi id harum.</p>
                                        <a>See details ...</a>
                                    </li>
                                    <div>
                                        <small class="label pull-right bg-green">Tag</small>
                                        <small style={{marginRight: '5px'}} class="label pull-right bg-green">Tag</small>
                                        <small style={{marginRight: '5px'}} class="label pull-right bg-green">Tag</small>
                                    </div>
                                    <hr />
                                    <li style={{padding:'5px'}}>
                                        <h4><b>Lorem ipsum dolor sit amet</b></h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolorem distinctio! Dignissimos sint corporis quia hic temporibus! Mollitia aspernatur nostrum laudantium nihil odit at distinctio autem impedit, modi id harum. </p>
                                        <a>See details ...</a>
                                    </li>
                                    <div>
                                        <small class="label pull-right bg-green">Tag</small>
                                        <small style={{marginRight: '5px'}} class="label pull-right bg-green">Tag</small>
                                        <small style={{marginRight: '5px'}} class="label pull-right bg-green">Tag</small>
                                    </div>
                                    <hr />
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="box box-primary box-solid">
                            <div className="box-header with-border">
                                <h3 className="box-title"><b>Related Tags</b></h3>
                            </div>
                            <div className="box-body">
                                <ul className="list-unstyled">
                                    <li style={{padding:'5px'}}>Lorem ipsum dolor sit amet</li>
                                    <li style={{padding:'5px'}}>Consectetur adipiscing elit</li>
                                    <li style={{padding:'5px'}}>Integer molestie lorem at massa</li>
                                    <li style={{padding:'5px'}}>Facilisis in pretium nisl aliquet</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="box box-success box-solid">
                            <div className="box-header with-border">
                                <h3 className="box-title"><b>Featured Topics</b></h3>
                            </div>
                            <div className="box-body">
                                <ul className="list-unstyled">
                                    <li style={{padding:'5px'}}>Lorem ipsum dolor sit amet</li>
                                    <li style={{padding:'5px'}}>Consectetur adipiscing elit</li>
                                    <li style={{padding:'5px'}}>Integer molestie lorem at massa</li>
                                    <li style={{padding:'5px'}}>Facilisis in pretium nisl aliquet</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <Footer />
      </div>
    )
  }
}
export default QuestionList; 

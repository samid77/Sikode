import React, { Component } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

class Detail extends Component {
  render() {
    return (
      <div>
        <Navbar />
          <div className="content-wrapper">
            <div className="container">
              <div className="row" style={{marginTop:'10px'}}>
                <div className="col-md-8">
                  <div className="box box-widget">
                    <div className="box-header with-border">
                      <h3><b>Question title</b></h3>
                      <div className="user-block">
                        <img className="img-circle" src="../dist/img/user1-128x128.jpg" alt="User Image" />
                        <span className="username"><a href="#">Jonathan Burke Jr.</a></span>
                        <span className="description">Shared publicly - 7:30 PM Today</span>
                      </div>
                      {/* /.user-block */}
                    </div>
                    {/* /.box-header */}
                    <div className="box-body">
                      {/* post text */}
                      <p>Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at</p>
                      <p>the coast of the Semantics, a large language ocean.
                        A small river named Duden flows by their place and supplies
                        it with the necessary regelialia. It is a paradisematic
                        country, in which roasted parts of sentences fly into
                        your mouth.</p>
                      {/* Attachment */}
                      <div className="attachment-block clearfix">
                        <img className="attachment-img" src="../dist/img/photo1.png" alt="Attachment Image" />
                        <div className="attachment-pushed">
                          <h4 className="attachment-heading"><a href="http://www.lipsum.com/">Lorem ipsum text generator</a></h4>
                          <div className="attachment-text">
                            Description about the attachment can be placed here.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a href="#">more</a>
                          </div>
                          {/* /.attachment-text */}
                        </div>
                        {/* /.attachment-pushed */}
                      </div>
                      {/* /.attachment-block */}
                      {/* Social sharing buttons */}
                      <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share" /> Share</button>
                      <button type="button" className="btn btn-default btn-xs"><i className="fa fa-thumbs-o-up" /> Like</button>
                      <span className="pull-right text-muted">45 likes - 2 comments</span>
                    </div>
                    {/* /.box-body */}
                    <div className="box-footer box-comments">
                      <div className="box-comment">
                        {/* User image */}
                        <img className="img-circle img-sm" src="../dist/img/user3-128x128.jpg" alt="User Image" />
                        <div className="comment-text">
                          <span className="username">
                            Maria Gonzales
                            <span className="text-muted pull-right">8:03 PM Today</span>
                          </span>{/* /.username */}
                          It is a long established fact that a reader will be distracted
                          by the readable content of a page when looking at its layout.
                        </div>
                        {/* /.comment-text */}
                      </div>
                      {/* /.box-comment */}
                      <div className="box-comment">
                        {/* User image */}
                        <img className="img-circle img-sm" src="../dist/img/user5-128x128.jpg" alt="User Image" />
                        <div className="comment-text">
                          <span className="username">
                            Nora Havisham
                            <span className="text-muted pull-right">8:03 PM Today</span>
                          </span>{/* /.username */}
                          The point of using Lorem Ipsum is that it has a more-or-less
                          normal distribution of letters, as opposed to using
                          'Content here, content here', making it look like readable English.
                        </div>
                        {/* /.comment-text */}
                      </div>
                      {/* /.box-comment */}
                    </div>
                    {/* /.box-footer */}
                    <div className="box-footer">
                      <form action="#" method="post">
                        <img className="img-responsive img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="Alt Text" />
                        {/* .img-push is used to add margin to elements next to floating images */}
                        <div className="img-push">
                          <input type="text" className="form-control input-sm" placeholder="Press enter to post comment" />
                        </div>
                      </form>
                    </div>
                    {/* /.box-footer */}
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="box box-widget">
                    <div className="box-body">
                      <h3><b>Related questions</b></h3><hr />
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
export default Detail

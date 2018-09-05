import React, { Component } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="content-wrapper">
            <div className="jumbotron text-center" style={{paddingBottom: '120px', backgroundColor: '#49cc7d'}}>
                <h2 style={{color: '#0b3d89'}}>Search for something</h2>
                <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
                        <form className="form-inline" method="get" action="<?php echo site_url('main/search');?>">
                        <input type="hidden" name="tipe" defaultValue="konsultasi" />
                        <div className="input-group text-center">
                            <input type="text" className="form-control" size={50} name="keywords" placeholder="Keywords..." id="searchForm" />
                            <div className="input-group-btn">
                                <button type="submit" className="btn btn-success"><i className="fa fa-search" /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container">
                <section className="content">
                    <div className="col-md-4">
                        <div className="box box-widget">
                            <div className="box-header">
                                <div className="box-title">
                                    <h3><b>Popular Topics</b></h3>
                                </div>
                            </div>
                            <div className="box-body">
                                <ul className="list-unstyled">
                                    <li style={{padding:'5px'}}>Lorem ipsum dolor sit amet</li>
                                    <li style={{padding:'5px'}}>Consectetur adipiscing elit</li>
                                    <li style={{padding:'5px'}}>Integer molestie lorem at massa</li>
                                    <li style={{padding:'5px'}}>Facilisis in pretium nisl aliquet</li>
                                </ul>
                                <a href="#"><p>See All ...</p></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box box-widget">
                            <div className="box-header">
                                <div className="box-title">
                                    <h3><b>Recent Topics</b></h3>
                                </div>
                            </div>
                            <div className="box-body">
                                <ul className="list-unstyled">
                                    <li style={{padding:'5px'}}>Lorem ipsum dolor sit amet</li>
                                    <li style={{padding:'5px'}}>Consectetur adipiscing elit</li>
                                    <li style={{padding:'5px'}}>Integer molestie lorem at massa</li>
                                    <li style={{padding:'5px'}}>Facilisis in pretium nisl aliquet</li>
                                </ul>
                                <a href="#"><p>See All ...</p></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="box box-widget">
                            <div className="box-header">
                                <div className="box-title">
                                    <h3><b> Most Helpful Topics</b></h3>
                                </div>
                            </div>
                            <div className="box-body">
                                <ul className="list-unstyled">
                                    <li style={{padding:'5px'}}>Lorem ipsum dolor sit amet</li>
                                    <li style={{padding:'5px'}}>Consectetur adipiscing elit</li>
                                    <li style={{padding:'5px'}}>Integer molestie lorem at massa</li>
                                    <li style={{padding:'5px'}}>Facilisis in pretium nisl aliquet</li>
                                </ul>
                                <a href="#"><p>See All ...</p></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Homepage;

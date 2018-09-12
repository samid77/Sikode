import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios'

class Homepage extends Component {
    state={
        question:[]
    }
    componentWillMount() {
        axios.get('http://localhost:8003/recentquestion')
        .then((ambilData)=>{
          this.setState({question:ambilData.data,})
          console.log(this.state.question)
        })
      }

  render() {
    const list =this.state.question.map((item,urutan)=>{
        var title=item.question_title;
        var questionid = item.id;
        return <li key={urutan} value={questionid} style={{padding:'5px'}}><Link to= '#'>{title}</Link></li>
        
    })
    
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
                    <button style={{marginTop: '10px'}} className="btn btn-md btn-flat btn-success"><i className="fa fa-search"></i> Advanced Search</button>
                </div>
            </div>
            <div className="container" style={{minHeight: '600px'}}>
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
                                <Link to="/questionlist"><a><p>See All ...</p></a></Link>
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
                                    {/* <li style={{padding:'5px'}}>Lorem ipsum dolor sit amet</li>
                                    <li style={{padding:'5px'}}>Consectetur adipiscing elit</li>
                                    <li style={{padding:'5px'}}>Integer molestie lorem at massa</li>
                                    <li style={{padding:'5px'}}>Facilisis in pretium nisl aliquet</li> */}
                                    {list}
                                </ul>
                                <Link to="/questionlist"><Link to="/questionlist"><a><p>See All ...</p></a></Link></Link>
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
                                <Link to="/questionlist"><a><p>See All ...</p></a></Link>
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

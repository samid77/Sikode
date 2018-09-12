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
              <div className="row">
                <div className="col-md-8">
                  <div className="box box-widget">
                    <div className="box-body">
                      
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="box box-widget">
                    <div className="box-body">

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

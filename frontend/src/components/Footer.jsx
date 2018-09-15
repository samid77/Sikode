import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
          <footer className="main-footer" style={{backgroundColor: '#2eb282', color: '#fff'}}>
            <div className="container ">
                <div className="pull-right hidden-xs">
                <b>Version</b> 1.0
                </div>
                <strong>Copyright © 2018 <a href="https://adminlte.io">JC5 Studio</a>.</strong> All rights
                reserved.
            </div>
            {/* /.container */}
         </footer>
      </div>
    )
  }
}
export default Footer;

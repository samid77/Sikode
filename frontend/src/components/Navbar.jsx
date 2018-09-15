import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

class Navbar extends Component 
{
    state = 
    {
        userData: [0],
        userfullname: 'No Data',

        dataTag: [],
    }

    componentWillMount()
    {
        axios.get('http://localhost:8003/datatag')
        .then((ambilData) =>  {
                                    this.setState(
                                    {
                                        dataTag: ambilData.data
                                    });
                                })
    }

    componentDidMount()
    {
        var userID = cookies.get('sessionid');
        if(userID != undefined)
        {
            axios.post('http://localhost:8003/datauser',
            {
                userID: userID
            })
            .then((response) =>
            {
                this.setState({
                                userData : response.data[0],
                                userfullname : response.data[0].fullname,
                                //userfullname: response.data.fullname,
                            })
                // console.log(this.state.userData);
                // console.log(this.state.userfullname);
            })
        }
    }

    signout = () =>
    {
        cookies.remove('sessionid');

        window.location.reload();
    }

    render() 
    {
        const hasiltag = this.state.dataTag.map(
            (isi,urutan) =>
            {
                //var urut = urutan +1;
                var tagID = isi.id;
                var tagName = isi.tag;
                var tagTotal = isi.total;

                return  <li key={urutan} value={tagID}><Link to="#">{tagName} <span class="label label-primary pull-right">{tagTotal}</span></Link></li> 
            });
        
        const BtnOpt1 = <li className="dropdown user user-menu">
                            {/* Menu Toggle Button */}
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                {/* The user image in the navbar*/}
                                <img src="../../dist/img/user2-160x160.jpg" className="user-image" alt={''} />
                                {/* hidden-xs hides the username on small devices so only the image appears. */}
                                <span className="hidden-xs">{this.state.userfullname}</span>
                            </a>
                            
                            <ul className="dropdown-menu">
                                {/* The user image in the menu */}
                                <li className="user-header">
                                    <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt={''} />
                                    <p>
                                        {this.state.userfullname} - Web Developer
                                        <small>Member since Nov. 2018</small>
                                    </p>
                                </li>

                                {/* Menu Footer*/}
                                <li className="user-footer">
                                    <div className="pull-left">
                                        <a className="btn btn-success btn-flat">Profile</a>
                                    </div>

                                    <div className="pull-right">
                                        <a className="btn btn-danger btn-flat" onClick={this.signout}>Sign Out</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
        
        const BtnOpt2 = <li><Link to="/login">Sign In</Link></li>

        const BtnDefaultOpt = (this.state.userfullname != 'No Data') ? BtnOpt1 : BtnOpt2
        
        return (
                <header className="main-header">
                    <nav className="navbar navbar-static-top" style={{backgroundColor: '#2eb282'}}>
                        <div className="container">
                            <div className="navbar-header">
                                <Link to="/" className="navbar-brand"><b>Sikode</b></Link>
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                                    <i className="fa fa-bars" />
                                </button>
                            </div>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/"><i className="fa fa-home"></i>   <span className="sr-only">(current)</span></Link></li>
                                    <li className="dropdown">
                                        <a className="dropdown-toggle" data-toggle="dropdown">Popular Tags<span className="caret" /></a>
                                        <ul className="dropdown-menu" role="menu">
                                            {/* <li><Link to="/questionform">Post Your Question</Link></li>
                                            <li><a>Another action</a></li>
                                            <li><a>Something else here</a></li>
                                            <li className="divider" />
                                            <li><a>Separated link</a></li>
                                            <li className="divider" />
                                            <li><a>One more separated link</a></li> */}
                                            {hasiltag}
                                            <li className="divider" />
                                            <li><Link to="#">Others</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/questionform">Post the Question</Link></li>
                                </ul>
                            </div>
                            {/* /.navbar-collapse */}
                            {/* Navbar Right Menu */}
                            <div className="navbar-custom-menu">
                                <ul className="nav navbar-nav">
                                    {/* Messages: style can be found in dropdown.less*/}
                                    <li className="dropdown messages-menu">
                                        {/* Menu toggle button */}
                                        <a className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-envelope-o" />
                                            <span className="label label-success">4</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="header">You have 4 messages</li>
                                            <li>
                                                {/* inner menu: contains the messages */}
                                                <ul className="menu">
                                                    <li>{/* start message */}
                                                    <a>
                                                        <div className="pull-left">
                                                        {/* User Image */}
                                                        <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt={''} />
                                                        </div>
                                                        {/* Message title and timestamp */}
                                                        <h4>
                                                        Support Team
                                                        <small><i className="fa fa-clock-o" /> 5 mins</small>
                                                        </h4>
                                                        {/* The message */}
                                                        <p>Why not buy a new awesome theme?</p>
                                                    </a>
                                                    </li>
                                                    {/* end message */}
                                                </ul>
                                                {/* /.menu */}
                                            </li>
                                            <li className="footer"><a>See All Messages</a></li>
                                        </ul>
                                    </li>
                                    {/* /.messages-menu */}
                                    {/* Notifications Menu */}
                                    <li className="dropdown notifications-menu">
                                        {/* Menu toggle button */}
                                        <a className="dropdown-toggle" data-toggle="dropdown">
                                            <i className="fa fa-bell-o" />
                                            <span className="label label-warning">10</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="header">You have 10 notifications</li>
                                            <li>
                                                {/* Inner Menu: contains the notifications */}
                                                <ul className="menu">
                                                    <li>{/* start notification */}
                                                    <a>
                                                        <i className="fa fa-users text-aqua" /> 5 new members joined today
                                                    </a>
                                                    </li>
                                                    {/* end notification */}
                                                </ul>
                                            </li>
                                            <li className="footer"><a>View all</a></li>
                                        </ul>
                                    </li>
                                    {/* User Account Menu */}
                                    
                                    {BtnDefaultOpt}
                                   
                                </ul>
                            </div>
                            {/* /.navbar-custom-menu */}
                        </div>
                    {/* /.container-fluid */}
                    </nav>
                </header>      
                )
    }
}
export default Navbar;

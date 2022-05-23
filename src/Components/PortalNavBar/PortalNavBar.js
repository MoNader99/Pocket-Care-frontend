import React from 'react';
import { Link } from 'react-router-dom';
import './PortalNavBar.css';

class PortalNavBar extends React.Component {

  render(){
    return (
      <div className ="portal-navbar">
        <nav className="navbar navbar-expand-sm fixed-top" style={{backgroundColor:"#BFBFBF",height:"45px"}}>
            <div className="navbar-nav ml-auto">
                <Link to="/#" className="nav-item nav-link  icon"><i className="fa fa-bell-o fa-lg" style={{color: 'rgb(76 76 76)'}}></i><span className="badge"></span></Link>
                <Link to="/#" className="nav-item nav-link icon"><i className="far fa-comment-dots fa-lg" style={{color: 'rgb(76 76 76)'}}></i><span className="badge"></span></Link>
                <div className="nav-item ">
                    <Link to="/#" className="nav-link user-action" style={{color: 'rgb(76 76 76)',fontWeight: '600'}}><img src="https://www.emaratalyoum.com/polopoly_fs/1.1442213.1610441243!/image/image.jpg" className="avatar" alt="Avatar"/> Mohammed Nader <b className="caret"></b></Link>
                </div>
            </div>
        </nav>
      </div>
    );
  } 
}

export default PortalNavBar;


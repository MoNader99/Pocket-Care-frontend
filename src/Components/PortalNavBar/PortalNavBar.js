import React from 'react';
import { Link } from 'react-router-dom';
import './PortalNavBar.css';
import {connect} from "react-redux";

class PortalNavBar extends React.Component {

  render(){
    return (
      <div className ="portal-navbar">
        <nav className="navbar navbar-expand-sm fixed-top" style={{backgroundColor:"#BFBFBF",height:"45px"}}>
            <div className="navbar-nav ml-auto">
                <Link to="/DoctorPortal/Chat" className="nav-item nav-link icon"><i className="far fa-comment-dots fa-lg" style={{color: 'rgb(76 76 76)'}}></i><span className="badge"></span></Link>
                <div className="nav-item ">
                    <Link to="" className="nav-link user-action" style={{color: 'rgb(76 76 76)',fontWeight: '600'}}><img src={this.props.DoctorData.personalData.Gender === "Female"? require('../../Images/doctorF.png') : require('../../Images/doctorM.png')} className="avatar" alt=""/> {this.props.DoctorData.personalData.FirstName + " " + this.props.DoctorData.personalData.LastName} <b className="caret"></b></Link>
                </div>
            </div>
        </nav>
      </div>
    );
  } 
}
const mapStateToProps = state =>{
  return{
    DoctorData:state.DoctorData,
  };
};

export default connect(mapStateToProps, null)(PortalNavBar);


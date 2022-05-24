import React from 'react';
import './PortalSideBar.css';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import * as actionTypes from "../../LocalState/actions";

class PortalSideBar extends React.Component {
  render(){
    return (
        <div className="wrapper">
        <div className="sidebar">
            <ul>
                <li><NavLink className="List" to="/DoctorPortal/Dashboard">Dashboard</NavLink></li>
                <li><NavLink   className="List" to="/DoctorPortal/AddPatient">Add Patient</NavLink></li>
                <li><NavLink  className="List" to="/DoctorPortal/PatientList">Patient List</NavLink></li>
                <li><NavLink  className="List" to="/DoctorPortal/Prescriptions">Prescriptions</NavLink></li>
                <li><NavLink   className="List" to="/DoctorPortal/AccountSettings">Account Settings</NavLink></li>
                
                <li style={{position: 'fixed' , bottom: '50px', width: '-webkit-fill-available'}}><NavLink  className="List" 
                onClick={
                  (event)=>{this.props.onSignOut()
                  window.location.replace("/")}} 
                to="/ha5">Sign Out</NavLink></li>
            </ul> 
        </div>
      </div>
    );
  } 
}
const mapDispatchToProps = dispatch => {
  return {
    onSignOut : () => dispatch ({type: actionTypes.ON_SIGNOUT, payload: {} }),
  };
};

export default connect(null, mapDispatchToProps)(PortalSideBar);


import React from 'react';
import './PortalSideBar.css';
import {NavLink} from "react-router-dom";

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
            </ul> 
        </div>
      </div>
    );
  } 
}
export default PortalSideBar;


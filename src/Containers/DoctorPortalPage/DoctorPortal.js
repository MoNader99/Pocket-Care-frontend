import React from 'react';
import './DoctorPortal.css';
import {BrowserRouter as Router,
  Switch, 
  Route, 
 } from "react-router-dom";
import PortalSideBar from '../../Components/PortalSideBar/PortalSideBar';
import PortalNavBar from '../../Components/PortalNavBar/PortalNavBar';
import Dashboard from '../../Components/Dashboard/Dashboard'
import AddPatient from '../../Components/AddPatient/AddPatient'
import PatientListPage from '../../Components/PatientList/PatientListPage'
import PrescriptionsPage from '../../Components/Prescriptions/PrescriptionsPage'
import AccountSettings from '../../Components/AccountSettings/AccountSettings'
import MoreDetailsPage from '../../Components/MoreDetails/MoreDetailsPage';

class DoctorPortalHomePage extends React.Component {

  render(){
    return (
      <Router>
      <div className ="portal-home-page">
        <PortalNavBar/>
        <div className="row mx-0 no-gutters" >
        <div className="side-bar-portal">
            <PortalSideBar/>
        </div>
        <div className="content-portal">
            <Switch>
                <Route  path="/DoctorPortal/Dashboard" component={Dashboard}></Route>
                <Route  path="/DoctorPortal/AddPatient" component={AddPatient}></Route>
                <Route  path="/DoctorPortal/PatientList" component={PatientListPage}></Route>
                <Route  path="/DoctorPortal/Prescriptions" component={PrescriptionsPage}></Route>
                <Route  path="/DoctorPortal/AccountSettings" component={AccountSettings}></Route>
                <Route  path="/DoctorPortal/PatientDetails" component={MoreDetailsPage}></Route>
            </Switch>
        </div>
        </div>
      </div>
      </Router>
    );
  } 
}

export default DoctorPortalHomePage;


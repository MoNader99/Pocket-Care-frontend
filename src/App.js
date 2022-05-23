import './App.css';
import {BrowserRouter as Router,
  Switch, 
  Route, 
 } from "react-router-dom";

import WelcomePage from "./Components/WelcomePage/WelcomePage"
import DoctorPortalHomePage from "../src/Containers/DoctorPortalPage/DoctorPortal"
import LoginPage from './Components/LoginPage/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={WelcomePage}/>
        <Route exact path="/Login" component={LoginPage}/>
        <Route exact path="/DoctorPortal/*" component={DoctorPortalHomePage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;

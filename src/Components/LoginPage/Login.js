import React from 'react';
import "./Login.css"

class LoginPage extends React.Component {
    render() {
      return (
          <div className="login">
            <form action="/DoctorPortal/Dashboard" class="login-form">
            <h1 style={{ fontSize: "45px" ,fontWeight: "700"}}>Login</h1>
            <div class="txtb">
                <input placeholder="Email Address" type="Email"/>
                
            </div>
            <div class="txtb">
                <input placeholder="Password" type="password"/>
            </div>
            <input type="submit" class= "logbtn" value="Login"/>
            </form>
          </div>
      )
}
}
export default LoginPage;
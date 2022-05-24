import React from 'react';
import "./Login.css"
import {BASEURL} from '../../Containers/baseurl/baseurl';
import {connect} from "react-redux";
import * as actionTypes from "../../LocalState/actions";

class LoginPage extends React.Component {
    state={
        EmailValue:"",
        PasswordValue:"",
        loginError:false,
        DoctorID:"",
    }

    ChangeEmail=(event)=>{
        this.setState({ 
            EmailValue: event.target.value,
          });
    }

    ChangePassword=(event)=>{
        this.setState({ 
            PasswordValue: event.target.value,
          });
    }

    Login=(event)=>{
        var url = BASEURL+ "/doctor/login"; 
        const requestOptions = {
            method: 'POST',
            body:JSON.stringify({Email:this.state.EmailValue,Password:this.state.PasswordValue}),
            headers: {'Content-Type': 'application/json' },
          };
        fetch(url,requestOptions)
        .then((response) => { return response.json()})
        .then((data) => {
            if(data === "Password is incorrect"){
                this.setState({ 
                    loginError: true
                  });
            }
            else{
                this.setState({ 
                    loginError: false,
                    DoctorID:data.DoctorID
                  });
                  this.GetDoctorData()
            }
        })
        .catch((error)=>{console.log(error);
        })
    }

    GetDoctorData(){
        var url = BASEURL+ "/doctor/getdoctordata/" + this.state.DoctorID; 
        const requestOptions = {
            method: 'GET',
          };
        fetch(url,requestOptions)
        .then((response) => { return response.json()})
        .then((data) => {
            let obj = {personalData:data[0],clincData:data[1]}
            this.props.onSignIn(obj,this.state.DoctorID);
            window.location.replace("/DoctorPortal/Dashboard");
        })
        .catch((error)=>{console.log(error);
        })
    }

    render() {
      return (
          <div className="login">
            <div className="container h-100">
            <div style={{paddingTop: "170px"}} className="d-flex justify-content-center h-100">
                <div className="user_card">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="brand_logo_container">
                            <div className="circle">
                                <img src={require('../../Images/logo-removebg.png')} className="brand_logo" alt="Logo"/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center form_container">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i class="fas fa-envelope"></i></span>
                                </div>
                                <input style={{'width': '350px' }} onChange={(event)=>this.ChangeEmail(event)} value={this.state.EmailValue} type="text" name="" className="form-control input_user" placeholder="Email"/>
                            </div>
                            <div className="input-group mb-2">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" onChange={(event)=>this.ChangePassword(event)} value={this.state.PasswordValue} className="form-control input_pass" placeholder="password"/>
                            </div>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                    <label className="custom-control-label" for="customControlInline">Remember me</label>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button style={{maxWidth: '115px', borderRadius: '25px' }} onClick={(event)=>this.Login(event)} type="button" name="button" className="btn login_btn">Login</button> 
                            </div>
                            {this.state.loginError? <div style={{color: 'red',fontSize: '20px',fontWeight: '800'}} className="mt-3"> Error with login </div> : <div></div>}
                        </form>
                    </div>
            
                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            Don't have an account? <a href="" className="ml-2">Contact Us</a>
                        </div>
                        <div className="d-flex justify-content-center links">
                            <a href="/login">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      )
}
}
const mapDispatchToProps = dispatch => {
    return {
      onSignIn : (user,userID) => dispatch ({type: actionTypes.ON_SIGNIN, payload: {user:user,userID:userID} }),
    };
  };
  
export default connect(null, mapDispatchToProps)(LoginPage);
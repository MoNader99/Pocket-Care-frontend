import React from 'react';
import './AccountSettings.css';
import MyMapComponent from './map';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,

} from "react-share";

import {CopyToClipboard} from 'react-copy-to-clipboard';

function Iframe(props) {
  return (<div dangerouslySetInnerHTML={ {__html:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1727.5023505754243!2d31.450859887542503!3d30.00802139786396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d5e3795b7660cf7!2zMzDCsDAwJzI5LjIiTiAzMcKwMjcnMDMuNCJF!5e0!3m2!1sar!2seg!4v1650415954632!5m2!1sar!2seg" width="250" height="250" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'}} />);
}

class AccountSettings extends React.Component {

    render(){
      return (
        <div className ="account-settings">
          <div className="row d-flex justify-content-center">

            <div className="col-3 doctor-info">
                <div style={{fontWeight:"700",fontSize:"25px"}} className="d-flex justify-content-start">
                  Profile
                </div>
                <div style={{color:"#676767"}} className="d-flex justify-content-start">As shown to publlic</div> 

                <div className="mt-2 p-2" style={{backgroundColor:"#F3F3F3"}}>
                    <div className="container border rounded" style={{backgroundColor:'white'}}>
                      <div className="d-flex align-items-end justify-content-center">
                        <div style={{fontSize: '15px',fontWeight: '600' ,color: '#00318B'}}>Dr.</div>
                        <div style={{marginLeft: '5px',fontSize: '20px',fontWeight: '700',color: '#00318B'}}>Mohammed Nader</div>
                      </div>
                      <div style={{color:"#676767",fontSize: '12px'}} className="d-flex justify-content-center">mnader93@yahoo.com</div>
                      <img style={{height:"100px",width:"100px"}} src="https://barcodesegypt.com/wp-content/uploads/sites/123/2019/05/qr_code_5cdd30e269752.jpg"></img>
                      <div>
                        <i data-toggle="modal" data-target=".bd-example-modal-sm" class="fas fa-expand-alt" style={{cursor:"pointer"}}></i> 
                        <i class="fas fa-share-alt ml-3" data-target="#share-song" data-toggle="modal" style={{cursor:"pointer"}}></i>
                      </div> 
                    </div>
                  
                    <div className="border rounded mt-2 " style={{backgroundColor:'white'}}>

                      <div className="border px-2">
                        <div className="d-flex justify-content-start" style={{color:"#676767",fontSize:"13px"}}>
                          Practicing Since
                        </div>
                        <div className="d-flex justify-content-start" style={{color:"#727175",fontWeight:"700",fontSize:"14px"}}>
                          2015
                        </div>
                      </div>

                      <div className="border px-2">
                        <div className="d-flex justify-content-start" style={{color:"#676767",fontSize:"13px"}}>
                          Area of Practice
                        </div>
                        <div className="d-flex justify-content-start" style={{color:"#727175",fontWeight:"700",fontSize:"14px"}}>
                          Gastroenterologist
                        </div>
                      </div>
                      <div className="border px-2">
                        <div className="d-flex justify-content-start" style={{color:"#676767",fontSize:"13px"}}>
                        Biography
                        </div>
                        <div className="d-flex justify-content-start" style={{color:"#727175",fontWeight:"700",fontSize:"14px", textAlign:"start"}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                        </div>
                      </div>
                      <div className="border px-2">
                        <div className="d-flex justify-content-start" style={{color:"#676767",fontSize:"13px"}}>
                        Clinic Name
                        </div>
                        <div className="d-flex justify-content-start" style={{color:"#727175",fontWeight:"700",fontSize:"14px"}}>
                        Ahmad Nader Clinic
                        </div>
                      </div>
                      <div className="border px-2">
                        <div className="d-flex justify-content-start" style={{color:"#676767",fontSize:"13px"}}>
                        Clinic Address
                        </div>
                        <div className="d-flex justify-content-start" style={{color:"#727175",fontWeight:"700",fontSize:"14px" ,  textAlign:"start"}}>
                        Lorem Ipsum is simply dummy text of the printing
                        </div>
                      </div>
                      {/* <div className="border px-2">
                        <div className="d-flex justify-content-start" style={{color:"#676767",fontSize:"13px"}}>
                          Clinic Location
                        </div>
                        <Iframe iframe={Iframe}/>
                      </div> */}
                    </div>

                </div>
            </div>

            <div className="col-9">
                <div style={{fontWeight:"700",fontSize:"25px"}} className="d-flex justify-content-start">
                  Settings
                </div>
                <div style={{color:"#676767"}} className="d-flex justify-content-start">Update Personal Information and settings</div> 

                <div className="row justify-content-start mt-2">
                  <div className="col-12 d-flex align-items-start justify-content-start flex-column">
                    <div className="border rounded w-100">
                      <div className="container-fluid border rounded d-flex align-items-center justify-content-start"  style={{backgroundColor:"#F5F5F5",height:"40px",fontSize: '20px',fontWeight: '700',color: '#00318B'}}> Account & Personal Info </div>
                  
                        <div className="row px-4 py-1">
                          <div className='col-6'>
                            <div className="form-group">
                              <label  className="d-flex">First Name:</label>
                              <input autocomplete="off" type="text" className="form-control" id="FirstName"  placeholder="Ex: Mohammed"/>
                            </div>
                          </div>
                          <div className='col-6'>
                            <div className="form-group">
                              <label  className="d-flex">Last Name:</label>
                              <input autocomplete="off" type="text" className="form-control" id="LastName" placeholder="Ex: Nader"/>
                            </div>
                          </div>
                        </div>

                        <div className="row px-4">
                    <div className='col-6'>
                      <div className="row">
                      <div className="col-5 ">
                      <div className="form-group ">
                        <label  className="d-flex">Gender:</label>
                        <div class="form-check-inline">
                          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="Male" checked/>
                          <label class="form-check-label mr-3" >
                            Male
                          </label>
                          <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="Female" />
                          <label class="form-check-label" >
                            Female
                          </label>
                        </div>
                      </div>
                      </div>
                      <div className="col-7">
                      <div className="form-group">
                        <label  className="d-flex">Age:</label>
                        <input autocomplete="off" type="number" className="form-control" id="Age" placeholder="Ex: 22 years"/>
                      </div>
                      </div>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className="form-group">
                        <label  className="d-flex">Birth Date:</label>
                        <input type="date" className="form-control" id="Birth Date"  min="1990-01-01" max="2023-12-31"/>
                      </div>
                    </div>
                  </div>

                  <div className="row px-4">
                    <div className='col-6'>
                      <div className="form-group">
                        <label  className="d-flex">Mobile Number:</label>
                        <input autocomplete="off" type="text" className="form-control" id="MobileNumber" placeholder="Ex: 01552099261"/>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className="form-group">
                        <label  className="d-flex">Email Address:</label>
                        <input autocomplete="off" type="email" className="form-control" id="Email" placeholder="Ex: mnader93@yahoo.com"/>
                      </div>
                    </div>
                    </div>
                      
                    <div className="row p-3">
                      <div className="col-12 d-flex justify-content-end">
                        <button data-toggle="modal" data-target="#change-password"  className="btn btn-primary  ">Change Password</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


                      <div className="row justify-content-start mt-2">
                        <div className="col-12 d-flex align-items-start justify-content-start flex-column">
                          <div className="border rounded w-100">
                            <div className="container-fluid border rounded d-flex align-items-center justify-content-start"  style={{backgroundColor:"#F5F5F5",height:"40px",fontSize: '20px',fontWeight: '700',color: '#00318B'}}> Profile Information </div>
                              
                              <div className="row px-4 py-1">
                                <div className='col-12'>
                                  <div class="form-group">
                                    <label  className="d-flex">Biography:</label>
                                    <textarea class="form-control" id="Biography" rows="2"></textarea>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="row px-4">
                                <div className='col-6'>
                                  <div className="form-group">
                                    <label  className="d-flex">Clinic Name:</label>
                                    <input autocomplete="off" type="text" className="form-control" id="ClinicName" placeholder="Ex: Ahmad nader's Clinic"/>
                                  </div>
                                </div>
                                <div className='col-6'>
                                  <div className="form-group">
                                    <label  className="d-flex">Area of Practice:</label>
                                    <input autocomplete="off" type="text" className="form-control" id="AreaofPractice" placeholder="Ex: opthalmology"/>
                                  </div>
                                </div>
                              </div>

                              <div className="row px-4">
                                <div className='col-12'>
                                  <div class="form-group">
                                    <label  className="d-flex">Clinic address:</label>
                                    <textarea class="form-control" id="ClinicAddress" rows="2"></textarea>
                                  </div>
                                </div>
                              </div>

                              {/* <div className="row px-4">
                                <div className='col-12'>
                                  <div class="form-group">
                                    <label  className="d-flex">Clinic Location:</label>

                                    <div >
                                      <MyMapComponent isMarkerShown={true}/>
                                    </div>

                                  </div>
                                </div>
                              </div> */}

                          </div>
                        </div>
                      </div>

              </div>
              
          </div>
              <div className="row mt-3">
                  <div className="col-12 d-flex justify-content-end">
                    <button className="btn btn-primary btn-lg">Save Changes</button>
                  </div>         
              </div>

          <div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm ">
              <div class="modal-content">
              <img style={{height:"400px",width:"400px"}} src="https://barcodesegypt.com/wp-content/uploads/sites/123/2019/05/qr_code_5cdd30e269752.jpg"></img>
              </div>
            </div>
          </div>

          <div class="modal fade bd-example-modal-sm" id="change-password" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-sm ">
              <div class="modal-content p-3">
                <div className="row justify-content-start mt-2">
                  <div className="col-12 d-flex align-items-start justify-content-start flex-column">
                    <div className="border rounded w-100">
                      <div className="container-fluid border rounded d-flex align-items-center justify-content-start"  style={{backgroundColor:"#F5F5F5",height:"40px",fontSize: '15px',fontWeight: '700',color: '#00318B'}}> Change your account password </div>
                        <div className="row px-4">
                          <div className='col-12'>
                            <div className="form-group">
                              <label  className="d-flex">Current Password:</label>
                              <input autocomplete="off" type="password" className="form-control" id="CurrentPassword" placeholder=""/>
                            </div>
                        </div>
                      </div>
                      <div className="row px-4">
                          <div className='col-12'>
                            <div className="form-group">
                              <label  className="d-flex">New Password:</label>
                              <input autocomplete="off" type="password" className="form-control" id="NewPassword" placeholder=""/>
                            </div>
                          </div>
                      </div>
                      <div className="row px-4">
                          <div className='col-12'>
                            <div className="form-group">
                              <label  className="d-flex">Confirm Current Password:</label>
                              <input autocomplete="off" type="password" className="form-control" id="ConfirmCurrentPassword" placeholder=""/>
                            </div>
                        </div>
                      </div>

                      <div className="row p-2">
                          <div className="col-12 d-flex justify-content-end">
                            <button data-dismiss="modal" className="btn btn-primary">Save Changes</button>
                          </div>         
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="share-song" className="modal fade" role="dialog">
            <div className="modal-dialog modal-xl  ">
            <div className="modal-content">
              <button className="btn close-button" data-dismiss="modal"> <i className="fas fa-times"></i> </button>
                  <h2 className="d-flex justify-content-center mb-5" >Share Your QR Code: </h2>
              
                  <div className=" container d-flex justify-content-around mb-5">
                      <FacebookShareButton
                      url="dsfsfsd"
                      quote="Check out my Profile on PocketCare Application "
                      className="social"
                      >
                      <FacebookIcon size={50} round />
                      </FacebookShareButton>

                      <TwitterShareButton
                      url="sdfsdfsdf"
                      quote="Check out my Profile on PocketCare Application "
                      className="social"
                      >
                      <TwitterIcon size={50} round />
                      </TwitterShareButton>

                      <LinkedinShareButton
                      url="sdfsdfds"
                      quote="Check out my Profile on PocketCare Application "
                      className="social"
                      >
                      <LinkedinIcon size={50} round />
                      </LinkedinShareButton>

                      <WhatsappShareButton
                      url="sfdsdfsd"
                      quote="Check out my Profile on PocketCare Application "
                      className="social"
                      >
                      <WhatsappIcon size={50} round />
                      </WhatsappShareButton>


                      <EmailShareButton
                      url="sdfsdfsdf"
                      quote="Check out my Profile on PocketCare Application "
                      className="social"
                      >
                      <EmailIcon size={50} round />
                      </EmailShareButton>

                      <TelegramShareButton
                      url="sdfsdfsdf"
                      quote="Check out my Profile on PocketCare Application "
                      className="social"
                      >
                      <TelegramIcon size={50} round />
                      </TelegramShareButton>

                  </div>
                <div className="container ">
                  <h6 className="ml-2"> OR Copy Link </h6>
                  </div>

                  <div  className="container d-flex justify-content-center mb-4">
                      <input type="text" value="" class="field left" readonly disabled></input>
                      <CopyToClipboard text=" niqqaroo ">
                          <span  title="Copy link" className="copy-link"><i class="far fa-copy"></i></span>
                      </CopyToClipboard>
                  </div>
                  
                  </div>
              </div>
              </div>

        </div>
      );
    } 
  }
  
  export default AccountSettings;
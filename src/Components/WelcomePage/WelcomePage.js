import React from 'react';
import "./WelcomePage.css"

class WelcomePage extends React.Component {
        
    render() {
      return (
      <div className="welcome-page">
        <nav className="navbar navbar-light bg-light static-top">
            <div className="container">
                <img style={{width:"90px"}} src={require("../../Images/logo-removebg.png")}/>
                <a className="btn btn-primary" href="/Login">Login</a>
            </div>
        </nav>

        <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-start">
                    <div className="col-xl-6">
                        <div className="text-center text-white">

                            <h1 style={{color:"#3C3D41"}} className="mb-2">Online Software For Your Clinic</h1>
                            <div style={{color:"#3C3D41"}} className="mb-4">
                              Pocket-Care Clinic Information Management System platform helps
                              deliver superior healthcare delivery for private clinics.
                            </div>
                              <div style={{maxWidth:"150px",marginLeft: "auto" ,marginRight: "auto"}} className="row">
                                <a href="#ContactUs" type="button" class="btn btn-outline-success justify-content-center">Request Demo</a>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex justify-content-center"><i class="fas fa-qrcode"></i></div>
                            <h3>QR code</h3>
                            <p style={{fontSize:"15px"}} className="lead mb-0">Let your patients connect to your Clinic with only scaning your QR code with a Worry-free, mistake-proof and time saving way to connect to your patients</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex justify-content-center"><i class="fas fa-book-medical"></i></div>
                            <h3>Patient Records</h3>
                            <p style={{fontSize:"15px"}} className="lead mb-0">Keep a track of your patient visits & history easily and digitally, makes it easier than ever for users to be engaged in their health with ways to visualize, securely store, and share their health data</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex justify-content-center"><i class="fas fa-prescription-bottle"></i></div>
                            <h3>E-Prescription</h3>
                            <p style={{fontSize:"15px"}} className="lead mb-0">A powerful but simple e-prescription (EMR) will allow you to prescribe and share medications and advise, Printed prescriptions for easy understanding</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="showcase">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" > <img style={{width:"720px",marginBottom:"100px",marginTop:"100px"}} src={require("../../Images/Dashboard.PNG")}></img> </div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Easy Access to Everything</h2>
                        <p className="lead mb-0">Easy Access to Everything via simple yet organized UI built with the help of multiple Doctors to ensure the best experience for every doctor in the application</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 text-white showcase-img" > <img style={{width:"720px",marginBottom:"100px"}} src={require("../../Images/PatientData.PNG")}></img> </div>
                    <div className="col-lg-6 my-auto showcase-text">
                        <h2>Patient Records (EMR) </h2>
                        <p className="lead mb-0">Keep a track of your patient visits & history easily and digitally, with Access to every prescription he/she had in the application</p>
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" > <img style={{width:"720px",marginBottom:"100px"}} src={require("../../Images/prescription.png")}></img> </div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Prescription Templates</h2>
                        <p className="lead mb-0">Easy to Use & Customize prescription template for each doctor to have a Worry-free, mistake-proof and time saving way to add e-prescriotion to your patients</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="https://www.nicepng.com/png/detail/867-8678512_doctor-icon-physician.png" alt="..." />
                            <h5>mark wagdy.</h5>
                            <p className="font-weight-light mb-0">"Very innovative idea. I like the implementation very much. Did you think of integration with EMR and EHR worldwide?"</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="https://www.nicepng.com/png/detail/867-8678512_doctor-icon-physician.png" alt="..." />
                            <h5>Samia gabal.</h5>
                            <p className="font-weight-light mb-0">"Good Idea, if the patient data is only written by another doctor and not by patient himself"</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="https://www.nicepng.com/png/detail/867-8678512_doctor-icon-physician.png" alt="..." />
                            <h5>Walied Aly Elbaz.</h5>
                            <p className="font-weight-light mb-0">"Very innovative and potentially time-saving application."</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section id="ContactUs">
        <div class="container-fluid">
            <div class="container p-5">
            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4">
                <div class="card h-100 shadow-lg">
                    <div class="card-body">
                    <div class="text-center p-3">
                        <h5 class="card-title">One Month</h5>
                        <span class="h2">250 EGP</span>
                    </div>
                    <p class="card-text">Get access To all Of our features for a month, with constant updates and technical support anywhere anytime</p>
                    </div>
                </div>
                </div>
                <div class="col-lg-4 col-md-12 mb-4">
                <div class="card h-100 shadow-lg">
                    <div class="card-body">
                    <div class="text-center p-3">
                        <h5 class="card-title">Six Months</h5>                        
                        <span class="h2">1250 EGP</span> 
                    </div>
                    <p class="card-text">Get access To all Of our features for a month, with constant updates and technical support anywhere anytime</p>
                    </div>
                </div>
                </div>
                <div class="col-lg-4 col-md-12 mb-4">
                <div class="card h-100 shadow-lg">
                    <div class="card-body">
                    <div class="text-center p-3">
                        <h5 class="card-title">One Year</h5>
                        <span class="h2">2000 EGP</span>
                    </div>
                    <p class="card-text">Get access To all Of our features for a month, with constant updates and technical support anywhere anytime</p>
                    </div>
                </div>
                </div>
            </div>    
            </div>
            </div>
        </section>

        <section className="call-to-action text-white text-center" >
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <h2 className="mb-4">Ready to get started? Contact us Now!</h2>
                        <div className="row mt-2">
                            <div className="col">
                                <input className="form-control form-control-lg"  type="text" placeholder="Name"/>
                            </div>
                            
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <input className="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address"/>
                            </div>
                            
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <input className="form-control form-control-lg" type="Text" placeholder="Mobile Number" />
                            </div>
                        </div>
                        <a style={{minWidth:"150px"}} className="btn btn-primary mt-3" href="">Send</a>
                    </div>
                </div>
            </div>
        </section>
        
      </div>
      );
    }
  }
export default WelcomePage;
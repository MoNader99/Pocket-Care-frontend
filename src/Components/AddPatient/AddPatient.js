import React from 'react';
import './AddPatient.css';
import TagsInput from "../TagsComponent/TagsComponent"

class AddPatient extends React.Component {


    selectedTags = tags => {
      
    };

    // onChange ={this.FirstNameHandler}
    FirstNameHandler=(event)=>{
      let FirstName= event.target.value;
      console.log(FirstName)
    }

    render(){
      return (
        <div className ="add-patient">
          <div className="row justify-content-start">
            <div className="col-12 d-flex align-items-start justify-content-start flex-column">
              <div className="border rounded w-100">
                  <div className="container-fluid border rounded d-flex align-items-center justify-content-start"  style={{backgroundColor:"#F5F5F5",height:"40px",fontSize: '20px',fontWeight: '700',color: '#00318B'}}> Basic Info </div>
                  
                  <div className="row px-4 py-1">
                    <div className='col-4'>
                      <div className="form-group">
                        <label  className="d-flex">First Name:</label>
                        <input autocomplete="off" type="text" className="form-control" id="FirstName"  placeholder="Ex: Mohammed"/>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className="form-group">
                        <label  className="d-flex">Last Name:</label>
                        <input autocomplete="off" type="text" className="form-control" id="LastName" placeholder="Ex: Nader"/>
                      </div>
                    </div>
                    <div className='col-4'>
                    <div className="form-group" >
                        <label className="d-flex">Country:</label>
                        <select class="form-control" id="Country">
                          <option>Egypt</option>
                          <option>Saudi Arabia</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row px-4">
                    <div className='col-4'>
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
                          <label class="form-check-label">
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
                    <div className='col-4'>
                      <div className="form-group">
                        <label  className="d-flex">Birth Date:</label>
                        <input type="date" className="form-control" id="Birth Date"  min="1990-01-01" max="2023-12-31"/>
                      </div>
                    </div>
                    <div className='col-4'>
                    <div className="form-group" >
                        <label  className="d-flex">City:</label>
                        <select class="form-control" id="City">
                          <option>Cairo</option>
                          <option>Giza</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row px-4">
                    <div className='col-4'>
                      <div className="row">
                      <div className="col-5 ">
                        <div className="form-group" >
                          <label  className="d-flex">Blood Group:</label>
                          <select class="form-control" id="BloodGroup">
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>O+</option>
                            <option>O-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>None</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-7">
                      <div className="form-group">
                        <label  className="d-flex">Weight:</label>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">KG</div>
                          </div>
                          <input type="number" class="form-control" id="Weight" placeholder="98"/>
                        </div>
                      </div>
                      </div>
                      </div>
                    </div>
                    <div className='col-4'>
                    <div className="row">
                      <div className="col-7 ">
                      <div className="form-group ">
                      <label  className="d-flex">Height:</label>
                        <div class="input-group mb-2">
                          <div class="input-group-prepend">
                            <div class="input-group-text">CM</div>
                          </div>
                          <input type="number" class="form-control" id="Height" placeholder="98"/>
                        </div>
                      </div>
                      </div>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className="form-group" >
                        <label  className="d-flex">Locality:</label>
                        <select class="form-control" id="Locality">
                          <option>Maadi</option>
                          <option>New Cairo</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row px-4">
                    <div className='col-4'>
                      <div className="form-group">
                        <label  className="d-flex">Mobile Number:</label>
                        <input autocomplete="off" type="text" className="form-control" id="MobileNumber" placeholder="Ex: 01552099261"/>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className="form-group">
                        <label  className="d-flex">Email Address:</label>
                        <input autocomplete="off" type="email" className="form-control" id="Email" placeholder="Ex: mnader93@yahoo.com"/>
                      </div>
                    </div>
                    <div className='col-4'>
                      <div className="form-group" >
                      <div className="form-group">
                        <label  className="d-flex">Address:</label>
                        <input autocomplete="off" type="text" className="form-control" id="Address" placeholder="Ex: Villa 144 - AL Narges 4 - 5th Settlement - New Cairo - Cairo"/>
                      </div>
                      </div>
                    </div>
                  </div>

              </div>
           </div>
          </div>


          <div className="row justify-content-start mt-3">
            <div className="col-12 d-flex align-items-start justify-content-start flex-column">
              <div className="border rounded w-100">
                  <div className="container-fluid border rounded d-flex align-items-center justify-content-start" style={{backgroundColor:"#F5F5F5",height:"40px",fontSize: '20px',fontWeight: '700',color: '#00318B'}}> Medical History </div>
                  <div className="row px-4 py-1 mt-2 d-flex align-items-center justify-content-start">
                    <div className="col-2" style={{fontWeight:"600"}}>Chronic Diseases</div>
                    <div className="col-10">
                      <div class="form-group">
                        <TagsInput selectedTags={this.selectedTags}  tags={[]} select = {false}/>
                      </div>
                    </div>
                  </div>
                  <div className="row px-4 d-flex align-items-center justify-content-start">
                    <div className="col-2" style={{fontWeight:"600"}}>Chronic Medications</div>
                    <div className="col-10">
                      <div class="form-group">
                        <TagsInput selectedTags={this.selectedTags}  tags={[]} select = {false}/>
                      </div>
                    </div>
                  </div>
                  <div className="row px-4 py-1 d-flex align-items-center justify-content-start">
                    <div className="col-2" style={{fontWeight:"600"}}>Past Surgeries</div>
                    <div className="col-10">
                      <div class="form-group">
                        <TagsInput selectedTags={this.selectedTags}  tags={[]} select = {false}/>
                      </div>
                    </div>
                  </div>
                  <div className="row px-4 py-1 d-flex align-items-center justify-content-start">
                    <div className="col-2" style={{fontWeight:"600"}}>Allergies</div>
                    <div className="col-10">
                      <div class="form-group">
                        <TagsInput selectedTags={this.selectedTags}  tags={[]} select = {false}/>
                      </div>
                    </div>
                  </div>
                  <div className="row px-4 py-1 d-flex align-items-center justify-content-start">
                    <div className="col-2" style={{fontWeight:"600"}}>Family history / other</div>
                    <div className="col-10">
                      <div class="form-group">
                        <TagsInput selectedTags={this.selectedTags}  tags={[]} select = {false}/>
                      </div>
                    </div>
                  </div>
              </div>
           </div>
          </div>

          <div className="row justify-content-start mt-3">
            <div className="col-12 d-flex align-items-start justify-content-start flex-column">
              <div className="border rounded w-100">
                  <div className="container-fluid border rounded d-flex align-items-center justify-content-start" style={{backgroundColor:"#F5F5F5",height:"40px",fontSize: '20px',fontWeight: '700',color: '#00318B'}}> Life Style </div>
                  <div className="row px-4 py-2 d-flex align-items-center justify-content-start">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <div className='col-3' style={{fontWeight:"600"}}>
                      Smoking Habits:
                      </div>
                      <div className="col-9">
                        <div class="switch-field">
                          <input type="radio" id="radio-one" name="switch-one" value="yes"/>
                          <label>Not a Smoker</label>
                          <input type="radio" id="radio-two" name="switch-one" value="maybe" />
                          <label >Light Smoker</label>
                          <input type="radio" id="radio-three" name="switch-one" value="no" />
                          <label >Moderate Smoker</label>
                          <input type="radio" id="radio-four" name="switch-one" value="no" />
                          <label >Heavy Smoker</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-center">
                    <div className='col-3' style={{fontWeight:"600"}}>
                      Activity Level:
                      </div>
                      <div className="col-10 ">
                        <div class="switch-field">
                          <input type="radio" id="radio-five" name="switch-two" value="yes"/>
                          <label>Light Workout</label>
                          <input type="radio" id="radio-six" name="switch-two" value="maybe" />
                          <label >Moderate Workout</label>
                          <input type="radio" id="radio-seven" name="switch-two" value="no" />
                          <label >Heavy Workout</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row px-4 py-2 d-flex align-items-center justify-content-start">
                    <div className="col-6 d-flex align-items-center justify-content-center">
                      <div className='col-3' style={{fontWeight:"600"}}>
                      Alcohol consumption:
                      </div>
                      <div className="col-9 ">
                        <div class="switch-field">
                          <input type="radio" id="radio-eight" name="switch-three" value="yes" />
                          <label >Not an Alcoholic</label>
                          <input type="radio" id="radio-nine" name="switch-three" value="maybe" />
                          <label >Light Alcoholic</label>
                          <input type="radio" id="radio-ten" name="switch-three" value="no" />
                          <label>Moderate Alcoholic</label>
                          <input type="radio" id="radio-eleven" name="switch-three" value="no" />
                          <label >Heavy Alcoholic</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 ">
                    <div className="form-group">
                        <label  className="d-flex" style={{fontWeight:"600"}}>Occupation:</label>
                        <input autocomplete="off" type="text" className="form-control" id="Occupation" placeholder="Ex: Software Engineer"/>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
          </div>

          <div className="d-flex align-items-center justify-content-end mt-3"><button className="btn btn-primary btn-lg">Add patient</button></div>
        </div>
      );
    } 
  }
  
  export default AddPatient;
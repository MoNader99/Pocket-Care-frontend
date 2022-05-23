import React from 'react';
import './PatientListPage.css';
import { Link } from 'react-router-dom';

class PatientListPage extends React.Component {
  componentDidMount(){
    this.setState({
      startIndex: 0,
      EndIndex:5,
    });
    var url = "http://localhost:3000/connection/626712ae151a84b9a5774442"; 
    const requestOptions = {
      method: 'GET',
      // headers: {'Content-Type': 'application/json' },
      // body:JSON.stringify({ doctorId: "62670bffc0be9f9f433f16c9" })
    };
    fetch(url,requestOptions)
      .then((response) => { return response.json() })
      .then((data) => {
        // console.log(data)
        this.setState({ 
          PatientInfo: data
        });
        
      })
      .catch((error)=>{console.log(error);})
    }

    constructor() {
      super();
    }
    state=
     
      { 
      pageNumber:1,
      startIndex:0,
      EndIndex:0,
      PatientInfo: [
      ],
      PatinetImageMale : "https://i.ibb.co/kh3HbC8/man.png",
      PatinetImageFemale : "https://i.ibb.co/w4w0pPW/woman.png"
      }

    getDayName(date = new Date(), locale = 'en-US') {
      return date.toLocaleDateString(locale, {weekday: 'long'});
    }

    Next=(event)=>{
      let x = this.state.startIndex
      let y = this.state.EndIndex
      if (this.state.PatientInfo.length - y >= 5 ){
        y = y+5
        x = x+5
        this.setState({
          pageNumber:this.state.pageNumber+1
        });
      }
      else if(y === this.state.PatientInfo.length){
        
      }
      else{
        x = x+5
        y = y + (this.state.PatientInfo.length - y)
        this.setState({
          pageNumber:this.state.pageNumber+1
        });
      }
  
      this.setState({
        startIndex: x,
        EndIndex: y,
      });
    }
  
    Prev=(event)=>{
      let x = this.state.startIndex
      let y = this.state.EndIndex
      if(y===this.state.PatientInfo.length && y!==5){
        y = x
        x = x-5
        this.setState({
          pageNumber:this.state.pageNumber-1
        });
      }
      else if(x===0){
  
      }
      else{
        y = y-5
        x = x-5
        this.setState({
          pageNumber:this.state.pageNumber-1
        });
      }
      this.setState({
        startIndex: x,
        EndIndex: y,
      });
    }

    render(){
      return (
        <div className ="patient-list-page">

          <div className="row justify-content-between header">
            <div style={{fontSize: '20px',fontWeight: '700',color: '#00318B'}}>Patients List</div>
            <div><Link to="/DoctorPortal/AddPatient"><button type="button" className="btn btn-success">Add New Patient <i className="fas fa-plus-circle"></i></button></Link></div>
          </div>

          <div className="row justify-content-start" style={{marginTop:"30px"}}>
            <div className="col-8 d-flex align-items-center justify-content-start">
              <div className="input-group">
                <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" className="btn btn-outline-success" style={{marginLeft:"10px"}}>Search <i className="fas fa-search"></i></button>
              </div>
            </div>
            <div className="col-4 d-flex align-items-center" style={{fontSize: '20px',fontWeight: '500',color: '#00318B'}}>Filters</div>
          </div>
          <div className="row justify-content-start" style={{marginTop:"15px"}}>
            <div className="col-8 d-flex align-items-start justify-content-start border-right flex-column">
              <div className="border rounded w-100">
                  <div className="container-fluid border rounded d-flex align-items-center justify-content-end" style={{backgroundColor:"#DCDCDC",height:"40px"}}> Total number of patients: 365 </div>
              </div>
              <div className="container border rounded ">

              {this.state.PatientInfo.slice(this.state.startIndex, this.state.EndIndex).map((Patient,index)=>(
                <div key={index} className="p-2 border rounded d-flex align-items-center justify-content-around" style={{marginTop:"10px",marginBottom:"10px"}}>
                <img src={Patient.Gender==='Male' ? this.state.PatinetImageMale : this.state.PatinetImageFemale} className="avatar" alt="Avatar"/>
                <div className="col-4 basic-info">
                  <div className="patient-name d-flex align-items-center justify-content-start"style={{fontSize:"20px",fontWeight:"700",color:"#0046BD"}}>{Patient.FirstName + " " + Patient.LastName}</div>
                  <div className="patient-phone d-flex align-items-center justify-content-start"style={{fontSize:"10px",fontWeight:"600"}}><i className="fas fa-phone-alt" style={{marginRight:"5px"}}></i> {Patient.MobileNumber}</div>
                  <div className="patient-email d-flex align-items-center justify-content-start"style={{fontSize:"10px",fontWeight:"600"}}><i className="far fa-envelope" style={{marginRight:"5px"}}></i> {Patient.Email}</div>
                </div>
                <div className="appointment-info">
                  <div className="row ">
                    <div className='col d-flex align-items-start justify-content-start' style={{fontSize:"12px",fontWeight:"600"}}>Age</div>
                    <div className=' d-flex align-items-center justify-content-end' style={{fontSize:"10px"}}>{Patient.Age} years old ({Patient.BirthDate.split("T")[0]})</div>
                  </div>
                  <div className="row ">
                    <div className='col d-flex align-items-start justify-content-start' style={{fontSize:"12px",fontWeight:"600"}}>Last appointment</div>
                    <div className=' d-flex align-items-center justify-content-end' style={{fontSize:"10px"}}>{this.getDayName(new Date(Patient.AppointmentDate.split("T")[0])) + " - " + Patient.AppointmentDate.split("T")[0]} </div>
                  </div>
                  <div className="row ">
                    <div className='col d-flex align-items-start justify-content-start' style={{fontSize:"12px",fontWeight:"600"}}>Follow up date</div>
                    <div className=' d-flex align-items-center justify-content-end' style={{fontSize:"10px"}}>{this.getDayName(new Date(Patient.FollowUpDate.split("T")[0])) + " - " + Patient.FollowUpDate.split("T")[0]} </div>
                  </div>
                </div>
                <div className="more-info">
                  <Link to="/DoctorPortal/PatientDetails" style={{fontSize:"12px",fontWeight:"bold",color:"#00318B"}}>More Details</Link>
                </div>
                <div className="more-info">
                  <i className="fas fa-comment-alt fa-2x" style={{color:"#727175"}}></i>
                </div>
              </div>
              ))}

              <div className="d-flex align-items-center justify-content-end">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item"><Link style={{backgroundColor:'#DCDCDC', color:"black",fontWeight:"500"}} className="page-link" onClick={(event)=>this.Prev(event)} href="#">Previous</Link></li>
                  <li className="page-item"><div className="container border h-100 d-flex align-items-center">{this.state.pageNumber}</div></li>
                  <li className="page-item"><Link style={{backgroundColor:'#DCDCDC', color:"black",fontWeight:"500"}} className="page-link" onClick={(event)=>this.Next(event)}  href="#">Next</Link></li>
                </ul>
              </nav>
              </div>
              </div>
              
            </div>


            <div className="col-4  border-left filters ">
            <div className="d-flex align-items-center justify-content-start flex-column">
              <button type="button" className="btn btn-secondary w-50" style={{marginTop:"10px"}}>Today's Patients</button>
              <button type="button" className="btn btn-secondary w-50" style={{marginTop:"10px"}}>Near Follow-up Patients</button>
              <button type="button" className="btn btn-secondary w-50" style={{marginTop:"10px"}}>Recent chats patients</button>
              <form className="w-100">
              <div className="form-group">
                <label  className="d-flex mt-4">Last appointment date:</label>
                <input type="date" className="form-control" id="LastAppointmentDate" min="2022-01-01" max="2030-12-31"/>
              </div>
              <div className="form-group">
                <label className="d-flex mt-4">Follow-up date:</label>
                <input type="date" className="form-control" id="FollowUpDate" min="2022-01-01" max="2030-12-31"/>
              </div>
              <div className="d-flex align-items-center justify-content-end "><button type="submit" className="btn btn-success">Apply</button></div>
            </form>
            </div>
            </div>
          </div>

        </div>
      );
    } 
  }
  
  export default PatientListPage;
import React from 'react';
import './PatientListPage.css';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {BASEURL} from '../../Containers/baseurl/baseurl';

class PatientListPage extends React.Component {
  componentDidMount(){
    this.setState({
      startIndex: 0,
      EndIndex:5,
    });
    }
    componentWillMount(){
      this.GetPatients()
    }

    GetPatients(){
      var url = BASEURL+ "/connection/" + this.props.DoctorID; 
      const requestOptions = {
          method: 'GET',
        };
      fetch(url,requestOptions)
      .then((response) => { return response.json()})
      .then((data) => {
        console.log(data)
        this.setState({
          PatientInfo:data
        });
        this.GetTotalPatients()
      })
      .catch((error)=>{console.log(error);
      })
    }

    filterTodayPatients(){
      var url = BASEURL+ "/connection/today/" + this.props.DoctorID; 
      const requestOptions = {
          method: 'GET',
        };
      fetch(url,requestOptions)
      .then((response) => { return response.json()})
      .then((data) => {
        console.log(data)
        this.setState({
          PatientInfo:data
        });
        this.GetTotalPatients()
      })
      .catch((error)=>{console.log(error);
      })
    }


    filterFollowUpPatients(){
      var url = BASEURL+ "/connection/lastdays/" + this.props.DoctorID; 
      const requestOptions = {
          method: 'GET',
        };
      fetch(url,requestOptions)
      .then((response) => { return response.json()})
      .then((data) => {
        console.log(data)
        this.setState({
          PatientInfo:data
        });
        this.GetTotalPatients()
      })
      .catch((error)=>{console.log(error);
      })
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
                <i class="fas fa-comment-alt fa-2x" onClick={(event)=>window.location.replace("/DoctorPortal/Chat")} style={{color:"#727175",cursor:"pointer"}}></i>
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
              <button onClick={(event)=>this.filterTodayPatients()} type="button" className="btn btn-secondary w-50" style={{marginTop:"10px"}}>Today's Patients</button>
              <button onClick={(event)=>this.filterFollowUpPatients()} type="button" className="btn btn-secondary w-50" style={{marginTop:"10px"}}>Near Follow-up Patients</button>
              <button onClick={(event)=>this.GetPatients()} type="button" className="btn btn-secondary w-50" style={{marginTop:"10px"}}>All patients</button>
            </div>
            </div>
          </div>
        </div>
      );
    } 
  }
  const mapStateToProps = state =>{
    return{
      DoctorData:state.DoctorData,
      DoctorID:state.DoctorID
    };
  };

  export default connect(mapStateToProps, null)(PatientListPage);
import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  state= 
  {
  pageNumber:1, 
  startIndex:0,
  EndIndex:0,
  PatientInfo: [
    {PatinetImage : "https://i.ibb.co/kh3HbC8/man.png", PatientName : "Mohammed Nader", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/w4w0pPW/woman.png", PatientName : "Hoda Hossam", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/kh3HbC8/man.png", PatientName : "Ahmad Mostafa", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/w4w0pPW/woman.png", PatientName : "Layla sliem", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/kh3HbC8/man.png", PatientName : "Ahmad Sameh", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/w4w0pPW/woman.png", PatientName : "doaa abdelsalam", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/w4w0pPW/woman.png", PatientName : "Nouran Nader", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/kh3HbC8/man.png", PatientName : "Ahmad El-dib", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/w4w0pPW/woman.png", PatientName : "Hoda Hossam", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/kh3HbC8/man.png", PatientName : "shaker hany", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/w4w0pPW/woman.png", PatientName : "Hoda Hossam   ", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/w4w0pPW/woman.png", PatientName : "Hoda Hossam", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/kh3HbC8/man.png", PatientName : "Mohammed Nader", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/w4w0pPW/woman.png", PatientName : "Rahma Ahmad   ", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/w4w0pPW/woman.png", PatientName : "Hoda Hossam   ", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    {PatinetImage : "https://i.ibb.co/kh3HbC8/man.png", PatientName : "Mohammed Nader", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
  ],

  RemindersToday:[
    {Name:"Mohammed Nader",Id:""},
    {Name:"Ahmad Mostafa",Id:""},
    {Name:"Hoda Hossam",Id:""}

  ],

  RemindersTomorow:[
    {Name:"Khaled Ali",Id:""},
    {Name:"Ali Helmy",Id:""}
  ],

  RemindersThisWeek:[
    {Name:"Salma Magdy",Date:"Tuesday - 22/03/2022",Id:""},
    {Name:"Doaa Abdelslam",Date:"Monday - 26/03/2022",Id:""},
  ]

  }

  componentDidMount(){
    this.setState({
      startIndex: 0,
      EndIndex:5,
    });
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
    if(y===this.state.PatientInfo.length && y!==5 ){
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
        <div className ="dashboard">

          <div className="row justify-content-start">
            <div className="col-2 " style={{fontSize:"40px",fontWeight:"600"}}>Welcome</div>
            <div className="col-4 d-flex align-items-end justify-content-start">
              <div style={{fontSize: '25px',fontWeight: '700' ,color: '#00318B'}}>Dr.</div>
              <div style={{marginLeft: '5px',fontSize: '25px',fontWeight: '600',color: '#00318B'}}>Mohammed Nader</div>
            </div>
          </div>

          <div className="row justify-content-start" style={{marginTop:'20px'}}>
            <div className="col-3 Box" style={{backgroundColor:'#27A9E3'}}>
              <div className="container row justify-content-between"> <div className="d-flex align-items-center">Total Patients</div> <div style={{display:'grid',fontWeight:"100"}}><i class="fas fa-user fa-2x"></i> 365 </div></div>
              </div>
            <div className="col-3 Box" style={{backgroundColor:'#28B779'}}>
            <div className="container row justify-content-between"> <div className="d-flex align-items-center">Today's Patients</div> <div style={{display:'grid',fontWeight:"100"}}><i class="fas fa-user fa-2x"></i> 365 </div></div>
              </div>
          </div>

          <div className="row justify-content-between" style={{marginTop:'20px'}}>
              <div style={{flexDirection:"column"}} className="col-8 todays-patients d-flex align-items-start ">
                <div className="container-fluid border rounded d-flex align-items-center justify-content-start"  style={{backgroundColor:"#F5F5F5",height:"40px",fontSize: '20px',fontWeight: '700',color: '#00318B'}}> Today's Patients </div>
              <div className="container border rounded ">
                {this.state.PatientInfo.slice(this.state.startIndex, this.state.EndIndex).map((Patient,index)=>(
                  <div key={index} className="p-2 border rounded d-flex align-items-center justify-content-around" style={{marginTop:"10px",marginBottom:"10px"}}>
                  <img src={Patient.PatinetImage} className="avatar" alt="Avatar"/>
                  <div className="col-4 basic-info">
                    <div className="patient-name d-flex align-items-center justify-content-start"style={{fontSize:"20px",fontWeight:"700",color:"#0046BD"}}>{Patient.PatientName}</div>
                    <div className="patient-phone d-flex align-items-center justify-content-start"style={{fontSize:"10px",fontWeight:"600"}}><i class="fas fa-phone-alt" style={{marginRight:"5px"}}></i> {Patient.PhoneNumber}</div>
                    <div className="patient-email d-flex align-items-center justify-content-start"style={{fontSize:"10px",fontWeight:"600"}}><i class="far fa-envelope" style={{marginRight:"5px"}}></i> {Patient.Email}</div>
                  </div>
                  <div className="appointment-info">
                    <div className="row ">
                      <div className='col d-flex align-items-start justify-content-start' style={{fontSize:"12px",fontWeight:"600"}}>Age</div>
                      <div className=' d-flex align-items-center justify-content-end' style={{fontSize:"10px"}}>{Patient.Age} years old ({Patient.DateOfBirth})</div>
                    </div>
                    <div className="row ">
                      <div className='col d-flex align-items-start justify-content-start' style={{fontSize:"12px",fontWeight:"600"}}>Last appointment</div>
                      <div className=' d-flex align-items-center justify-content-end' style={{fontSize:"10px"}}>{Patient.LastAppointment} </div>
                    </div>
                    <div className="row ">
                      <div className='col d-flex align-items-start justify-content-start' style={{fontSize:"12px",fontWeight:"600"}}>Follow up date</div>
                      <div className=' d-flex align-items-center justify-content-end' style={{fontSize:"10px"}}>{Patient.FollowUp} </div>
                    </div>
                  </div>
                  <div className="more-info">
                  <Link to="/DoctorPortal/PatientDetails" style={{fontSize:"12px",fontWeight:"bold",color:"#00318B"}}>More Details</Link>
                  </div>
                  <div className="more-info">
                    <i class="fas fa-comment-alt fa-2x" style={{color:"#727175"}}></i>
                  </div>
                </div>
                ))}

                <div className="d-flex align-items-center justify-content-end">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item"><Link style={{backgroundColor:'#DCDCDC', color:"black",fontWeight:"500"}} onClick={(event)=>this.Prev(event)} className="page-link" href="#">Previous</Link></li>
                    <li className="page-item"><div className="container border h-100 d-flex align-items-center">{this.state.pageNumber}</div></li>
                    <li className="page-item"><Link style={{backgroundColor:'#DCDCDC', color:"black",fontWeight:"500"}} onClick={(event)=>this.Next(event)} className="page-link" pathname="#">Next</Link></li>
                  </ul>
                </nav>
                </div>
                </div>
              </div>
              <div  className="col-4 reminders d-flex align-items-start " >
                  <div className="row justify-content-start">
                      <div style={{minWidth: "430px"}} className="border rounded w-100">
                          <div className="container-fluid border rounded d-flex align-items-center "  style={{backgroundColor:"#F5F5F5",height:"40px",fontSize: '20px',fontWeight: '700',color: '#00318B'}}> Reminders </div>
                          
                          <div style={{fontSize:"20px",fontWeight:"700"}} className="d-flex pl-3 ">
                            Today
                          </div>
                          {this.state.RemindersToday.map((reminder,index)=>(
                          <div key= {index} className="mt-2 px-2">
                            <div style={{borderLeft: "rgb(219 2 0) solid 2.5px",boxShadow: "1px 0px 5px -1px #909090"}} >
                              <div className="row">
                                <div className="col-2 d-flex align-items-center justify-content-center">
                                  <i style={{fontSize:"30px",color:"#898989"}} class="fas fa-user-injured"></i> 
                                </div>
                                <div className="col-8 p-2">
                                    <div style={{fontSize:"15px",fontWeight:"600",color:"#006312"}} className="row">{reminder.Name}</div>
                                    <div style={{fontSize:"14px"}} className="row">Has a scheduled follow up today </div>
                                </div>
                                <div className="col-2 d-flex align-items-center justify-content-center">
                                    <i style={{cursor:"pointer"}} class="fas fa-chevron-right"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          ))}

                          <div style={{fontSize:"20px",fontWeight:"700"}} className="d-flex pl-3 ">
                            Tomorrow
                          </div>
                          
                          {this.state.RemindersTomorow.map((reminder,index)=>(
                          <div className="mt-2 px-2">
                            <div style={{borderLeft: "rgb(234 218 0) solid 2.5px",boxShadow: "1px 0px 5px -1px #909090"}} >
                            <div className="row">
                                <div className="col-2 d-flex align-items-center justify-content-center">
                                  <i style={{fontSize:"30px",color:"#898989"}} class="fas fa-user-injured"></i> 
                                </div>
                                <div className="col-8 p-2">
                                    <div style={{fontSize:"15px",fontWeight:"600",color:"#006312"}} className="row">{reminder.Name}</div>
                                    <div style={{fontSize:"14px"}} className="row">Has a scheduled follow up today </div>
                                </div>
                                <div className="col-2 d-flex align-items-center justify-content-center">
                                    <i style={{cursor:"pointer"}} class="fas fa-chevron-right"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          ))}

                          <div style={{fontSize:"20px",fontWeight:"700"}} className="d-flex pl-3 ">
                            Later This Week
                          </div>
                          
                          {this.state.RemindersThisWeek.map((reminder,index)=>(
                          <div className="mt-2 px-2">
                            <div style={{borderLeft: "rgb(3 173 9) solid 2.5px",boxShadow: "1px 0px 5px -1px #909090"}} >
                            <div className="row">
                                <div className="col-2 d-flex align-items-center justify-content-center">
                                  <i style={{fontSize:"30px",color:"#898989"}} class="fas fa-user-injured"></i> 
                                </div>
                                <div className="col-8 p-2">
                                    <div style={{fontSize:"15px",fontWeight:"600",color:"#006312"}} className="row">{reminder.Name}</div>
                                    <div style={{fontSize:"14px"}} className="row">Has a follow up on {reminder.Date} </div>
                                </div>
                                <div className="col-2 d-flex align-items-center justify-content-center">
                                    <i style={{cursor:"pointer"}} class="fas fa-chevron-right"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          ))}

                      </div>
                  </div>

                  
              </div>
          </div>

        </div>
      );
    } 
  }
  
  export default Dashboard;
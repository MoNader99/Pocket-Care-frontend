import React from 'react';
import './MoreDetailsPage.css';
import { Link } from 'react-router-dom';
import TagsInput from "../TagsComponent/TagsComponent"
import GeneratePDF from "../PDF/PDF"


class MoreDetailsPage extends React.Component {

    state= 
  { 
    changeTabs:false,
    PastTreatments:"tab",
    SharedMedia:"tab-un-pressed",    
    EditPatientInfo:false,
    EditPatientMedicalProfile:false,
    PatientInfo: [
        {PatinetImage : "https://i.ibb.co/kh3HbC8/man.png", PatientName : "Mohammed Nader", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
        {PatinetImage : "https://i.ibb.co/w4w0pPW/woman.png", PatientName : "Hoda Hossam   ", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
        {PatinetImage : "https://i.ibb.co/kh3HbC8/man.png", PatientName : "Mohammed Nader", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
        {PatinetImage : "https://i.ibb.co/w4w0pPW/woman.png", PatientName : "Hoda Hossam", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
        {PatinetImage : "https://i.ibb.co/kh3HbC8/man.png", PatientName : "Mohammed Nader", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
        {PatinetImage : "https://i.ibb.co/w4w0pPW/woman.png", PatientName : "Hoda Hossam   ", PhoneNumber: "+201552099261",Email : "mnader93@yhoo.com", Age:"25", DateOfBirth:"28/07/1999" ,LastAppointment:"Tuesday - 15/03/2022" , FollowUp:"Tuesday - 22/03/2022"},
    ],
    drugs:[],
    Drugs_1: [
        {DrugName:"de7ka",Dosage:"1", Unit:"tablet",Frequancy:"every 6 hours",Instructions:"before food",Duration:"10-days"},
        {DrugName:"de7ka 2",Dosage:"2", Unit:"ml",Frequancy:"every 3 hours",Instructions:"after wake up",Duration:"2-days"},
        {DrugName:"de7ka 3",Dosage:"2", Unit:"ml",Frequancy:"every 12 hours",Instructions:"after food",Duration:"7-days"},
    ],
    Prescriptions: [
        {templateName : "covid-99",drugs:[{DrugName:"Asprin",Dosage:"1", Unit:"ml",Frequancy:"every 6 hours",Instructions:"before food",Duration:"10 days"},]},
        {templateName : "cold flu",drugs:[{DrugName:"hoho",Dosage:"1", Unit:"ml",Frequancy:"every 6 hours",Instructions:"before food",Duration:"10 days"},]},
        {templateName : "Romatezm",drugs:[{DrugName:"de7ko",Dosage:"1", Unit:"ml",Frequancy:"every 6 hours",Instructions:"before food",Duration:"10 days"},]},
    ],
    savedDrugs: [
        {DrugName:"de7ka",Dosage:"1", Unit:"tablet",Frequancy:"every 6 hours",Instructions:"before food",Duration:"10-days"},
        {DrugName:"de7ka 2",Dosage:"2", Unit:"ml",Frequancy:"every 3 hours",Instructions:"after wake up",Duration:"2-days"},
        {DrugName:"de7ka 3",Dosage:"2", Unit:"ml",Frequancy:"every 12 hours",Instructions:"after food",Duration:"7-days"},
    ],
    caseSheet: [
        {Date:"26 Nov '22",Speciality:"dermatology",Diagnosis:"whatever",Meds:"drug-1, drug-2, drug-3",},
        {Date:"22 Apr '22",Speciality:"dermatology",Diagnosis:"whatever-1",Meds:"drug-1, drug-2",},
        {Date:"24 jun '22",Speciality:"dermatology",Diagnosis:"whatever-2",Meds:"drug-1, drug-2",},
        {Date:"12 jan '22",Speciality:"dermatology",Diagnosis:"whatever-3",Meds:"drug-1",},
        {Date:"26 Nov '21",Speciality:"dermatology",Diagnosis:"whatever-4",Meds:"drug-1, drug-2, drug-3",},
        {Date:"24 jun '22",Speciality:"dermatology",Diagnosis:"whatever-2",Meds:"drug-1, drug-2",},
        {Date:"12 jan '22",Speciality:"dermatology",Diagnosis:"whatever-3",Meds:"drug-1",},
        {Date:"26 Nov '21",Speciality:"dermatology",Diagnosis:"whatever-4",Meds:"drug-1, drug-2, drug-3",},
        {Date:"26 Nov '22",Speciality:"dermatology",Diagnosis:"whatever",Meds:"drug-1, drug-2, drug-3",},
        {Date:"22 Apr '22",Speciality:"dermatology",Diagnosis:"whatever-1",Meds:"drug-1, drug-2",},
        {Date:"24 jun '22",Speciality:"dermatology",Diagnosis:"whatever-2",Meds:"drug-1, drug-2",},
        
    ],
    startIndex:0,
    EndIndex:0,
    pageNumber:1,

  }

  componentDidMount(){
    this.setState({
      startIndex: 0,
      EndIndex:8,
    });
  }

  changeValue=(event,str,index)=>{

    var array = [...this.state.drugs];
    if(str==="dosage"){
      array[index].Dosage=event.target.value
    }
    else if(str==="unit"){
      array[index].Unit=event.target.value
    }
    else if(str==="freq"){
      array[index].Frequancy=event.target.value
    }
    else if(str==="inst"){
      array[index].Instructions=event.target.value
    }
    else if(str==="duration"){
      array[index].Duration=event.target.value
    }
    this.setState({drugs: array});
    
  }

  Next=(event)=>{
    let x = this.state.startIndex
    let y = this.state.EndIndex
    if (this.state.caseSheet.length - y >= 8 ){
      y = y+8
      x = x+8
      this.setState({
        pageNumber:this.state.pageNumber+1
      });
    }
    else if(y === this.state.caseSheet.length){
      
    }
    else{
      x = x+8
      y = y + (this.state.caseSheet.length - y)
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
    if(y===this.state.caseSheet.length && y!==8){
      y = x
      x = x-8
      this.setState({
        pageNumber:this.state.pageNumber-1
      });
    }
    else if(x===0){

    }
    else{
      y = y-8
      x = x-8
      this.setState({
        pageNumber:this.state.pageNumber-1
      });
    }
    this.setState({
      startIndex: x,
      EndIndex: y,
    });
  }

  changeTab=(str)=>{ 
    if(str==="p"){
      this.setState({
        PastTreatments:"tab",
        SharedMedia:"tab-un-pressed",
        changeTabs:false
      });
    }
    else if(str==="s"){
      this.setState({
        SharedMedia:"tab",
        PastTreatments:"tab-un-pressed",
        changeTabs:true
      });
    }
  }

    selectedTags = tags => {
      
    };

    addDrug=(event)=>{
        if (event.target.value !== "") {
        this.setState({ 
            drugs: this.state.drugs.concat([{DrugName:event.target.value ,Dosage:"", Unit:"ml",Frequancy:"every 3 hours",Instructions:"",Duration:""}])
        })
        event.target.value = "";
        }
    }

    deleteDrug=(event,index)=>{
        var array = [...this.state.drugs]; // make a separate copy of the array
        if (index !== -1) {
        array.splice(index, 1);
        this.setState({drugs: array});
        }
    }

    getDayName(date = new Date(), locale = 'en-US') {
        return date.toLocaleDateString(locale, {weekday: 'long'});
    }

    AddTemplate=(event,index)=>{
        var array = this.state.Prescriptions[index].drugs
        this.setState({drugs: array});
    }

    AddSavedDrug=(event,index)=>{
        var array = [...this.state.drugs]
        array = array.concat(this.state.savedDrugs[index])
        this.setState({drugs: array});
    }

    addPDF=(event)=>{
        var param = {
            returnJsPDFDocObject: true,
            fileName: "MohmmedNader-Prescription.pdf",
            orientationLandscape: false,
            compress: true,
            logo: {
                src: "https://i.ibb.co/J32gBW0/logo-removebg.png",
                width: 34, //aspect ratio = width/height
                height: 32.2,
                margin: {
                    top: 0, //negative or positive num, from the current position
                    left: 0 //negative or positive num, from the current position
                }
            },
            business: {
                name: "Dr. Ahmad Nader",
                address: "بكالريوس جراحة عامة - طب القصر العيني",
                phone: "فيلا 144 - النرجس 4 - التجمع الخامس",
                email: "(+20) 01100737868",
                email_1: "AhmadNader97@Gmail.com",
                website: " ",
            },
            contact: {
                label: "Prescription issued for:",
                name: "Mohammed Nader",
                phone: "(+20) 01552099261 ",
                email: "mnader93@yahoo.com",
            },
            invoice: {
                headerBorder: false,
                tableBodyBorder: false,
                header: [
                  {
                    title: "#", 
                    style: { 
                      width: 10 
                    } 
                  }, 
                  { 
                    title: "DrugName",
                    style: {
                      width: 30
                    } 
                  }, 
                  { title: "Dosage",}, 
                  { title: "Unit"},
                  { title: "Frequancy" ,
                    style: {
                        width: 30
                    } 
                  },
                  { title: "instructions",
                  style: {
                    width: 50
                  } },
                  { title: "Duration",
                  style: {
                    width: 30
                  } }
                ],
                table:
                Array.from(this.state.drugs, (item, index)=>([
                    index + 1,
                    item.DrugName,
                    item.Dosage,
                    item.Unit +"\n",
                    item.Frequancy + "\n",
                    item.Instructions + "\n",
                    item.Duration + "\n"
                ])),
                invDescLabel: "Prescription Note",
                invDesc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.",
            },
            footer: {
                text: "The Prescription is created on a computer and is valid without the signature and stamp.",
            },
            pageEnable: true,
            pageLabel: "Page ",
        }
        if(this.state.drugs.length >=1){
            GeneratePDF(param)
        }
    }

    render(){
        return (
            <div className="more-details-page">
                <div className="row">
                    <div className="col-1 d-flex justify-content-start">
                    <img src="https://i.ibb.co/kh3HbC8/man.png" className="avatar" alt="Avatar"/>
                    </div>
                    {this.state.EditPatientInfo === false ?
                    <div style={{flexDirection: "column"}} className="col-8 d-flex justify-content-start">
                    <div className="row">
                        <div style={{fontSize: '20px',fontWeight: '700',color: '#00318B'}}>Mohammed Nader</div>
                        <div className="d-flex justify-content-end align-items-end" style={{marginLeft: '5px',fontSize: '12px',fontWeight: '300',color: 'black'}}>22 years old (28/7/1999)</div>
                    </div>
                    <div className="row mt-3">
                        <div  style={{flexDirection: "column"}} className="col-3 d-flex justify-content-between">
                            <div className="patient-phone d-flex align-items-center justify-content-start"style={{fontSize:"12px",fontWeight:"400"}}><i class="fas fa-phone-alt fa-bold" style={{marginRight:"8px"}}></i> (+20)1552099261</div>
                            <div className="patient-email d-flex align-items-end justify-content-start"style={{fontSize:"12px",fontWeight:"400"}}><i class="far fa-envelope fa-bold" style={{marginRight:"8px",fontSize:"15px"}}></i> mnader93@yahoo.com</div>
                        </div>
                        <div style={{flexDirection: "column"}} className="col-4 d-flex justify-content-between">
                            <div className="row ">
                                <div className='col d-flex align-items-start justify-content-start' style={{fontSize:"12px",fontWeight:"600"}}>Last appointment</div>
                                <div className=' d-flex align-items-center justify-content-end' style={{fontSize:"10px"}}>{this.getDayName(new Date('2022-05-04')) + " - " + "2022-05-04"}</div>
                            </div>
                            <div className="row ">
                                <div className='col d-flex align-items-start justify-content-start' style={{fontSize:"12px",fontWeight:"600"}}>Follow up date</div>
                                <div className=' d-flex align-items-center justify-content-end' style={{fontSize:"10px"}}>{this.getDayName(new Date('2022-05-12')) + " - " + "2022-05-12"}</div>
                            </div>
                        </div> 
                        <div style={{flexDirection: "column"}} className="ml-5 col-4 d-flex justify-content-end">
                            <div className="patient-phone d-flex align-items-center justify-content-end"style={{fontSize:"12px",fontWeight:"400",textAlign:"start"}}><i style={{marginRight:"8px"}} class="fas fa-map-marker-alt" ></i>Egypt - cairo - 5th settlement AL-Narges 4 , villa no. 144</div>
                        </div>
                    </div>
                    </div> 
                    :
                    <div style={{flexDirection: "column"}} className="col-8 d-flex justify-content-start">
                    <div className="row">
                        <div style={{fontSize: '20px',fontWeight: '700',color: '#00318B'}}>Mohammed Nader</div>
                        <div style={{margin:"0px 0px 0px 10px"}} className="form-group ">
                            <input style={{fontSize: "10px",maxWidth:"100px"}} autocomplete="off" type="number" className="form-control" id="Age" placeholder="Ex: 22 years"/>
                        </div>
                        <div style={{margin:"0px 0px 0px 10px"}} className="form-group ">
                            <input style={{fontSize: "10px"}} type="date" className="form-control" id="Birth Date"  min="1990-01-01" max="2023-12-31"/>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div  style={{flexDirection: "column"}} className="col-3 d-flex ">
                            <div style={{margin:"0px 0px 0px 0px"}} className="form-group">
                                <label style={{fontSize:"12px",fontWeight:"600"}} className="d-flex">Mobile Number:</label>
                                <input style={{fontSize: "10px"}} autocomplete="off" type="text" className="form-control" id="MobileNumber" placeholder="Ex: 01552099261"/>
                            </div>
                            <div style={{margin:"0px 0px 0px 0px"}} className="form-group">
                                <label style={{fontSize:"12px",fontWeight:"600"}} className="d-flex">Email Address:</label>
                                <input style={{fontSize: "10px"}} autocomplete="off" type="email" className="form-control" id="Email" placeholder="Ex: mnader93@yahoo.com"/>
                            </div>
                        </div>
                        <div style={{flexDirection: "column"}} className="col-4 d-flex justify-content-around">
                            <div className="row ">
                                <div className='col d-flex align-items-start justify-content-start' style={{fontSize:"12px",fontWeight:"600"}}>Last appointment</div>
                                <div className=' d-flex align-items-center justify-content-end' style={{fontSize:"10px"}}>{this.getDayName(new Date('2022-05-04')) + " - " + "2022-05-04"}</div>
                            </div>
                            <div className="row ">
                                <div className='col d-flex align-items-start justify-content-start' style={{fontSize:"12px",fontWeight:"600"}}>Follow up date</div>
                                <div className=' d-flex align-items-center justify-content-end' style={{fontSize:"10px"}}>{this.getDayName(new Date('2022-05-12')) + " - " + "2022-05-12"}</div>
                            </div>
                        </div> 
                        <div style={{flexDirection: "column"}} className="ml-5 col-4 d-flex justify-content-end">
                            <div style={{margin:"0px 0px 0px 0px"}} className="form-group" >
                                <select style={{fontSize: "10px"}} class="form-control" id="Country">
                                <option>Egypt</option>
                                <option>Saudi Arabia</option>
                                </select>
                            </div>
                            <div style={{margin:"5px 0px 0px 0px"}} className="form-group" >
                                <select style={{fontSize: "10px"}} class="form-control" id="City">
                                <option>Cairo</option>
                                <option>Giza</option>
                                </select>
                            </div>
                            <div style={{margin:"5px 0px 0px 0px"}} className="form-group" >
                                <select style={{fontSize: "10px"}} class="form-control" id="Locality">
                                <option>Maadi</option>
                                <option>New Cairo</option>
                                </select>
                            </div>
                            <div style={{margin:"5px 0px 0px 0px"}} className="form-group">
                                <input style={{fontSize: "10px"}} autocomplete="off" type="text" className="form-control" id="Address" placeholder="Ex: Villa 144 - AL Narges 4 - 5th Settlement - New Cairo - Cairo"/>
                            </div>
                        </div>
                    </div>
                    </div>
                    }
                    <div style={{flexDirection: "column"}} className="col-2 d-flex justify-content-center align-items-center">
                        {this.state.EditPatientInfo === false ?<div onClick={ (event) => this.setState({EditPatientInfo: true})} style={{color:"#0046BD",fontSize:"14px",cursor:"pointer"}}> Edit <i class="fas fa-pen"></i> </div> : <div onClick={ (event) => this.setState({EditPatientInfo: false})} style={{color:"#0046BD",fontSize:"14px",cursor:"pointer"}}> Save <i class="fas fa-save"></i> </div>}
                        <i class="fas fa-comment-alt fa-lg mt-2" style={{color:"#727175",cursor:"pointer"}}></i>
                        <button data-target="#Prescription" data-toggle="modal" style={{width:"170px"}} className="mt-2 btn btn-success">Add Prescription</button>
                    </div>
                </div>

                <div style={{margin: "0 50px 0 50px"}} className="mt-3 row border-bottom border-dark"></div>

                <div className="row mt-3">
                    <div className="col-8">
                        <div className="row justify-content-between header">
                            <div style={{fontSize: '20px',fontWeight: '700',color: '#00318B'}}>Casesheet</div>
                        </div>
                        <div className="tabs mt-2">
                            <div className="row container tab-bar">
                            <div onClick={()=>this.changeTab("p")} className={this.state.PastTreatments}>Past Treatments</div>
                            <div onClick={()=>this.changeTab("s")} className={this.state.SharedMedia} style={{marginLeft:'15px'}}>Shared Media</div>
                            </div>
                        </div>
                        <div className="container border rounded ">
                            
                            { !this.state.changeTabs ?
                            <div>
                            {this.state.caseSheet.slice(this.state.startIndex, this.state.EndIndex).map((Treatment,index)=>( 
                                <div>
                                <div  className="rounded d-flex align-items-center justify-content-start" style={{marginTop:"10px",marginBottom:"10px",padding:"0px 5px 0px 35px",minHeight:"70px",border:"1.5px solid #939393 "}}>
                                    <div style={{minWidth:"-webkit-fill-available"}} className="row">
                                        <div className="col-2">
                                            <div style={{color:"#0046BD",fontWeight:"700",fontSize:"15px"}} className="row">
                                                {Treatment.Date}
                                            </div>
                                            <div style={{color:"#3C3C3C",fontWeight:"400",fontSize:"15px"}} className="row">
                                                {Treatment.Speciality}
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div style={{color:"#0046BD",fontWeight:"700",fontSize:"15px"}} className="row">
                                                Diagnosis
                                            </div>
                                            <div style={{color:"#3C3C3C",fontWeight:"400",fontSize:"15px"}} className="row">
                                                {Treatment.Diagnosis}
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div style={{color:"#0046BD",fontWeight:"700",fontSize:"15px"}} className="row">
                                                Medications
                                            </div>
                                            <div style={{color:"#3C3C3C",fontWeight:"400",fontSize:"15px"}} className="row">
                                                {Treatment.Meds}
                                            </div>
                                        </div>
                                        <div data-target="#PatientTreatment" data-toggle="modal"  style={{color:"#0046BD",fontWeight:"700",fontSize:"17px",cursor:"pointer"}} className="col-2 d-flex align-items-center justify-content-center">
                                            See More
                                        </div>
                                    </div>
                                </div>
                                </div>
                            ))}
                            </div>
                            :
                            <div className="p-2 border rounded d-flex align-items-center justify-content-start" style={{marginTop:"10px",marginBottom:"10px"}}>
                                media
                            </div>
                            }

                            <div className="d-flex align-items-center justify-content-end">
                                <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><Link style={{backgroundColor:'#DCDCDC', color:"black",fontWeight:"500"}} onClick={(event)=>this.Prev(event)} className="page-link" href="#">Previous</Link></li>
                                    <li className="page-item"><div className="container border h-100 d-flex align-items-center">1</div></li>
                                    <li className="page-item"><Link style={{backgroundColor:'#DCDCDC', color:"black",fontWeight:"500"}} onClick={(event)=>this.Next(event)} className="page-link" href="#">Next</Link></li>
                                </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div style={{flexDirection: "column"}} className="col-4 d-flex">
                        <div className="row justify-content-between header align-items-center">
                            <div style={{fontSize: '20px',fontWeight: '700',color: '#00318B'}}>Basic info</div>
                            {this.state.EditPatientMedicalProfile === false ?<div onClick={ (event) => this.setState({EditPatientMedicalProfile: true})} style={{color:"#0046BD",fontSize:"14px",cursor:"pointer"}}> Edit <i class="fas fa-pen"></i> </div> : <div onClick={ (event) => this.setState({EditPatientMedicalProfile: false})} style={{color:"#0046BD",fontSize:"14px",cursor:"pointer"}}> Save <i class="fas fa-save"></i> </div>}
                        </div>
                        <div className="" style={{backgroundColor:'#F5F5F5'}}>
                            <div className="mt-1" style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                                {this.state.EditPatientMedicalProfile === false ?
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Blood Group</div> <div style={{color:"#727175",fontWeight:"400"}}>A+</div>
                                </div>
                                :
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Blood Group</div> 
                                    <select style={{maxWidth:"100px"}} class="form-control" id="BloodGroup">
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
                                }
                            </div>
                            <div className="mt-2" style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                                {this.state.EditPatientMedicalProfile === false ?
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Weight</div> <div style={{color:"#727175",fontWeight:"400"}}>89 KG</div>
                                </div>
                                :
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Weight</div>
                                    <div style={{maxWidth:"150px"}} class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">KG</div>
                                        </div>
                                        <input type="number" class="form-control" id="Weight" placeholder="98"/>
                                    </div> 
                                </div>
                                }
                            </div>
                            <div className="mt-2" style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                                {this.state.EditPatientMedicalProfile === false ?
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Height</div> <div style={{color:"#727175",fontWeight:"400"}}>175 CM</div>
                                </div>
                                :
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Height</div>
                                    <div style={{maxWidth:"150px"}} class="input-group">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text">CM</div>
                                        </div>
                                        <input type="number" class="form-control" id="Height" placeholder="98"/>
                                    </div>
                                </div>
                                }
                            </div>
                            <div className="mt-2" style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Chronic Diseases</div>
                                </div>
                                <div>
                                    <TagsInput selectedTags={this.selectedTags}  tags={["hello","hello 2"]} /> 
                                </div>
                            </div>
                            <div className="mt-2" style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Chronic Medications</div>
                                </div>
                                <div>
                                    <TagsInput selectedTags={this.selectedTags}  tags={["hello","hello 2"]} /> 
                                </div>
                            </div>
                            <div className="mt-2" style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div  style={{color:"#707070",fontWeight:"700"}}>Past Surgeries</div>
                                </div>
                                <div>
                                    <TagsInput selectedTags={this.selectedTags}  tags={["hello","hello 2"]} /> 
                                </div>
                            </div>
                            <div className="mt-2" style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Allergies</div> <div style={{color:"#727175",fontWeight:"400"}}>None</div>
                                </div>
                            </div>
                            <div className="mt-2" style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Family history / other</div> <div style={{color:"#727175",fontWeight:"400"}}>None</div>
                                </div>
                            </div>
                            <div className="mt-2" style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                                {this.state.EditPatientMedicalProfile === false ?
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Smoking Habits</div> <div style={{color:"#727175",fontWeight:"400"}}>Not a smoker</div>
                                </div>
                                :
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Smoking Habits</div>
                                    <select style={{maxWidth:"180px"}} class="form-control" id="SmokingHabits">
                                        <option>Not a Smoker</option>
                                        <option>Light Smoker</option>
                                        <option>Moderate Smoker</option>
                                        <option>Heavy Smoker</option>
                                    </select>
                                </div>
                                }
                            </div>
                            <div className="mt-2" style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                                {this.state.EditPatientMedicalProfile === false ?
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Alcohol consumption</div> <div style={{color:"#727175",fontWeight:"400"}}>Not an Alcoholic</div>
                                </div>
                                :
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Alcohol consumption</div>
                                    <select style={{maxWidth:"180px"}} class="form-control" id="SmokingHabits">
                                        <option>Not an Alcoholic</option>
                                        <option>Light Alcoholic</option>
                                        <option>Moderate Alcoholic</option>
                                        <option>Heavy Alcoholic</option>
                                    </select>
                                </div>
                                }
                            </div>
                            <div className="mt-2" style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                                {this.state.EditPatientMedicalProfile === false ?
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Activity Level</div> <div style={{color:"#727175",fontWeight:"400"}}>Light</div>
                                </div>
                                :
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Activity Level</div>
                                    <select style={{maxWidth:"180px"}} class="form-control" id="SmokingHabits">
                                        <option>Light Workout</option>
                                        <option>Moderate Workout</option>
                                        <option>Heavy Workout</option>
                                    </select>
                                </div>
                                }
                            </div>
                            <div className="mt-2" style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                                {this.state.EditPatientMedicalProfile === false ?
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Occupation</div> <div style={{color:"#727175",fontWeight:"400"}}>Software Engineer</div>
                                </div>
                                :
                                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{color:"#707070",fontWeight:"700"}}>Occupation</div>
                                    <input style={{maxWidth:"180px"}} autocomplete="off" type="text" className="form-control" id="Occupation" placeholder="Ex: Software Engineer"/>
                                </div>
                                }
                            </div>

                        </div>
                    </div>
                </div>

                <div id="Prescription" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-xl  ">
                        <div className="modal-content p-2">
                            <button className="btn close-button" data-dismiss="modal"> <i className="fas fa-times"></i> </button>
                            <div className="border rounded w-100">
                                <div className="container-fluid border rounded d-flex align-items-center justify-content-between"  style={{backgroundColor:"#F5F5F5",height:"40px",fontSize: '20px',fontWeight: '700',color: '#00318B'}}> Mohammed Nader  <i style={{color:"#707070",cursor:"pointer"}} onClick={(event)=>this.addPDF(event)} class="fas fa-file-pdf"></i> </div>
                                <div style={{padding: "0px 15px 0px 10px"}} className="mt-2 row">
                                    <div style={{marginBottom:"10px"}} class="form-group col-8">
                                        <label style={{fontSize:"15px",fontWeight:"600"}} for="Diagnosis" className="d-flex">Diagnosis :</label>
                                        <textarea style={{fontSize:"15px"}} class="form-control" id="Diagnosis" placeholder="" rows="2"></textarea>
                                    </div>
                                </div>
                                <div style={{padding: "0px 15px 0px 25px"}} className="row">
                                    <div style={{ border: "solid 1px #bbbbbb", borderRadius: "5px"}} className="col-9">
                                         <div>
                                            {this.state.drugs.length >= 1 ?
                                            <div className="row  " style={{minWidth:"-webkit-fill-available",backgroundColor:"#DCDCDC", minHeight:"50px"}}>
                                                <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center justify-content-start">
                                                Drug Name
                                                </div>
                                                <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700",fontSize:"15px"}} className="col-3 d-flex align-items-center  justify-content-start">
                                                Dosage & Frequancy
                                                </div>
                                                <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                                                Instructions
                                                </div>
                                                <div style={{color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                                                Duration
                                                </div>
                                            </div>
                                             : 
                                             <div></div>}
                                            {this.state.drugs.map((Drug,index)=>(
                                            <div>
                                            <div className="row  " style={{minWidth:"-webkit-fill-available", minHeight:"100px"}}>
                                                <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black",fontWeight:"500",overflow:"hidden"}} className="col-3 d-flex align-items-center justify-content-start">
                                                {Drug.DrugName}
                                                </div>
                                                <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black"}} className="col-3">
                                                <div className="row d-flex align-items-center justify-content-between">
                                                    <div className="col-6">
                                                    <div className="form-group">
                                                        <label style={{fontSize:"10px"}} for="Dosage" className="d-flex">Dosage:</label>
                                                        <input onChange={(event) => this.changeValue(event,"dosage",index)} style={{fontSize:"10px",color:"black",fontWeight:"700"}} autocomplete="off" type="text"  className="form-control" id="Dosage" placeholder=""/>
                                                    </div>
                                                    </div>
                                                    <div className="col-6">
                                                    <div className="form-group" >
                                                        <label style={{fontSize:"10px" , padding:"0px"}} for="Unit" className="d-flex">Unit:</label>
                                                        <select onChange={(event) => this.changeValue(event,"unit",index)} style={{fontSize:"10px",color:"black",fontWeight:"700"}} class="form-control" id="Unit">
                                                        <option>ml</option>
                                                        <option>mg</option>
                                                        <option>g</option>
                                                        <option>tablet</option>
                                                        </select>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="row ">
                                                    <div className="form-group col-12" >
                                                        <label style={{fontSize:"10px"}} for="Unit" className="d-flex">Frequancy:</label>
                                                        <select onChange={(event) => this.changeValue(event,"freq",index)} style={{fontSize:"10px",color:"black",fontWeight:"700"}} class="form-control" id="Unit">
                                                            <option>every 3 hours</option>
                                                            <option>every 6 hours</option>
                                                            <option>every 12 hours</option>
                                                            <option>every 24 hours</option>
                                                        </select>
                                                        </div>
                                                </div>
                                                </div>
                                                <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black"}} className="col-3 d-flex align-items-start  justify-content-start">
                                                <div class="form-group">
                                                    <label style={{fontSize:"15px"}} for="Instructions" className="d-flex">Instructions:</label>
                                                    <textarea onChange={(event) => this.changeValue(event,"inst",index)} style={{fontSize:"12px",color:"black",fontWeight:"700"}} class="form-control" id="Instructions" placeholder="Before food , After food … ETC" rows="4"></textarea>
                                                </div>
                                                </div>
                                                <div style={{color:"black",borderBottom:'0.5px solid #707070'}} className="col-3 ">
                                                <div style={{minHeight:"100px"}}  className="row d-flex align-items-center justify-content-between">
                                                    <div style={{borderRight:'0.5px solid #707070',minHeight:"140px",color:"black",fontWeight:"500"}} className="col-9 d-flex align-items-center">
                                                    <div className="form-group">
                                                        <input onChange={(event) => this.changeValue(event,"duration",index)} style={{fontSize:"15px",color:"black",fontWeight:"700"}} autocomplete="off" type="text"  className="form-control" id="Dosage" placeholder="ex: 10 days"/>
                                                    </div>
                                                    </div>
                                                    <div className="col-3 d-flex align-items-center">
                                                    <i onClick={(event) => this.deleteDrug(event,index)} style={{cursor:"pointer"}} class="fas fa-trash-alt"></i>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            ))}


                                            <div className="row mt-2">
                                                <div class="input-group col-6">
                                                <input onKeyUp={event => event.key === "Enter" ? this.addDrug(event) : null}  type="search" class="form-control rounded" placeholder="Type name of the drug and press 'Enter'" aria-label="Search" aria-describedby="search-addon" />
                                                </div>
                                            </div>
                                            
                                            <div className="row mt-2">
                                                <div class="form-group col-12">
                                                    <label style={{fontSize:"15px",fontWeight:"600"}} for="PrescriptionNote" className="d-flex">Prescription Note:</label>
                                                    <textarea style={{fontSize:"15px"}} class="form-control" id="PrescriptionNote" placeholder="" rows="2"></textarea>
                                                </div>
                                            </div>                          
                                            </div>      
                                    </div>

                                    <div className="col-3">
                                        <div className="border rounded w-100 mt-2">
                                            <div className="container-fluid border rounded d-flex align-items-center justify-content-between"  style={{backgroundColor:"#F5F5F5",height:"40px",fontSize: '15px',fontWeight: '700',color: '#00318B'}}> Prescription Templates <i style={{color:"#707070",cursor:"pointer"}} class="fas fa-cog"></i> </div>
                                            {this.state.Prescriptions.map((template,index)=>(
                                                <div className="px-2">
                                                    <div className="container-fluid border rounded d-flex align-items-center justify-content-between mt-1 mb-1"> {template.templateName} <i style={{color:"#707070",cursor:"pointer"}} onClick={(event)=>this.AddTemplate(event,index)} class="fas fa-plus-circle"></i> </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="border rounded w-100 mt-2">
                                            <div className="container-fluid border rounded d-flex align-items-center justify-content-between"  style={{backgroundColor:"#F5F5F5",height:"40px",fontSize: '15px',fontWeight: '700',color: '#00318B'}}> Saved Drugs  <i style={{color:"#707070",cursor:"pointer"}} class="fas fa-cog"></i> </div>
                                            {this.state.savedDrugs.map((drug,index)=>(
                                                <div className="px-2">
                                                    <div className="container-fluid border rounded d-flex align-items-center justify-content-between mt-1 mb-1"> {drug.DrugName} <i style={{color:"#707070",cursor:"pointer"}} onClick={(event)=>this.AddSavedDrug(event,index)} class="fas fa-plus-circle"></i> </div>
                                                </div>
                                            ))}
                                        </div>
                                        <button className="btn btn-primary mt-2">Add Prescription</button>
                                    </div>

                                </div>
                                <div className="row mt-3">
                                    <div className="col-11 d-flex justify-content-end">
                                        
                                    </div>         
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="PatientTreatment" className="modal fade" role="dialog">
                    <div className="modal-dialog modal-xl  ">
                        <div className="modal-content p-2">
                            <button className="btn close-button" data-dismiss="modal"> <i className="fas fa-times"></i> </button>
                            <div className="border rounded w-100">
                                <div className="container-fluid border rounded d-flex align-items-center justify-content-between"  style={{backgroundColor:"#F5F5F5",height:"40px",fontSize: '20px',fontWeight: '700',color: '#00318B'}}> Mohammed Nader </div>
                                <div style={{padding: "0px 15px 0px 25px"}} className="row">
                                    <div style={{ border: "solid 1px #bbbbbb", borderRadius: "5px"}} className="col-9">
                                         <div>
                                            {this.state.Drugs_1.length >= 1 ?
                                            <div className="row  " style={{minWidth:"-webkit-fill-available",backgroundColor:"#DCDCDC", minHeight:"50px"}}>
                                                <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center justify-content-start">
                                                Drug Name
                                                </div>
                                                <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700",fontSize:"15px"}} className="col-3 d-flex align-items-center  justify-content-start">
                                                Dosage & Frequancy
                                                </div>
                                                <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                                                Instructions
                                                </div>
                                                <div style={{color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                                                Duration
                                                </div>
                                            </div>
                                             : 
                                             <div></div>}
                                            {this.state.Drugs_1.map((Drug,index)=>(
                                            <div>
                                            <div className="row  " style={{minWidth:"-webkit-fill-available", minHeight:"100px"}}>
                                                <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black",fontWeight:"500",overflow:"hidden"}} className="col-3 d-flex align-items-center justify-content-start">
                                                {Drug.DrugName}
                                                </div>
                                                <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black"}} className="col-3">
                                                <div className="row d-flex align-items-center justify-content-between">
                                                    <div className="col-6">
                                                    <div className="form-group">
                                                        <label style={{fontSize:"10px",fontWeight:"800"}} for="Dosage" className="d-flex">Dosage:</label>
                                                        <div style={{fontSize: "15px",fontWeight: "400" ,textAlign: "initial"}} > 15 </div>
                                                    </div>
                                                    </div>
                                                    <div className="col-6">
                                                    <div className="form-group" >
                                                        <label style={{fontSize:"10px" ,fontWeight:"800", padding:"0px"}} for="Unit" className="d-flex">Unit:</label>
                                                        <div style={{fontSize: "15px",fontWeight: "400" ,textAlign: "initial"}} > Tablet </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="row ">
                                                    <div className="form-group col-12" >
                                                        <label style={{fontSize:"10px",fontWeight:"800"}} for="freq" className="d-flex">Frequancy:</label>
                                                        <div style={{fontSize: "15px",fontWeight: "400" ,textAlign: "initial"}} > Every 6 hours </div>
                                                        </div>
                                                </div>
                                                </div>
                                                <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black"}} className="col-3 d-flex align-items-start  justify-content-start">
                                                <div class="form-group">
                                                    <label style={{fontSize:"15px",fontWeight:"800"}} for="Instructions" className="d-flex">Instructions:</label>
                                                    <div style={{fontSize: "15px",fontWeight: "400" ,textAlign: "initial"}} > Before Food </div>
                                                </div>
                                                </div>
                                                <div style={{color:"black",borderBottom:'0.5px solid #707070'}} className="col-3 ">
                                                <div style={{minHeight:"100px"}}  className="row d-flex align-items-center justify-content-between">
                                                    <div style={{borderRight:'0.5px solid #707070',minHeight:"140px",color:"black",fontWeight:"500"}} className="col-12 d-flex align-items-center">
                                                    <div className="form-group">
                                                        <div style={{fontSize: "15px",fontWeight: "400" ,textAlign: "initial"}} > 2 Weeks </div>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                            ))}                                            
                                            <div className="row mt-2">
                                                <div class="form-group col-12">
                                                    <label style={{fontSize:"15px",fontWeight:"600"}} for="PrescriptionNote" className="d-flex">Prescription Note:</label>
                                                    <div style={{fontSize: "15px",fontWeight: "400" ,textAlign: "initial"}} > None </div>
                                                </div>
                                            </div>                          
                                            </div>      
                                    </div>

                                    <div className="col-3">
                                        <div style={{padding: "0px 15px 0px 10px"}} className="mt-2 row">
                                            <div style={{marginBottom:"10px"}} class="form-group col-12">
                                                <label style={{fontSize:"15px",fontWeight:"600"}} for="Diagnosis" className="d-flex">Diagnosis :</label>
                                                <div style={{fontSize: "15px",fontWeight: "400" ,textAlign: "initial"}} > Eczema in the right arm </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    
}
export default MoreDetailsPage;
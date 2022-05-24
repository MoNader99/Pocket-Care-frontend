import React from 'react';
import './PrescriptionsPage.css';
import {connect} from "react-redux";
import {BASEURL} from '../../Containers/baseurl/baseurl';

class PrescriptionsPage extends React.Component {
    state={
      addText:"Add New Prescription",
      editText:"Edit Existing Prescription",
      edit:false,

      addText1:"Add New drug",
      editText1:"Edit Existing drug",
      edit1:false,

      PrescriptionsClasses:"tab",
      savedDrugsClasses:"tab-un-pressed",
      changeTabs:false,

      Prescriptions: [
        {templateName : "covid-99",drugs:[{DrugName:"Asprin",Dosage:"1", Unit:"ml",Frequancy:"every 6 hours",Instructions:"before food",Duration:"10 days"},]},
        {templateName : "cold flu",drugs:[{DrugName:"hoho",Dosage:"1", Unit:"ml",Frequancy:"every 6 hours",Instructions:"before food",Duration:"10 days"},]},
        {templateName : "Romatezm",drugs:[{DrugName:"de7ko",Dosage:"1", Unit:"ml",Frequancy:"every 6 hours",Instructions:"before food",Duration:"10 days"},]},
      ],

      drugs:[],

      savedDrugs: [
        {DrugName:"de7ka",Dosage:"1", Unit:"tablet",Frequancy:"every 6 hours",Instructions:"before food",Duration:"10-days"},
        {DrugName:"de7ka 2",Dosage:"2", Unit:"ml",Frequancy:"every 3 hours",Instructions:"after wake up",Duration:"2-days"},
        {DrugName:"de7ka 3",Dosage:"2", Unit:"ml",Frequancy:"every 12 hours",Instructions:"after food",Duration:"7-days"},
      ],
      
      newDrug:"",

      selectedTemplate:"",
      selectedDrug:"",
    }

    componentWillMount(){
      this.GetPresTemplate()
    }

    GetPresTemplate(){
      var url = BASEURL+ "/prescriptiontemplate/" + this.props.DoctorID; 
      const requestOptions = {
          method: 'GET',
        };
      fetch(url,requestOptions)
      .then((response) => { return response.json()})
      .then((data) => {
        if(data.length >=1){
        this.setState({
          Prescriptions:data
        });
      }
        this.GetSavedDrugs()
      })
      .catch((error)=>{console.log(error);
      })
    }

    GetSavedDrugs(){
      var url = BASEURL+ "/saveddrugs/" + this.props.DoctorID; 
      const requestOptions = {
          method: 'GET',
        };
      fetch(url,requestOptions)
      .then((response) => { return response.json()})
      .then((data) => {
        if(data.length >=1){
        this.setState({
          savedDrugs:data
        });
      }
      })
      .catch((error)=>{console.log(error);
      })
    }

    changeLayout=(event,str,index)=>{
      if(str === "presc"){
        this.setState({
          edit: true,
          selectedTemplate: this.state.Prescriptions[index].templateName
        });
      }
      else{
          this.setState({
            edit1: true,
            selectedDrug: this.state.savedDrugs[index].DrugName
          });
      }
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

    changeValue2=(event,str)=>{

      var array = this.state.savedDrugs
      if(str==="dosage"){
        array.find(x => x.DrugName === this.state.selectedDrug).Dosage = event.target.value
      }
      else if(str==="unit"){
        array.find(x => x.DrugName === this.state.selectedDrug).Unit = event.target.value
      }
      else if(str==="freq"){
        array.find(x => x.DrugName === this.state.selectedDrug).Frequancy = event.target.value
      }
      else if(str==="inst"){
        array.find(x => x.DrugName === this.state.selectedDrug).Instructions = event.target.value
      }
      else if(str==="duration"){
        array.find(x => x.DrugName === this.state.selectedDrug).Duration = event.target.value
      }
      this.setState({savedDrugs: array});
      
    }

    changeValue1=(event,str,index)=>{

      var array = this.state.Prescriptions

      if(str==="title"){
        array.find(x => x.templateName === this.state.selectedTemplate).templateName = event.target.value
        this.setState({
          selectedTemplate:event.target.value
        })
      }
      else if(str==="dosage"){
        array.find(x => x.templateName === this.state.selectedTemplate).drugs[index].Dosage = event.target.value
      }
      else if(str==="unit"){
        array.find(x => x.templateName === this.state.selectedTemplate).drugs[index].Unit=event.target.value
      }
      else if(str==="freq"){
        array.find(x => x.templateName === this.state.selectedTemplate).drugs[index].Frequancy=event.target.value
      }
      else if(str==="inst"){
        array.find(x => x.templateName === this.state.selectedTemplate).drugs[index].Instructions=event.target.value
      }
      else if(str==="duration"){
        array.find(x => x.templateName === this.state.selectedTemplate).drugs[index].Duration = event.target.value
      }

      this.setState({Prescriptions: array});  
    }

    deleteDrug1=(index)=>{
      console.log(index)
      var array = this.state.Prescriptions; // make a separate copy of the array
      if (index !== -1) {
        array.find(x => x.templateName === this.state.selectedTemplate).drugs.splice(index, 1);
        this.setState({Prescriptions: array});
      }
    }

    addDrug1=(event)=>{
      var array = this.state.Prescriptions;
      if (event.target.value !== "") {
        array.find(x => x.templateName === this.state.selectedTemplate).drugs.push({DrugName:event.target.value ,Dosage:"1", Unit:"g",Frequancy:"",Instructions:"hahaha",Duration:""})
        console.log(array)
        this.setState({ 
          Prescriptions: array
        })
        event.target.value = "";
      }
    }

    addDrug3=(event)=>{
      var array = this.state.savedDrugs;
      if (event.target.value !== "") {
        array.find(x => x.DrugName === this.state.selectedDrug).DrugName = event.target.value
        console.log(array)
        this.setState({ 
          savedDrugs: array,
          selectedDrug: event.target.value
        })
        event.target.value = "";
      }
    }

    deleteDrug2=(event)=>{
      var array = this.state.savedDrugs;
      array = array.filter(item => item.DrugName!==this.state.selectedDrug);
      this.setState({
        savedDrugs: array,
        edit1:false
      })
    }

    deleteDrug5=(event)=>{
      var array = this.state.Prescriptions;
      array = array.filter(x => x.templateName !== this.state.selectedTemplate);
      this.setState({
        Prescriptions: array,
        edit:false
      })
    }

    deleteDrug=(event,index)=>{
      var array = [...this.state.drugs]; // make a separate copy of the array
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({drugs: array});
      }
    }

    addDrug=(event)=>{
      if (event.target.value !== "") {
        this.setState({ 
          drugs: this.state.drugs.concat([{DrugName:event.target.value ,Dosage:"", Unit:"",Frequancy:"",Instructions:"",Duration:""}])
        })
        event.target.value = "";
      }
    }

    addDrug2=(event)=>{
      if (event.target.value !== "") {
        this.setState({ 
          newDrug: {DrugName:event.target.value ,Dosage:"", Unit:"",Frequancy:"",Instructions:"",Duration:""}
        })
        event.target.value = "";
      }
    }

    changeTab=(str)=>{ 
      if(str==="p"){
        this.setState({
          PrescriptionsClasses:"tab",
          savedDrugsClasses:"tab-un-pressed",
          changeTabs:false
        });
      }
      else if(str==="s"){
        this.setState({
          savedDrugsClasses:"tab",
          PrescriptionsClasses:"tab-un-pressed",
          changeTabs:true
        });
      }
    }

    render(){
      return (
        <div className ="prescriptions-page">
          <div className="row justify-content-between header">
            <div style={{fontSize: '20px',fontWeight: '700',color: '#00318B'}}>Prescriptions</div>
          </div>
          <div className="tabs mt-2">
            <div className="row container tab-bar">
              <div onClick={()=>this.changeTab("p")} className={this.state.PrescriptionsClasses}>Prescription Templates</div>
              <div onClick={()=>this.changeTab("s")} className={this.state.savedDrugsClasses} style={{marginLeft:'15px'}}>Saved Drugs</div>
            </div>
          </div>

          {
            this.state.changeTabs ? 
            <div className="row d-flex justify-content-center mt-2 px-3">
                <div className="col-4 Templates">
                  {this.state.savedDrugs.map((drugs,index)=>(
                  <div key={index} className={"mt-2" + (index===this.state.Prescriptions.length-1 ? " mb-2" : "")} style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                    <div style={{fontWeight:"700",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                      {drugs.DrugName} <i onClick={(event)=>this.changeLayout(event,"drug",index)}  className="fas fa-cog" style={{cursor:"pointer"}}></i>
                    </div>
                  </div>
                  ))}
                </div>

                {!this.state.edit1 ?

                <div className="col-8">
                    <div className="row px-3" style={{fontSize:"20px",fontWeight:"600"}}>
                        {this.state.edit1? this.state.editText1 : this.state.addText1}
                    </div>
                    <div className="row mt-2 px-3 ">
                      <div className=" px-3 py-2" style={{minWidth:"-webkit-fill-available" ,display:"flex",alignItems:"start",border:"1px solid #707070",justifyContent:'center' , flexDirection:'column'}}>
                          <div style={{minWidth:"400px"}} className="row mt-2 mb-2">
                            <div class="input-group col-12">
                              <input onKeyUp={event => event.key === "Enter" ? this.addDrug2(event) : null} type="search" class="form-control rounded" placeholder="Type Drug Name" aria-label="Search" aria-describedby="search-addon" />
                            </div>
                          </div>
                            {this.state.newDrug==="" ?
                            
                            <div></div>

                            :

                            <div style={{minWidth:"-webkit-fill-available"}} >
                                <div className="row  " style={{minWidth:"-webkit-fill-available",backgroundColor:"#DCDCDC", minHeight:"50px"}}>
                            <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center justify-content-start">
                              Drug Name
                            </div>
                            <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                              Dosage & Frequancy
                            </div>
                            <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                            Instructions
                            </div>
                            <div style={{color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                            Duration
                            </div>
                        </div>
                        <div className="row  " style={{minWidth:"-webkit-fill-available", minHeight:"100px"}}>
                            <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black"}} className="col-3 d-flex align-items-center justify-content-start">
                              {this.state.newDrug.DrugName}
                            </div>
                            <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black"}} className="col-3">
                              <div className="row d-flex align-items-center justify-content-between">
                                <div className="col-6">
                                  <div className="form-group">
                                    <label style={{fontSize:"10px"}} for="Dosage" className="d-flex">Dosage:</label>
                                    <input style={{fontSize:"10px"}} autocomplete="off" type="text" className="form-control" id="Dosage" placeholder="1"/>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="form-group" >
                                    <label style={{fontSize:"10px" , padding:"0px"}} for="Unit" className="d-flex">Unit:</label>
                                    <select style={{fontSize:"10px" , padding:"0px"}} class="form-control" id="Unit">
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
                                      <select style={{fontSize:"10px"}} class="form-control" id="Unit">
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
                                <textarea style={{fontSize:"12px"}} class="form-control" id="Instructions" placeholder="Before food , After food … ETC" rows="4"></textarea>
                              </div>
                            </div>
                            <div style={{color:"black",borderBottom:'0.5px solid #707070'}} className="col-3 ">
                              <div style={{minHeight:"100px"}}  className="row d-flex align-items-center justify-content-between">
                                <div style={{borderRight:'0.5px solid #707070',minHeight:"140px"}} className="col-9 d-flex align-items-center">
                                  Duration
                                </div>
                                <div className="col-3 d-flex align-items-center">
                                  <i onClick={(event)=>this.setState({newDrug:""})} style={{cursor:"pointer"}} class="fas fa-trash-alt"></i>
                                </div>
                              </div>
                            </div>
                        </div>

                          <div className="row mt-3">
                              <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-primary btn-lg">Save Changes</button>
                              </div>         
                          </div>
                          
                        </div>
                            }
                      </div>
                    </div>
                </div>
                :
                <div className="col-8">
                    <div className="row px-3 d-flex justify-content-between" style={{fontSize:"20px",fontWeight:"600"}}>
                        {this.state.edit1? this.state.editText1 : this.state.addText1}
                        <button onClick={(event)=>this.setState({edit1:false})} className="btn btn-success">Add new Drug</button>
                    </div>
                    <div className="row mt-2 px-3 ">
                      <div className=" px-3 py-2" style={{minWidth:"-webkit-fill-available" ,display:"flex",alignItems:"start",border:"1px solid #707070",justifyContent:'center' , flexDirection:'column'}}>
                          <div style={{minWidth:"400px"}} className="row mt-2 mb-2">
                            <div class="input-group col-10">
                              <input onKeyUp={event => event.key === "Enter" ? this.addDrug3(event) : null} type="search" class="form-control rounded" placeholder="Edit Drug name" aria-label="Search" aria-describedby="search-addon" />
                            </div>
                            <div className="col-2 d-flex align-items-center justify-content-end">
                              <i onClick={(event) => this.deleteDrug2(event)} style={{cursor:"pointer"}} class="fas fa-trash-alt"></i>
                            </div>
                          </div>                        
                            <div style={{minWidth:"-webkit-fill-available"}} >
                                <div className="row  " style={{minWidth:"-webkit-fill-available",backgroundColor:"#DCDCDC", minHeight:"50px"}}>
                            <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center justify-content-start">
                              Drug Name
                            </div>
                            <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                              Dosage & Frequancy
                            </div>
                            <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                            Instructions
                            </div>
                            <div style={{color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                            Duration
                            </div>
                        </div>
                        <div className="row  " style={{minWidth:"-webkit-fill-available", minHeight:"100px"}}>
                            <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black"}} className="col-3 d-flex align-items-center justify-content-start">
                              {this.state.savedDrugs.find(x => x.DrugName === this.state.selectedDrug).DrugName}
                            </div>
                            <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black"}} className="col-3">
                              <div className="row d-flex align-items-center justify-content-between">
                                <div className="col-6">
                                  <div className="form-group">
                                    <label style={{fontSize:"10px"}} for="Dosage" className="d-flex">Dosage:</label>
                                    <input onChange={(event) => this.changeValue2(event,"dosage")} style={{fontSize:"10px",fontWeight:"600"}} autocomplete="off" type="text" className="form-control" id="Dosage" value={this.state.savedDrugs.find(x => x.DrugName === this.state.selectedDrug).Dosage} placeholder="1"/>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="form-group" >
                                    <label style={{fontSize:"10px" , padding:"0px", fontWeight:"600"}} for="Unit" className="d-flex">Unit:</label>
                                    <select onChange={(event) => this.changeValue2(event,"unit")} value={this.state.savedDrugs.find(x => x.DrugName === this.state.selectedDrug).Unit} style={{fontSize:"10px" , padding:"0px"}} class="form-control" id="Unit">
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
                                      <label style={{fontSize:"10px",}} for="Unit" className="d-flex">Frequancy:</label>
                                      <select onChange={(event) => this.changeValue2(event,"freq")} style={{color:"black",fontWeight:"700"}} value={this.state.savedDrugs.find(x => x.DrugName === this.state.selectedDrug).Frequancy} style={{fontSize:"10px"}} class="form-control" id="Unit">
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
                                <textarea onChange={(event) => this.changeValue2(event,"inst")} value={this.state.savedDrugs.find(x => x.DrugName === this.state.selectedDrug).Instructions} style={{fontSize:"12px",color:"black",fontWeight:"700"}} class="form-control" id="Instructions" placeholder="Before food , After food … ETC" rows="4"></textarea>
                              </div>
                            </div>
                            <div style={{color:"black",borderBottom:'0.5px solid #707070'}} className="col-3 ">
                              <div style={{minHeight:"100px"}}  className="row d-flex align-items-center justify-content-between">
                                <div style={{borderRight:'0.5px solid #707070',minHeight:"140px"}} className="col-12 d-flex align-items-center">
                                  <div className="form-group">
                                    <input onChange={(event) => this.changeValue2(event,"duration")} style={{fontSize:"15px",color:"black"}} autocomplete="off" type="text" value={this.state.savedDrugs.find(x => x.DrugName === this.state.selectedDrug).Duration}  className="form-control" id="Dosage" placeholder=""/>
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
                          
                        </div>
                      </div>
                    </div>
                </div>
                }
              </div>
            :
              
              <div className="row d-flex justify-content-center mt-2 px-3">
                <div className="col-4 Templates">
                {this.state.Prescriptions.map((template,index)=>(
                  <div key={index} className={"mt-2" + (index===this.state.Prescriptions.length-1 ? " mb-2" : "")} style={{padding:"10px",border:"1px solid #A4A3B0",backgroundColor:"#FFFFFF" ,borderRadius:"5px"}}>
                    <div style={{fontWeight:"700",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                      {template.templateName} <i onClick={(event)=>this.changeLayout(event,"presc",index)} className="fas fa-cog" style={{cursor:"pointer"}}></i>
                    </div>
                  </div>
                  ))}
                </div>
                {!this.state.edit ?
                <div className="col-8">
                    <div className="row px-3" style={{fontSize:"20px",fontWeight:"600"}}>
                        {this.state.edit? this.state.editText : this.state.addText}
                    </div>
                    <div className="row mt-2 px-3 ">
                      <div className=" px-3 py-2" style={{minWidth:"-webkit-fill-available" ,display:"flex",alignItems:"start",border:"1px solid #707070",justifyContent:'center' , flexDirection:'column'}}>
                        <div className="row">
                            <div className="form-group d-flex p-2">
                              <label for="PrescriptionTitle" className="d-flex" style={{fontSize:"20px",fontWeight:"600", minWidth:"180px"}}>Prescription Title:</label>
                              <input autocomplete="off" type="text" className="form-control" id="PrescriptionTitle" placeholder=""/>
                            </div>
                        </div>
                        
                        <div style={{minWidth:"-webkit-fill-available"}} >
                        {this.state.drugs.map((Drug,index)=>(
                        <div>
                        <div className="row  " style={{minWidth:"-webkit-fill-available",backgroundColor:"#DCDCDC", minHeight:"50px"}}>
                            <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center justify-content-start">
                              Drug Name
                            </div>
                            <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                              Dosage & Frequancy
                            </div>
                            <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                            Instructions
                            </div>
                            <div style={{color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                            Duration
                            </div>
                        </div>
                        <div className="row  " style={{minWidth:"-webkit-fill-available", minHeight:"100px"}}>
                            <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black",fontWeight:"500",overflow:"hidden"}} className="col-3 d-flex align-items-center justify-content-start">
                              {Drug.DrugName}
                            </div>
                            <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black"}} className="col-3">
                              <div className="row d-flex align-items-center justify-content-between">
                                <div className="col-6">
                                  <div className="form-group">
                                    <label style={{fontSize:"10px"}} for="Dosage" className="d-flex">Dosage:</label>
                                    <input style={{fontSize:"10px",color:"black",fontWeight:"700"}} autocomplete="off" type="text"  onChange={(event) => this.changeValue(event,"dosage",index)} value={Drug.Dosage} className="form-control" id="Dosage" placeholder=""/>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="form-group" >
                                    <label style={{fontSize:"10px" , padding:"0px"}} for="Unit" className="d-flex">Unit:</label>
                                    <select onChange={(event) => this.changeValue(event,"unit",index)} value={Drug.Unit} style={{fontSize:"10px",color:"black",fontWeight:"700"}} class="form-control" id="Unit">
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
                                      <select onChange={(event) => this.changeValue(event,"freq",index)} value={Drug.Frequancy} style={{fontSize:"10px",color:"black",fontWeight:"700"}} class="form-control" id="Unit">
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
                                <textarea style={{fontSize:"12px",color:"black",fontWeight:"700"}} value={Drug.Instructions} onChange={(event) => this.changeValue(event,"inst",index)} class="form-control" id="Instructions" placeholder="Before food , After food … ETC" rows="4"></textarea>
                              </div>
                            </div>
                            <div style={{color:"black",borderBottom:'0.5px solid #707070'}} className="col-3 ">
                              <div style={{minHeight:"100px"}}  className="row d-flex align-items-center justify-content-between">
                                <div style={{borderRight:'0.5px solid #707070',minHeight:"140px",color:"black",fontWeight:"500"}} className="col-9 d-flex align-items-center">
                                  <div className="form-group">
                                    <input style={{fontSize:"15px",color:"black",fontWeight:"700"}} autocomplete="off" type="text"  onChange={(event) => this.changeValue(event,"duration",index)} value={Drug.Duration} className="form-control" id="Dosage" placeholder=""/>
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
                                <label style={{fontSize:"20px",fontWeight:"600"}} for="PrescriptionNote" className="d-flex">Prescription Note:</label>
                                <textarea style={{fontSize:"15px"}} class="form-control" id="PrescriptionNote" placeholder="" rows="4"></textarea>
                              </div>
                          </div>

                          <div className="row mt-3">
                              <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-primary btn-lg">Save Changes</button>
                              </div>         
                          </div>
                          
                        </div>
                      </div>
                    </div>
                </div>
                :
                <div className="col-8">
                    <div className="row px-3 d-flex justify-content-between" style={{fontSize:"20px",fontWeight:"600"}}>
                        {this.state.edit? this.state.editText : this.state.addText}
                        <button onClick={(event)=>this.setState({edit:false})} className="btn btn-success">Add new Prescription</button>
                    </div>
                    <div className="row mt-2 px-3 ">
                      <div className=" px-3 py-2" style={{minWidth:"-webkit-fill-available" ,display:"flex",alignItems:"start",border:"1px solid #707070",justifyContent:'center' , flexDirection:'column'}}>
                        <div className="row">
                            <div className=" col-10 form-group d-flex p-2">
                              <label className="d-flex" style={{fontSize:"20px",fontWeight:"600", minWidth:"180px"}}>Prescription Title:</label>
                              <input autocomplete="off" style={{fontSize:"15px",fontWeight:"600",color:"black"}} type="text" onChange={(event) => this.changeValue1(event,"title",-1)} value={this.state.selectedTemplate} className="form-control" id="PrescriptionTitle" placeholder=""/>
                            </div>
                            <div className="col-2 d-flex align-items-center justify-content-end">
                              <i onClick={(event) => this.deleteDrug5(event)} style={{cursor:"pointer"}} class="fas fa-trash-alt"></i>
                            </div>
                        </div>
                        
                        <div style={{minWidth:"-webkit-fill-available"}} >
                        {this.state.Prescriptions.find(x => x.templateName === this.state.selectedTemplate).drugs.map((Drug,index)=>(
                        <div>
                        <div className="row  " style={{minWidth:"-webkit-fill-available",backgroundColor:"#DCDCDC", minHeight:"50px"}}>
                            <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center justify-content-start">
                              Drug Name
                            </div>
                            <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                              Dosage & Frequancy
                            </div>
                            <div style={{borderRight:'0.5px solid #707070',color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                            Instructions
                            </div>
                            <div style={{color:"black",fontWeight:"700"}} className="col-3 d-flex align-items-center  justify-content-start">
                            Duration
                            </div>
                        </div>
                        <div className="row  " style={{minWidth:"-webkit-fill-available", minHeight:"100px"}}>
                            <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black",fontWeight:"500",overflow:"hidden"}} className="col-3 d-flex align-items-center justify-content-start">
                              {Drug.DrugName}
                            </div>
                            <div style={{borderRight:'0.5px solid #707070',borderBottom:'0.5px solid #707070',color:"black"}} className="col-3">
                              <div className="row d-flex align-items-center justify-content-between">
                                <div className="col-6">
                                  <div className="form-group">
                                    <label style={{fontSize:"10px"}} for="Dosage" className="d-flex">Dosage:</label>
                                    <input style={{fontSize:"10px",color:"black",fontWeight:"700"}} autocomplete="off" type="text"  onChange={(event) => this.changeValue1(event,"dosage",index)} value={Drug.Dosage} className="form-control" id="Dosage" placeholder=""/>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="form-group" >
                                    <label style={{fontSize:"10px", padding:"0px"}} for="Unit" className="d-flex">Unit:</label>
                                    <select onChange={(event) => this.changeValue1(event,"unit",index)} value={Drug.Unit} style={{fontSize:"10px",color:"black",fontWeight:"700"}} class="form-control" id="Unit">
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
                                      <select onChange={(event) => this.changeValue1(event,"freq",index)} value={Drug.Frequancy} style={{fontSize:"10px",color:"black",fontWeight:"700"}} class="form-control" id="Unit">
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
                                <textarea style={{fontSize:"12px",color:"black",fontWeight:"700"}} value={Drug.Instructions} onChange={(event) => this.changeValue1(event,"inst",index)} class="form-control" id="Instructions" placeholder="Before food , After food … ETC" rows="4"></textarea>
                              </div>
                            </div>
                            <div style={{color:"black",borderBottom:'0.5px solid #707070'}} className="col-3 ">
                              <div style={{minHeight:"100px"}}  className="row d-flex align-items-center justify-content-between">
                                <div style={{borderRight:'0.5px solid #707070',minHeight:"140px",color:"black",fontWeight:"500"}} className="col-9 d-flex align-items-center">
                                  <div className="form-group">
                                    <input style={{fontSize:"15px",color:"black",fontWeight:"700"}} autocomplete="off" type="text"  onChange={(event) => this.changeValue1(event,"duration",index)} value={Drug.Duration} className="form-control" id="Dosage" placeholder=""/>
                                  </div>
                                </div>
                                <div className="col-3 d-flex align-items-center">
                                  <i onClick={() => this.deleteDrug1(index)} style={{cursor:"pointer"}} class="fas fa-trash-alt"></i>
                                </div>
                              </div>
                            </div>
                        </div>
                        </div>
                        ))}


                          <div className="row mt-2">
                            <div class="input-group col-6">
                              <input onKeyUp={event => event.key === "Enter" ? this.addDrug1(event) : null}  type="search" class="form-control rounded" placeholder="Type name of the drug and press 'Enter'" aria-label="Search" aria-describedby="search-addon" />
                            </div>
                          </div>
                          
                          <div className="row mt-2">
                            <div class="form-group col-12">
                                <label style={{fontSize:"20px",fontWeight:"600"}} for="PrescriptionNote" className="d-flex">Prescription Note:</label>
                                <textarea style={{fontSize:"15px"}} class="form-control" id="PrescriptionNote" placeholder="" rows="4"></textarea>
                              </div>
                          </div>

                          <div className="row mt-3">
                              <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-primary btn-lg">Save Changes</button>
                              </div>         
                          </div>
                          
                        </div>
                      </div>
                    </div>
                </div>
                }
              </div>
              
          }
          
        </div>
      );
    } 
  }
  const mapStateToProps = state =>{
    return{
      DoctorID:state.DoctorID
    };
  };

  export default connect(mapStateToProps, null)(PrescriptionsPage);
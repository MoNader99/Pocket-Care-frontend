import React from 'react';
import './ChatPage.scss';

class ChatPage extends React.Component {
    state={
        inputValue:"",
        Messages:[
            {msg:"hi i'm Mohammed Nader",type:"received"},
            {msg:"Good morning Mohammed",type:"sent"},
            {msg:"لو سمحت عاوز اعرف التشخيص بتاعي",type:"received"},
            {msg:"منا قولتهولك هي حكاية",type:"sent"},
            {msg:"يا دكتور ",type:"received"},
            {msg:"يا نعم",type:"sent"},
            {msg:"ابعت التشخيص لو سمحت يا محترم بدل ما ازعلك",type:"received"},
            {msg:"ابعت التشخيص لو سمحت يا محترم بدل ما ازعلك",type:"received"},
            {msg:"ابعت التشخيص لو سمحت يا محترم بدل ما ازعلك",type:"received"},
            {msg:"اتكلم بأدب يا ولد",type:"sent"},
            {msg:"اتكلم بأدبببببب",type:"sent"},
            {msg:"لا",type:"received"},
            {msg:"اذاً مفيش تشخصيات ولا روشتات ولا اي حاجة واخبط دماغك في الحيط",type:"sent"},
            {msg:"بلوك",type:"sent"},
        ],
        chats:[
            {name:"Hoda Hossam",Img:"https://i.ibb.co/w4w0pPW/woman.png",LastMsg:"ميرسي يا دكتور",Time:"12:00 PM"},
            {name:"Mohammed Nader",Img:"https://i.ibb.co/kh3HbC8/man.png",LastMsg:"Thank you so much",Time:"9:00 PM"},
            {name:"Khaled Ayman",Img:"https://i.ibb.co/kh3HbC8/man.png",LastMsg:"شكرا لحضرتك جدا",Time:"5:00 PM"},
            {name:"Doaa Abdelsalam",Img:"https://i.ibb.co/w4w0pPW/woman.png",LastMsg:"انا ميعجبنيش الكلام ده عموما",Time:"3:00 PM"},
            {name:"Hoda Hossam",Img:"https://i.ibb.co/w4w0pPW/woman.png",LastMsg:"ميرسي يا دكتور",Time:"12:00 PM"},
            {name:"Mohammed Nader",Img:"https://i.ibb.co/kh3HbC8/man.png",LastMsg:"Thank you so much",Time:"9:00 PM"},
            {name:"Khaled Ayman",Img:"https://i.ibb.co/kh3HbC8/man.png",LastMsg:"شكرا لحضرتك جدا",Time:"5:00 PM"},
            {name:"Doaa Abdelsalam",Img:"https://i.ibb.co/w4w0pPW/woman.png",LastMsg:"انا ميعجبنيش الكلام ده عموما",Time:"3:00 PM"},
            {name:"Hoda Hossam",Img:"https://i.ibb.co/w4w0pPW/woman.png",LastMsg:"ميرسي يا دكتور",Time:"12:00 PM"},
            {name:"Mohammed Nader",Img:"https://i.ibb.co/kh3HbC8/man.png",LastMsg:"Thank you so much",Time:"9:00 PM"},
            {name:"Khaled Ayman",Img:"https://i.ibb.co/kh3HbC8/man.png",LastMsg:"شكرا لحضرتك جدا",Time:"5:00 PM"},
            {name:"Doaa Abdelsalam",Img:"https://i.ibb.co/w4w0pPW/woman.png",LastMsg:"انا ميعجبنيش الكلام ده عموما",Time:"3:00 PM"},
        ]
    }
    componentDidMount(){
        var objDiv = document.getElementById("scroll");
        objDiv.scrollTop = objDiv.scrollHeight;
    }
    componentDidUpdate(){
        var objDiv = document.getElementById("scroll");
        objDiv.scrollTop = objDiv.scrollHeight;
    }

    SendMsg = (event) => {
		if (event.target.value !== "") {
			var array = this.state.Messages
            array.push({msg:event.target.value,type:"sent"})
            this.setState({ 
                Messages: array,
                inputValue: ""
              });
			event.target.value = "";
		}
	}

    SendMsg2 = (event) => {
		if (this.state.inputValue !== "") {
			var array = this.state.Messages
            array.push({msg:this.state.inputValue,type:"sent"})
            this.setState({ 
                Messages: array,
                inputValue: ""
              });
		}
	}

    changeValue = event => {
        this.setState({ 
            inputValue: event.target.value
        });
	};

  render(){
    return (
      <div className ="Chat-page">
        <div className="">
        <div className="row no-gutters">
        <div  className="col-md-4 border-right">
            <div className="settings-tray row">
                <div classNameName="col-3" style={{color:"#676767",textAlign:"left",fontSize:"28px",fontWeight:"600",padding:"0"}}>Chats</div>
                <div className="search-box col-9">
                    <div className="input-wrapper">
                        <i  className="fas fa-search"></i>
                        <input style={{ marginLeft: "30px"}} placeholder="Search here" type="text"/>
                    </div>
                </div>
            </div>


            <div className="scrollable" style={{minHeight: "590px",maxHeight:"590px",overflowY:"scroll"}}>
                {this.state.chats.map((person,index)=>(
                    <div className="friend-drawer friend-drawer--onhover">
                        <img className="profile-image" src={person.Img} alt=""/>
                        <div className="text">
                            <h6 style={{textAlign:"left"}}>{person.name}</h6>
                            <p style={{textAlign:"left"}} className="text-muted">{person.LastMsg}</p>
                        </div>
                        <span className="time text-muted small d-flex align-items-center">{person.Time}</span>
                    </div>
                ))}
                
            </div>

        </div>


        <div className="col-md-8">
            <div className="settings-tray">
                <div className="friend-drawer no-gutters friend-drawer--grey row">
                <img style={{maxWidth: "50px", height: "50px"}} className="profile-image col-1" src="https://i.ibb.co/kh3HbC8/man.png" alt=""/>
                <div style={{flexDirection:"column"}} className="text col-10 d-flex justify-content-start">
                    <h6 className="d-flex justify-content-start">Mohammed Nader</h6>
                    <p className="text-muted d-flex justify-content-start">Online</p>
                </div>
                <span className="settings-tray--right col-1 d-flex justify-content-end">
                    <i className="fas fa-ellipsis-v d-flex justify-content-end"></i>
                </span>
            </div>
            </div>
            <div style={{minHeight: "590px",maxHeight:"590px",paddingBottom: "45px",overflow:"scroll"}} id="scroll" className="chat-panel scrollable">
            {this.state.Messages.map((message,index)=>(
                <div key={index} className="row no-gutters">
                  <div className={message.type == "received"? "col-12 d-flex justify-content-start" : "col-12 d-flex justify-content-end bubble" } >
                  <div style={{textAlign:"left",minWidth:"max-content"}} className={message.type == "received"? "chat-bubble chat-bubble--left" : "chat-bubble chat-bubble--right" }>
                      {message.msg}
                  </div>
                  </div>
              </div>
            ))}
            <div className="row">
                <div className="col-12">
                <div style={{padding: "10px 10px 10px 15px",marginLeft:"0px", position: "fixed", bottom: "28px" , minWidth: "865px"}} className="chat-box-tray row">
                    <i style={{fontSize:"20px"}} class="fas fa-plus-circle col-1"></i>
                    <input value={this.state.inputValue} onChange={(event) => this.changeValue(event)}  onKeyUp={event => event.key === "Enter" ? this.SendMsg(event) : null} className="col-10" type="text" placeholder="Type your message here..."/>
                    <i onClick={(event)=>this.SendMsg2(event)} style={{fontSize:"20px"}} className="col-1" class="fas fa-location-arrow"></i>
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

export default ChatPage;
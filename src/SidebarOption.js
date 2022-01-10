import React from "react";
import "./SidebarOption.css";
import { useNavigate} from 'react-router-dom';
import db from "./firebase";
 

function SidebarOption({ Icon, title ,id,addChannelOption}) {
  const history=useNavigate();

  const selectChannel=()=>{
    if(id){
      history(`/room/${id}`);
    }else{
      history(title)
    }
  }

  const addChannel=()=>{
    const channelName=prompt('enter channel name')
    if(channelName){
      db.collection('rooms').add(
       {
         name:channelName
      })
    }
  }
 

  return (
    <div className="sdoption"
    onClick={addChannelOption? addChannel :selectChannel}
    >
      {Icon && <Icon className="sidebarOption_icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sdoption_channel">
          <span className="sdoption_channel_hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;

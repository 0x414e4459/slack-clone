import {
  Apps,
  Create,
  Drafts,
  FiberManualRecord,
  FileCopy,
  InsertComment,
} from "@mui/icons-material";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import React, { useState, useEffect } from "react";
import SidebarOption from "./SidebarOption";
import db from "./firebase";
import "./Sidebar.css";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }] = useStateValue();
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <div className="sidebar_header_info">
          <h4> {user?.displayName}</h4>
          <div className="info_sub">
            <FiberManualRecord className="status" />
            <h5>online</h5>
          </div>
        </div>
        <Create />
      </div>
      <SidebarOption Icon={InsertComment} title={"Youtube"} />
      <SidebarOption Icon={Apps} title={"Apps"} />
      <SidebarOption Icon={Drafts} title={"Drafts"} />
      <SidebarOption Icon={FileCopy} title={"filecopy"} />
      <hr />
      <SidebarOption title="react" />
      <hr />
      <SidebarOption title="add channel" Icon={AddSharpIcon} addChannelOption />

      {channels.map((channel) => {
        return <SidebarOption title={channel.name} id={channel.id} />;
      })}
    </div>
  );
}
export default Sidebar;

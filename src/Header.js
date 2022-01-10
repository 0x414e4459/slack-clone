import React from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Help, Search } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="Header">
      <div className="Header_left">
        <Avatar alt={user?.displayName} src={user?.photoURL} />
        <AccessTimeIcon />
      </div>
      <div className="Header_search">
        <Search />
        <input placeholder="Enter the channel name"></input>
      </div>
      <div className="Header_right">
        <Help />
      </div>
    </div>
  );
}

export default Header;

import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./css/SidebarChart.css";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <IconButton>
        <Avatar />
      </IconButton>
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>This is the last message here</p>
      </div>
    </div>
  );
}

export default SidebarChat;

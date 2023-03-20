import React from "react";
import "./css/SideBar.css";
import { Chat, DonutLarge, MoreVert, Search } from "@mui/icons-material";
import { IconButton, Avatar } from "@mui/material";
import SidebarChat from "./SidebarChat";

const SideBar = () => {
  return (
    <div className="sidebar">
      {/* Section 1 */}
      <div className="sidebar_header">
        <IconButton>
          <Avatar src="https://images-platform.99static.com/keeQBkOWsPZHlN4j0dYR5geXi9E=/0x1:1298x1299/500x500/top/smart/99designs-contests-attachments/136/136125/attachment_136125011" />
        </IconButton>
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      {/* Section 2 */}
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <IconButton>
          <Search />
          </IconButton>
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>
      {/* Section 3 */}
      <div className="sidebar_chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default SideBar;

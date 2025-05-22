import React from "react";
import ChatList from "./ChatList";
import "./Sidebar.css";

function Sidebar({ chats, selectedChatId, onSelectChat }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <span>Your inbox</span>
        <span className="sidebar-open-count">{chats.length} Open</span>
      </div>
      <ChatList
        chats={chats}
        selectedChatId={selectedChatId}
        onSelectChat={onSelectChat}
      />
    </aside>
  );
}

export default Sidebar; 
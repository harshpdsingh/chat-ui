import React from "react";
import "./ChatList.css";

function ChatList({ chats, selectedChatId, onSelectChat }) {
  return (
    <ul className="chat-list">
      {chats.map((chat) => (
        <li
          key={chat.id}
          className={`chat-list-item ${
            chat.id === selectedChatId ? "selected" : ""
          }`}
          onClick={() => onSelectChat(chat.id)}
        >
          <div className="avatar">{chat.avatar}</div>
          <div className="chat-info">
            <div className="chat-title-row">
              <span className="chat-title">{chat.name}</span>
              <span className="chat-time">{chat.time}</span>
            </div>
            <div className="chat-last-row">
              <span className="chat-last">{chat.lastMessage}</span>
              {chat.waiting && (
                <span className="chat-waiting-dot" title="Waiting longest"></span>
              )}
              {chat.unread && <span className="chat-unread-dot"></span>}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ChatList; 
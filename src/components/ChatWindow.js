import React from "react";
import Header from "./Header";
import MessageInput from "./MessageInput";
import "./ChatWindow.css";

function ChatWindow({ chat, onSendMessage }) {
  return (
    <section className="chat-window">
      <Header name={chat.name} />
      <div className="chat-messages">
        {chat.messages.length === 0 && (
          <div className="chat-empty">No messages yet.</div>
        )}
        {chat.messages.map((msg, idx) => (
          <div
            key={idx}
            className={`chat-message-bubble ${
              msg.from === "me" ? "me" : "them"
            }`}
          >
            <div className="chat-message-text">{msg.text}</div>
            <div className="chat-message-meta">
              <span>{msg.time}</span>
              {msg.from === "me" && msg.seen && (
                <span className="chat-message-seen">Seen</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <MessageInput onSend={onSendMessage} />
    </section>
  );
}

export default ChatWindow; 
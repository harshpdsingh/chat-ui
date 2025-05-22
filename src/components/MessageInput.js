import React, { useState } from "react";
import "./MessageInput.css";

function MessageInput({ onSend }) {
  const [value, setValue] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (value.trim()) {
      onSend(value.trim());
      setValue("");
    }
  };

  return (
    <form className="message-input-form" onSubmit={handleSend}>
      <input
        className="message-input"
        type="text"
        placeholder="Type your message..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="message-send-btn" type="submit">
        <span role="img" aria-label="Send">➤</span>
      </button>
    </form>
  );
}

export default MessageInput; 
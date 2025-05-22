import React from "react";
import "./Header.css";

function Header({ name }) {
  return (
    <div className="chat-header">
      <span className="chat-header-title">{name}</span>
      <button className="chat-header-close" title="Close">
        &#10005;
      </button>
    </div>
  );
}

export default Header; 
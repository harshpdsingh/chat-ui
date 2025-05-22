import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";
import AICopilotPanel from "./components/AICopilotPanel";
import "./App.css";

const initialChats = [
  {
    id: 1,
    name: "Luis - Github",
    lastMessage: "Hey! I have a question...",
    time: "45m",
    waiting: true,
    unread: true,
    avatar: "L",
    messages: [
      {
        from: "them",
        text: `I bought a product from your store in November as a Christmas gift for a member of my family. However, it turns out they have something very similar already. I was hoping you'd be able to refund me, as it is un-opened.`,
        time: "1min",
      },
      {
        from: "me",
        text: "Let me just look into this for you, Luis.",
        time: "1min",
        seen: true,
      },
    ],
  },
  {
    id: 2,
    name: "Ivan - Nike",
    lastMessage: "Hi there, I have a qu...",
    time: "30m",
    waiting: true,
    unread: true,
    avatar: "I",
    messages: [
      {
        from: "them",
        text: "Hi there, I have a question about my recent order. The shoes I received are a size too small. Can I exchange them?",
        time: "2min",
      },
      {
        from: "me",
        text: "Absolutely, Ivan! Let me help you with the exchange process.",
        time: "1min",
        seen: true,
      },
    ],
  },
  {
    id: 3,
    name: "Lead from New York",
    lastMessage: "Good morning, let me...",
    time: "40m",
    waiting: false,
    unread: false,
    avatar: "L",
    messages: [
      {
        from: "them",
        text: "Good morning, let me know if you have any questions about our services!",
        time: "10min",
      },
      {
        from: "me",
        text: "Thank you! I will reach out if I need more information.",
        time: "9min",
        seen: true,
      },
    ],
  },
  {
    id: 4,
    name: "Booking API problems",
    lastMessage: "Bug report",
    time: "45m",
    waiting: false,
    unread: false,
    avatar: "B",
    messages: [
      {
        from: "them",
        text: "I'm experiencing issues with the booking API. It returns a 500 error intermittently.",
        time: "5min",
      },
      {
        from: "me",
        text: "Thanks for reporting! We're investigating the issue and will update you soon.",
        time: "4min",
        seen: true,
      },
    ],
  },
  {
    id: 5,
    name: "Miracle - Exemplary Bank",
    lastMessage: "Hey there, I'm here to...",
    time: "45m",
    waiting: false,
    unread: false,
    avatar: "M",
    messages: [
      {
        from: "them",
        text: "Hey there, I'm here to assist you with your banking needs. How can I help today?",
        time: "3min",
      },
      {
        from: "me",
        text: "Hi Miracle, I need to check my last three transactions.",
        time: "2min",
        seen: true,
      },
    ],
  },
];

function App() {
  const [chats, setChats] = useState(initialChats);
  const [selectedChatId, setSelectedChatId] = useState(chats[0].id);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", dark);
  }, [dark]);

  const handleSendMessage = (msg) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === selectedChatId
          ? {
              ...chat,
              messages: [
                ...chat.messages,
                { from: "me", text: msg, time: "now", seen: false },
              ],
              lastMessage: msg,
              unread: false,
            }
          : chat
      )
    );
  };

  const selectedChat = chats.find((c) => c.id === selectedChatId);

  return (
    <>
      <button
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          zIndex: 1000,
          background: "var(--primary)",
          color: "var(--bg-panel)",
          border: "none",
          borderRadius: 8,
          padding: "8px 16px",
          cursor: "pointer"
        }}
        onClick={() => setDark((d) => !d)}
      >
        {dark ? "🌞 Light" : "🌙 Dark"}
      </button>
      <div className="app-container">
        <Sidebar
          chats={chats}
          selectedChatId={selectedChatId}
          onSelectChat={setSelectedChatId}
        />
        <ChatWindow chat={selectedChat} onSendMessage={handleSendMessage} />
        <AICopilotPanel />
      </div>
    </>
  );
}

export default App;

import React from "react";
import "./AICopilotPanel.css";

function AICopilotPanel() {
  return (
    <aside className="ai-copilot-panel">
      <div className="ai-copilot-header">
        <span>AI Copilot</span>
        <span className="ai-copilot-details">Details</span>
      </div>
      <div className="ai-copilot-body">
        <div className="ai-copilot-greeting">
          <span role="img" aria-label="AI">🤖</span>
          <div>
            <div className="ai-copilot-title">Hi, I'm Fin AI Copilot</div>
            <div className="ai-copilot-desc">
              Ask me anything about this conversation.
            </div>
          </div>
        </div>
        <div className="ai-copilot-messages">
          <div className="ai-copilot-message ai-copilot-message-user">
            <span>How do I get a refund?</span>
          </div>
          <div className="ai-copilot-message ai-copilot-message-ai">
            <span>To get a refund, please provide your order number and reason for the return. I'll guide you through the process!</span>
          </div>
          <div className="ai-copilot-message ai-copilot-message-user">
            <span>Can I exchange a product?</span>
          </div>
          <div className="ai-copilot-message ai-copilot-message-ai">
            <span>Yes, exchanges are possible within 30 days of purchase. Let me know your order details to proceed.</span>
          </div>
        </div>
        <div className="ai-copilot-bottom">
          <div className="ai-copilot-suggested">
            <span>Suggested</span>
            <button className="ai-copilot-suggested-btn">
              💸 How do I get a refund?
            </button>
          </div>
          <input
            className="ai-copilot-input"
            type="text"
            placeholder="Ask a question..."
            disabled
          />
        </div>
      </div>
    </aside>
  );
}

export default AICopilotPanel; 
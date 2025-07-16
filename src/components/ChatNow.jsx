import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPaperPlane, 
  faRobot, 
  faUser, 
  faUserMd, 
  faClipboardList, 
  faPills, 
  faMobileAlt,
  faHeartPulse,
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";
import "./css/ChatNow.css";

function ChatNow() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hello! I'm Decmeds AI health assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    },
    {
      id: 2,
      text: "You can ask me about symptoms, medications, or general health advice.",
      sender: "bot",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  // Removed automatic scrolling

  // Sample responses for demo purposes
  const sampleResponses = [
    "Based on the symptoms you described, it could be a common cold. I recommend rest, plenty of fluids, and over-the-counter cold medications. If symptoms worsen, please consult a doctor.",
    "Your symptoms might indicate seasonal allergies. You might want to try antihistamines and avoid allergen exposure. Consider consulting with an allergist for proper diagnosis.",
    "I understand your concern. While I can provide general information, it's best to consult with a healthcare professional for personalized advice about your specific condition.",
    "The medication you mentioned is commonly used for that condition. Common side effects may include drowsiness and nausea. Always follow your doctor's prescription and instructions.",
    "To maintain good health, I recommend a balanced diet, regular exercise, adequate sleep, stress management, and routine health check-ups."
  ];
  
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response with more realistic health-related answers
    setTimeout(() => {
      // Get a random sample response
      const randomResponse = sampleResponses[Math.floor(Math.random() * sampleResponses.length)];
      
      const botResponse = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="chat-now-section">
      <div className="max-width">
        <div className="chat-page-title">
          <h1>Decmeds <span>AI Health Assistant</span></h1>
          <p>Get instant health advice from our advanced AI - available 24/7</p>
        </div>
        
        <div className="chat-container">
          <div className="chat-header">
            <div className="header-content">
              <div className="header-icon">
                <FontAwesomeIcon icon={faRobot} className="chat-icon" />
              </div>
              <div className="header-text">
                <h2>Decmeds Health AI</h2>
                <p className="status"><span className="status-dot"></span> Online • Ready to help</p>
              </div>
            </div>
            <div className="header-actions">
              <button className="info-button" title="Information">
                <FontAwesomeIcon icon={faCircleInfo} />
              </button>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.sender === "user" ? "user-message" : "bot-message"}`}
              >
                <div className="message-avatar">
                  <FontAwesomeIcon
                    icon={message.sender === "user" ? faUser : faRobot}
                    className="avatar-icon"
                  />
                </div>
                <div className="message-content">
                  <div className="message-bubble">
                    <p>{message.text}</p>
                  </div>
                  <span className="message-time">{message.timestamp}</span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="message bot-message">
                <div className="message-avatar">
                  <FontAwesomeIcon icon={faRobot} className="avatar-icon" />
                </div>
                <div className="message-content">
                  <div className="message-bubble typing">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Removed messagesEndRef */}
          </div>

          <div className="chat-input-section">
            <form onSubmit={handleSendMessage} className="chat-form">
              <div className="input-wrapper">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your health question here..."
                  className="chat-input"
                />
                <button type="submit" className="send-button" disabled={inputMessage.trim() === ""}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </form>
            <div className="chat-disclaimer">
              <p>This is a demo AI assistant. Not a substitute for professional medical advice.</p>
            </div>
          </div>
        </div>

        <div className="chat-features">
          <h2 className="features-title">What You Can Ask About</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faUserMd} />
              </div>
              <h3>Health Consultation</h3>
              <p>Get instant health advice from our AI assistant</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faClipboardList} />
              </div>
              <h3>Symptom Checker</h3>
              <p>Describe your symptoms and get preliminary guidance</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faPills} />
              </div>
              <h3>Medication Info</h3>
              <p>Ask about medications and their effects</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FontAwesomeIcon icon={faHeartPulse} />
              </div>
              <h3>24/7 Healthcare</h3>
              <p>Always available to help with your health questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatNow;

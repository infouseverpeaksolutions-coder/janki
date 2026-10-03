import React, { useState, useEffect, useRef } from "react";
import { X, Send, RotateCcw, Minimize2, Sparkles, ShieldCheck } from "lucide-react";
import JankiAICharacter from "./JankiAICharacter";
import JankiAIMessage from "./JankiAIMessage";
import JankiAIQuickOptions from "./JankiAIQuickOptions";
import { QUICK_OPTIONS, getJankiAIResponse } from "./jankiAIResponses";

const getFormattedTime = () => {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const JankiAIChat = ({ onClose, onMinimize, onOpenEligibility }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showInitialQuickOptions, setShowInitialQuickOptions] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Initial Welcome Messages on Chat Open
  useEffect(() => {
    let timer1, timer2, timer3;

    setMessages([
      {
        id: "msg-init-1",
        sender: "bot",
        text: "Hi! 👋 I’m Janki AI. I’m here to help you with your loan-related questions.",
        timestamp: getFormattedTime()
      }
    ]);

    setIsTyping(true);

    timer1 = setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: "msg-init-2",
          sender: "bot",
          text: "What would you like help with?",
          timestamp: getFormattedTime()
        }
      ]);
      setShowInitialQuickOptions(true);
    }, 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Auto-scroll to bottom whenever messages update or typing state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Handle Option Select (from Quick Question Buttons)
  const handleSelectOption = async (option) => {
    if (isTyping) return;

    // Check if this option should trigger the eligibility modal
    if (option.id === "trigger_modal" || option.id === "check_eligibility") {
      if (onOpenEligibility) {
        onOpenEligibility();
      }
    }

    // 1. Add User Message
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: option.text || option.label,
      timestamp: getFormattedTime()
    };

    setMessages((prev) => [...prev, userMsg]);
    setShowInitialQuickOptions(false);
    setIsTyping(true);

    // 2. Fetch Frontend-Only Response
    const response = await getJankiAIResponse(userMsg.text, option.id);
    setIsTyping(false);

    if (response && response.data) {
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response.data.message,
        timestamp: getFormattedTime(),
        subOptions: response.data.subOptions,
        action: response.data.action
      };

      setMessages((prev) => [...prev, botMsg]);

      // If action requires opening modal directly
      if (response.data.action === "OPEN_ELIGIBILITY_MODAL" && onOpenEligibility) {
        // Option to trigger modal
      }
    }
  };

  // Handle Custom Text Send
  const handleSendText = async (e) => {
    e.preventDefault();
    const text = inputText.trim();
    if (!text || isTyping) return;

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text,
      timestamp: getFormattedTime()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText("");
    setShowInitialQuickOptions(false);
    setIsTyping(true);

    // Fetch response (keyword matching or fallback)
    const response = await getJankiAIResponse(text);
    setIsTyping(false);

    if (response && response.data) {
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response.data.message,
        timestamp: getFormattedTime(),
        subOptions: response.data.subOptions
      };

      setMessages((prev) => [...prev, botMsg]);
    }
  };

  // Reset conversation to initial state
  const handleResetChat = () => {
    setMessages([
      {
        id: "msg-reset-1",
        sender: "bot",
        text: "Hi! 👋 I’m Janki AI. I’m here to help you with your loan-related questions.",
        timestamp: getFormattedTime()
      },
      {
        id: "msg-reset-2",
        sender: "bot",
        text: "What would you like help with?",
        timestamp: getFormattedTime()
      }
    ]);
    setShowInitialQuickOptions(true);
    setIsTyping(false);
  };

  return (
    <div className="janki-chat-panel">
      {/* HEADER */}
      <div className="janki-chat-header">
        <div className="janki-header-left">
          <div className="janki-header-avatar-wrapper">
            <JankiAICharacter size={40} showBadge={false} />
            <span className="janki-online-indicator" title="Online" />
          </div>
          <div className="janki-header-info">
            <div className="janki-header-title-row">
              <h3 className="janki-header-name">Janki AI</h3>
              <span className="janki-sparkle-tag">
                <Sparkles size={11} /> AI
              </span>
            </div>
            <div className="janki-header-status-row">
              <span className="janki-status-dot" />
              <span className="janki-header-subtitle">Your Personal Loan Assistant</span>
            </div>
          </div>
        </div>

        <div className="janki-header-actions">
          <button
            type="button"
            className="janki-header-btn"
            onClick={handleResetChat}
            title="Reset Chat"
            aria-label="Reset Chat"
          >
            <RotateCcw size={16} />
          </button>
          <button
            type="button"
            className="janki-header-btn"
            onClick={onMinimize}
            title="Minimize"
            aria-label="Minimize Chat"
          >
            <Minimize2 size={16} />
          </button>
          <button
            type="button"
            className="janki-header-btn janki-header-close-btn"
            onClick={onClose}
            title="Close"
            aria-label="Close Chat"
          >
            <X size={18} />
          </button>
        </div>
      </div>

      {/* MESSAGES BODY */}
      <div className="janki-chat-body">
        <div className="janki-messages-container">
          {messages.map((msg, index) => (
            <JankiAIMessage
              key={msg.id}
              message={msg}
              onSelectOption={handleSelectOption}
              isLast={index === messages.length - 1}
              disabledOptions={isTyping}
            />
          ))}

          {/* Initial Quick Question Chips */}
          {showInitialQuickOptions && (
            <div className="janki-initial-options-box">
              <p className="janki-options-heading">Suggested Quick Questions:</p>
              <JankiAIQuickOptions
                options={QUICK_OPTIONS}
                onSelectOption={handleSelectOption}
                disabled={isTyping}
              />
            </div>
          )}

          {/* Typing Indicator Dots */}
          {isTyping && (
            <div className="janki-msg-row janki-msg-bot">
              <div className="janki-msg-avatar">
                <JankiAICharacter size={30} showBadge={false} />
              </div>
              <div className="janki-bubble-bot janki-typing-bubble">
                <span className="janki-typing-dot"></span>
                <span className="janki-typing-dot"></span>
                <span className="janki-typing-dot"></span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* CHAT INPUT FORM */}
      <form onSubmit={handleSendText} className="janki-chat-footer">
        <div className="janki-input-wrapper">
          <input
            ref={inputRef}
            type="text"
            className="janki-chat-input"
            placeholder="Ask Janki AI anything…"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={isTyping}
          />
          <button
            type="submit"
            className={`janki-send-btn ${inputText.trim() ? "active" : ""}`}
            disabled={!inputText.trim() || isTyping}
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </div>
        <div className="janki-footer-branding">
          <ShieldCheck size={12} className="janki-shield-icon" />
          <span>Powered by Janki Financial Services</span>
        </div>
      </form>
    </div>
  );
};

export default JankiAIChat;

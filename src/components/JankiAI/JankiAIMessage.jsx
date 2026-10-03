import React from "react";
import JankiAICharacter from "./JankiAICharacter";
import JankiAIQuickOptions from "./JankiAIQuickOptions";

/**
 * Helper to render markdown-like text formatting (**bold**, newlines, bullet points)
 */
const renderFormattedText = (text) => {
  if (!text) return null;

  const lines = text.split("\n");
  return lines.map((line, lineIdx) => {
    // Check if line starts with bullet
    const isBullet = line.trim().startsWith("•") || line.trim().startsWith("1.") || line.trim().startsWith("2.") || line.trim().startsWith("3.") || line.trim().startsWith("4.") || line.trim().startsWith("5.");

    // Simple parser for **bold** text
    const parts = line.split(/(\*\*.*?\*\*)/g);
    const formattedLine = parts.map((part, partIdx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={partIdx}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });

    return (
      <React.Fragment key={lineIdx}>
        <span className={isBullet ? "janki-msg-bullet-line" : ""}>
          {formattedLine}
        </span>
        {lineIdx < lines.length - 1 && <br />}
      </React.Fragment>
    );
  });
};

const JankiAIMessage = ({ message, onSelectOption, isLast, disabledOptions }) => {
  const { sender, text, timestamp, subOptions, action } = message;
  const isBot = sender === "bot";

  return (
    <div className={`janki-msg-row ${isBot ? "janki-msg-bot" : "janki-msg-user"}`}>
      {isBot && (
        <div className="janki-msg-avatar">
          <JankiAICharacter size={32} showBadge={false} />
        </div>
      )}

      <div className="janki-msg-content-block">
        <div className={`janki-msg-bubble ${isBot ? "janki-bubble-bot" : "janki-bubble-user"}`}>
          <div className="janki-msg-text">{renderFormattedText(text)}</div>
          
          {timestamp && <span className="janki-msg-time">{timestamp}</span>}
        </div>

        {/* Sub Options / Chips after bot message if present */}
        {isBot && subOptions && subOptions.length > 0 && isLast && (
          <JankiAIQuickOptions
            options={subOptions}
            onSelectOption={onSelectOption}
            disabled={disabledOptions}
          />
        )}
      </div>
    </div>
  );
};

export default JankiAIMessage;

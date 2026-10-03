import React from "react";

/**
 * JankiAIQuickOptions Component
 * Renders quick option chips/buttons matching website design.
 */
const JankiAIQuickOptions = ({ options = [], onSelectOption, disabled = false }) => {
  if (!options || options.length === 0) return null;

  return (
    <div className="janki-quick-options-wrapper">
      <div className="janki-quick-options-grid">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={`janki-option-chip ${option.id === "check_eligibility" || option.id === "trigger_modal" ? "janki-option-chip-highlight" : ""}`}
            onClick={() => !disabled && onSelectOption(option)}
            disabled={disabled}
          >
            <span>{option.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default JankiAIQuickOptions;

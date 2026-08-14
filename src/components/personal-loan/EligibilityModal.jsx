import { useState, useEffect } from "react";
import { X, CheckCircle, ArrowRight, ShieldCheck, User, Briefcase, IndianRupee } from "lucide-react";

const EligibilityModal = ({ isOpen, onClose, initialMobile = "", initialLoanType = "Personal Loan" }) => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState(initialMobile);
  const [fullName, setFullName] = useState("");
  const [loanAmount, setLoanAmount] = useState("500000");
  const [employmentType, setEmploymentType] = useState("Salaried");
  const [monthlyIncome, setMonthlyIncome] = useState("50000");
  const [city, setCity] = useState("Mumbai");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialMobile) setMobile(initialMobile);
  }, [initialMobile]);

  if (!isOpen) return null;

  const handleNextStep1 = (e) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) return;
    setStep(2);
  };

  const handleCalculateEligibility = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 1200);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-header">
          <div className="modal-logo-wrapper">
            <img src="/logo.jpeg" alt="JANKI Logo" className="modal-logo-img" />
          </div>
          <div>
            <h3>
              {initialLoanType.toLowerCase().includes("advisory") || initialLoanType.toLowerCase().includes("consultation") || initialLoanType.toLowerCase().includes("contact")
                ? "Financial Advisory Consultation"
                : `Check ${initialLoanType} Eligibility`}
            </h3>
            <p className="modal-subtitle">
              {initialLoanType.toLowerCase().includes("advisory") || initialLoanType.toLowerCase().includes("consultation") || initialLoanType.toLowerCase().includes("contact")
                ? "Get 1-on-1 expert guidance for loans, debt structuring & wealth planning"
                : "100% Free & No Credit Score Impact"}
            </p>
          </div>
        </div>

        {/* Step Indicator */}
        <div className="modal-steps-indicator">
          <div className={`step-dot ${step >= 1 ? "active" : ""}`}>1. Contact</div>
          <div className="step-line"></div>
          <div className={`step-dot ${step >= 2 ? "active" : ""}`}>2. Details</div>
          <div className="step-line"></div>
          <div className={`step-dot ${step >= 3 ? "active" : ""}`}>3. Offer</div>
        </div>

        {step === 1 && (
          <form onSubmit={handleNextStep1} className="modal-form-step">
            <div className="form-group">
              <label>Full Name</label>
              <div className="input-with-icon">
                <User size={18} className="field-icon" />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Mobile Number</label>
              <div className="input-with-icon">
                <span className="code-prefix">+91</span>
                <input
                  type="tel"
                  placeholder="Enter 10-digit mobile number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  required
                />
              </div>
            </div>

            <button type="submit" className="modal-submit-btn">
              <span>Continue to Loan Details</span>
              <ArrowRight size={18} />
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleCalculateEligibility} className="modal-form-step">
            <div className="form-group">
              <label>Desired Loan Amount (₹)</label>
              <select value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)}>
                <option value="100000">₹1,00,000</option>
                <option value="300000">₹3,00,000</option>
                <option value="500000">₹5,00,000</option>
                <option value="1000000">₹10,00,000</option>
                <option value="2500000">₹25,00,000</option>
                <option value="5000000">₹50,00,000</option>
              </select>
            </div>

            <div className="form-group">
              <label>Employment Type</label>
              <div className="radio-group-boxes">
                <button
                  type="button"
                  className={`radio-box ${employmentType === "Salaried" ? "selected" : ""}`}
                  onClick={() => setEmploymentType("Salaried")}
                >
                  <Briefcase size={16} /> Salaried
                </button>
                <button
                  type="button"
                  className={`radio-box ${employmentType === "Self-Employed" ? "selected" : ""}`}
                  onClick={() => setEmploymentType("Self-Employed")}
                >
                  <User size={16} /> Self-Employed
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>Monthly Take-Home Income (₹)</label>
              <select value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)}>
                <option value="25000">₹25,000 - ₹50,000</option>
                <option value="50000">₹50,000 - ₹1,00,000</option>
                <option value="100000">₹1,00,000 - ₹2,00,000</option>
                <option value="200000">₹2,00,000+</option>
              </select>
            </div>

            <button type="submit" className="modal-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <span>Verifying Eligibility...</span>
              ) : (
                <>
                  <span>Check Approved Offer</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>
        )}

        {step === 3 && (
          <div className="modal-success-step">
            <div className="success-icon-badge">
              <CheckCircle size={48} className="success-check" />
            </div>

            <h3>Congratulations, {fullName || "Customer"}!</h3>
            <p className="success-subtitle">
              You are eligible for up to <strong className="highlight-amount">₹{(Number(loanAmount) * 1.2).toLocaleString("en-IN")}</strong> Personal Loan!
            </p>

            <div className="offer-summary-card">
              <div className="offer-row">
                <span>Pre-Approved Amount:</span>
                <strong>₹{Number(loanAmount).toLocaleString("en-IN")}</strong>
              </div>
              <div className="offer-row">
                <span>Interest Rate:</span>
                <strong className="gold">Starting @ 8.50% p.a.</strong>
              </div>
              <div className="offer-row">
                <span>In-Principle Sanction:</span>
                <strong className="green">Approved ✓</strong>
              </div>
            </div>

            <p className="advisor-note">
              Our personal loan specialist will contact you on <strong>+91 {mobile}</strong> within 15 minutes to complete digital KYC.
            </p>

            <button onClick={handleReset} className="modal-submit-btn">
              Done & Close
            </button>
          </div>
        )}

        <div className="modal-footer-note">
          <ShieldCheck size={14} /> <span>Your data is encrypted & secured by Janki Financial Services.</span>
        </div>
      </div>
    </div>
  );
};

export default EligibilityModal;

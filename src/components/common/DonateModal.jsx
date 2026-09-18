import { useState } from "react";
import { X, Heart, ShieldCheck, CheckCircle2, Copy, Check } from "lucide-react";
import "../../styles/common/donate-modal.css";

const DonateModal = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState("500");
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const upiId = "jankifoundation@upi";

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const finalAmount = customAmount || selectedAmount;

  return (
    <div className="donate-modal-overlay" onClick={onClose}>
      <div className="donate-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="donate-modal-close" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="donate-modal-header">
          <div className="donate-icon-badge">
            <Heart size={24} className="heart-icon" />
          </div>
          <h2>Support Our Financial Literacy & Community Welfare Drive</h2>
          <p>Your contribution empowers underprivileged families with free financial literacy & zero-cost loan advisory services.</p>
        </div>

        {submitted ? (
          <div className="donate-success-box">
            <CheckCircle2 size={48} className="success-icon" />
            <h3>Thank You for Your Generous Support!</h3>
            <p>We have received your pledge for <strong>₹{finalAmount}</strong>. Our team will email your 80G tax benefit receipt shortly.</p>
            <button className="donate-done-btn" onClick={() => { setSubmitted(false); onClose(); }}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="donate-form">
            <div className="form-group">
              <label className="form-label">Select Contribution Amount (₹)</label>
              <div className="amount-pills">
                {["100", "500", "1000", "2500", "5000"].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    className={`amount-pill ${selectedAmount === amt && !customAmount ? "active" : ""}`}
                    onClick={() => {
                      setSelectedAmount(amt);
                      setCustomAmount("");
                    }}
                  >
                    ₹{amt}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Or enter custom amount in ₹"
                className="custom-amount-input"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
              />
            </div>

            <div className="upi-box">
              <div className="upi-info">
                <span>Direct UPI ID:</span>
                <strong>{upiId}</strong>
              </div>
              <button type="button" className="copy-upi-btn" onClick={handleCopyUpi}>
                {copiedUpi ? <Check size={16} /> : <Copy size={16} />}
                <span>{copiedUpi ? "Copied!" : "Copy UPI"}</span>
              </button>
            </div>

            <div className="form-row">
              <div className="form-group half">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  required
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                />
              </div>

              <div className="form-group half">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  placeholder="10-digit mobile"
                  required
                  value={donorPhone}
                  onChange={(e) => setDonorPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Email Address (for tax receipt)</label>
              <input
                type="email"
                placeholder="your@email.com"
                required
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
              />
            </div>

            <div className="tax-benefit-tag">
              <ShieldCheck size={16} />
              <span>100% Secure & Eligible for 80G Tax Deductions</span>
            </div>

            <button type="submit" className="donate-submit-btn">
              <Heart size={18} />
              <span>Pledge ₹{finalAmount || "0"} Contribution</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default DonateModal;

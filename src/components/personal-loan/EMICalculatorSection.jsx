import { useState } from "react";
import { Calculator, ArrowRight } from "lucide-react";
import Container from "../common/Container";

const EMICalculatorSection = ({ onApplyWithParams }) => {
  const [amountInput, setAmountInput] = useState("1000000"); // 10 Lakhs default
  const [rateInput, setRateInput] = useState("8.5"); // 8.5% default
  const [tenureInput, setTenureInput] = useState("24"); // 24 Months default

  const [calculatedResult, setCalculatedResult] = useState(null);

  const formatINR = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleCalculate = (e) => {
    if (e) e.preventDefault();
    const P = Number(amountInput) || 0;
    const r = (Number(rateInput) || 0) / 12 / 100;
    const n = Number(tenureInput) || 1;

    let emi = 0;
    if (r === 0) {
      emi = Math.round(P / n);
    } else {
      emi = Math.round((P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1));
    }

    const totalPayable = emi * n;
    const totalInterest = Math.max(0, totalPayable - P);

    setCalculatedResult({
      principal: P,
      rate: Number(rateInput),
      tenure: n,
      monthlyEMI: emi,
      totalInterest,
      totalPayable
    });
  };

  // Default active values
  const currentP = Number(amountInput) || 1000000;
  const currentR = (Number(rateInput) || 8.5) / 12 / 100;
  const currentN = Number(tenureInput) || 24;
  const activeEmi = currentR === 0 ? Math.round(currentP / currentN) : Math.round((currentP * currentR * Math.pow(1 + currentR, currentN)) / (Math.pow(1 + currentR, currentN) - 1));
  const activePayable = activeEmi * currentN;
  const activeInterest = Math.max(0, activePayable - currentP);

  const displayResult = calculatedResult || {
    principal: currentP,
    rate: Number(rateInput),
    tenure: currentN,
    monthlyEMI: activeEmi,
    totalInterest: activeInterest,
    totalPayable: activePayable
  };

  return (
    <section className="pl-emi-section" id="emi-calculator">
      <Container>
        <div className="emi-outer-card reveal-on-scroll">
          {/* Left Form: Numeric Inputs */}
          <form onSubmit={handleCalculate} className="emi-left-card">
            <div className="emi-card-title-badge">
              <img src="/images/node_calculator.png" alt="EMI Calculator" className="emi-3d-badge-icon" style={{ width: 24, height: 24, objectFit: "contain" }} />
              <span>EMI Calculator</span>
            </div>

            {/* Input 1: Loan Amount */}
            <div className="emi-input-field">
              <label>Desired Loan Amount (₹)</label>
              <div className="emi-input-wrapper">
                <span className="input-prefix">₹</span>
                <input
                  type="number"
                  placeholder="Enter amount (e.g. 500000)"
                  value={amountInput}
                  onChange={(e) => setAmountInput(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Input 2: Interest Rate */}
            <div className="emi-input-field">
              <label>Interest Rate (% p.a.)</label>
              <div className="emi-input-wrapper">
                <input
                  type="number"
                  step="0.1"
                  placeholder="Enter rate (e.g. 8.5)"
                  value={rateInput}
                  onChange={(e) => setRateInput(e.target.value)}
                  required
                />
                <span className="input-suffix">%</span>
              </div>
            </div>

            {/* Input 3: Loan Tenure */}
            <div className="emi-input-field">
              <label>Loan Tenure (Months)</label>
              <div className="emi-input-wrapper">
                <input
                  type="number"
                  placeholder="Enter months (e.g. 24)"
                  value={tenureInput}
                  onChange={(e) => setTenureInput(e.target.value)}
                  required
                />
                <span className="input-suffix">Months</span>
              </div>
            </div>

            {/* Calculate Button */}
            <button type="submit" className="calc-submit-btn">
              <span>Calculate EMI</span>
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Right Card: Calculation Output */}
          <div className="emi-right-content">
            <h2>Plan better with our EMI Calculator</h2>
            <p>Enter your customized figures and get instant monthly repayment breakdown.</p>

            <div className="emi-result-breakdown">
              <div className="result-row main-emi">
                <span>Monthly EMI</span>
                <span className="emi-amount-val">{formatINR(displayResult.monthlyEMI)}</span>
              </div>

              <div className="result-sub-grid">
                <div>
                  <span className="sub-label">Principal Amount</span>
                  <span className="sub-value">{formatINR(displayResult.principal)}</span>
                </div>
                <div>
                  <span className="sub-label">Total Interest</span>
                  <span className="sub-value gold">{formatINR(displayResult.totalInterest)}</span>
                </div>
                <div>
                  <span className="sub-label">Total Amount Payable</span>
                  <span className="sub-value bold">{formatINR(displayResult.totalPayable)}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="calc-now-btn"
              onClick={() => {
                if (onApplyWithParams) {
                  onApplyWithParams({
                    amount: displayResult.principal,
                    rate: displayResult.rate,
                    tenureMonths: displayResult.tenure,
                    monthlyEMI: displayResult.monthlyEMI
                  });
                }
              }}
            >
              <span>Apply for Loan</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EMICalculatorSection;

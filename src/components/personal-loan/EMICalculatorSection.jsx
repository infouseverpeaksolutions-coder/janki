import { useState } from "react";
import {
  Calculator,
  ArrowRight,
  User,
  Home as HomeIcon,
  Building2,
  Car,
  Landmark,
  Coins,
  ChevronRight
} from "lucide-react";
import Container from "../common/Container";

const LOAN_SERVICES = [
  {
    id: "personal-loan",
    name: "Personal Loan",
    icon: User,
    defaultAmount: "500000",
    defaultRate: "10.5",
    defaultTenure: "36",
    path: "/personal-loan#calculator"
  },
  {
    id: "home-loan",
    name: "Home Loan",
    icon: HomeIcon,
    defaultAmount: "3000000",
    defaultRate: "8.5",
    defaultTenure: "180",
    path: "/home-loan#calculator"
  },
  {
    id: "business-loan",
    name: "Business Loan",
    icon: Building2,
    defaultAmount: "1000000",
    defaultRate: "11.0",
    defaultTenure: "48",
    path: "/business-loan#calculator"
  },
  {
    id: "car-loan",
    name: "Car Loan",
    icon: Car,
    defaultAmount: "800000",
    defaultRate: "9.0",
    defaultTenure: "60",
    path: "/car-loan#calculator"
  },
  {
    id: "property-loan",
    name: "Loan Against Property",
    icon: Landmark,
    defaultAmount: "2500000",
    defaultRate: "9.5",
    defaultTenure: "120",
    path: "/property-loan#calculator"
  },
  {
    id: "gold-loan",
    name: "Gold Loan",
    icon: Coins,
    defaultAmount: "200000",
    defaultRate: "8.0",
    defaultTenure: "12",
    path: "/gold-loan#calculator"
  }
];

const EMICalculatorSection = ({ onApplyWithParams }) => {
  const [selectedServiceId, setSelectedServiceId] = useState("personal-loan");
  const [amountInput, setAmountInput] = useState("500000");
  const [rateInput, setRateInput] = useState("10.5");
  const [tenureInput, setTenureInput] = useState("36");

  const [calculatedResult, setCalculatedResult] = useState(null);

  const handleSelectService = (service) => {
    setSelectedServiceId(service.id);
    setAmountInput(service.defaultAmount);
    setRateInput(service.defaultRate);
    setTenureInput(service.defaultTenure);
    setCalculatedResult(null);
  };

  const handleServiceDropdownChange = (e) => {
    const sId = e.target.value;
    const found = LOAN_SERVICES.find((s) => s.id === sId);
    if (found) {
      handleSelectService(found);
    } else {
      setSelectedServiceId(sId);
    }
  };

  const formatINR = (val) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(val);
  };

  const currentP = Number(amountInput) || 500000;
  const currentR = (Number(rateInput) || 10.5) / 12 / 100;
  const currentN = Number(tenureInput) || 36;
  const activeEmi =
    currentR === 0
      ? Math.round(currentP / currentN)
      : Math.round((currentP * currentR * Math.pow(1 + currentR, currentN)) / (Math.pow(1 + currentR, currentN) - 1));
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

  const handleCalculate = (e) => {
    if (e) e.preventDefault();
    setCalculatedResult({
      principal: currentP,
      rate: Number(rateInput),
      tenure: currentN,
      monthlyEMI: activeEmi,
      totalInterest: activeInterest,
      totalPayable: activePayable
    });
  };

  const currentService = LOAN_SERVICES.find((s) => s.id === selectedServiceId) || LOAN_SERVICES[0];

  return (
    <section className="pl-emi-section" id="emi-calculator">
      <Container>
        {/* Header Row: Title line on Left + Small Cards on Right */}
        <div className="emi-header-wrapper reveal-on-scroll">
          <div className="emi-header-left">
            <span className="section-pill-tag">EMI CALCULATORS</span>
            <h2 className="emi-main-title">Calculate Your Monthly Loan EMI</h2>
            <p className="emi-subtitle">
              Select a loan product on the right or use our generalized EMI calculator below to customize amount, rate & tenure.
            </p>
          </div>

          <div className="emi-service-cards-grid">
            {LOAN_SERVICES.map((service) => {
              const Icon = service.icon;
              const isSelected = selectedServiceId === service.id;
              return (
                <div
                  key={service.id}
                  className={`emi-service-chip-card ${isSelected ? "active" : ""}`}
                  onClick={() => handleSelectService(service)}
                  title={`Click to select ${service.name} Calculator`}
                >
                  <div className="chip-icon-box">
                    <Icon size={16} />
                  </div>
                  <div className="chip-text-group">
                    <span className="chip-title">{service.name}</span>
                    <span className="chip-rate-tag">@{service.defaultRate}% p.a.</span>
                  </div>
                  <ChevronRight size={14} className="chip-arrow" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Generalized EMI Calculator Box */}
        <div className="emi-outer-card reveal-on-scroll">
          {/* Left Form: Numeric Inputs */}
          <form onSubmit={handleCalculate} className="emi-left-card">
            <div className="emi-card-title-badge">
              <Calculator size={20} className="text-gold" />
              <span>Generalized EMI Calculator</span>
            </div>

            {/* Input 0: Select Product */}
            <div className="emi-input-field">
              <label>Select Loan Product</label>
              <div className="emi-input-wrapper">
                <select value={selectedServiceId} onChange={handleServiceDropdownChange} className="emi-select-field">
                  {LOAN_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name} (Avg @{s.defaultRate}%)
                    </option>
                  ))}
                  <option value="custom">Custom Loan Product</option>
                </select>
              </div>
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
                  placeholder="Enter rate (e.g. 10.5)"
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
                  placeholder="Enter months (e.g. 36)"
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
            <div className="active-product-badge">
              <span>Selected Product: <strong>{currentService.name}</strong></span>
            </div>
            <h2>Plan better with instant EMI breakdown</h2>
            <p>Enter customized figures or select a loan product to get instant monthly repayment breakdown.</p>

            <div className="emi-result-breakdown">
              <div className="result-row main-emi">
                <span>Estimated Monthly EMI</span>
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
                    loanType: currentService.name,
                    amount: displayResult.principal,
                    rate: displayResult.rate,
                    tenureMonths: displayResult.tenure,
                    monthlyEMI: displayResult.monthlyEMI
                  });
                }
              }}
            >
              <span>Apply for {currentService.name}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default EMICalculatorSection;


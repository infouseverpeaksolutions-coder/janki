import { useState, useEffect } from "react";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Video,
  MapPin,
  ChevronDown,
  ChevronUp,
  User,
  Building2,
  FileText,
  Calculator,
  Award,
  HelpCircle,
  Sparkles,
  BookOpen
} from "lucide-react";

import Container from "../components/common/Container";
import EligibilityModal from "../components/personal-loan/EligibilityModal";
import { partnerBanksData } from "../components/common/BankLogo";
import "../styles/pl-advisory.css";

const PersonalLoanAdvisory = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLoanType, setSelectedLoanType] = useState("Personal Loan Advisory");
  const [openAccordion, setOpenAccordion] = useState("ELIGIBLE");
  const [selectedConsultation, setSelectedConsultation] = useState("Phone");

  // Form State
  const [enquiryForm, setEnquiryForm] = useState({
    fullName: "",
    mobile: "",
    email: "",
    loanAmount: "500000",
    monthlyIncome: "50000",
    purpose: "Personal Use"
  });
  const [submitted, setSubmitted] = useState(false);

  // EMI Calculator State
  const [calcAmount, setCalcAmount] = useState(500000);
  const [calcTenure, setCalcTenure] = useState(36);
  const [calcRoi, setCalcRoi] = useState(10.5);

  // Scroll reveal animation observer
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px",
      threshold: 0.08,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleOpenApply = (loanTitle = "Personal Loan Advisory") => {
    setSelectedLoanType(loanTitle);
    setModalOpen(true);
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setModalOpen(true);
    }, 800);
  };

  // EMI Calculation formula
  const monthlyRate = calcRoi / 12 / 100;
  const emi = Math.round(
    (calcAmount * monthlyRate * Math.pow(1 + monthlyRate, calcTenure)) /
      (Math.pow(1 + monthlyRate, calcTenure) - 1)
  );

  return (
    <div className="pl-advisory-page">
      {/* ----------------------------------------------------
         1. HERO BANNER & QUICK ENQUIRY FORM
      ---------------------------------------------------- */}
      <section className="pla-hero-section">
        <Container>
          <div className="pla-hero-grid">
            {/* Left: Head Banner */}
            <div className="reveal-on-scroll stagger-delay-1">
              <div className="pla-banner-card">
                <img
                  src="/images/pl_advisory_hero.png"
                  alt="Personal Loan Advisory Head Banner"
                  className="pla-banner-img"
                />
                <div className="pla-banner-overlay">
                  <span className="pill-tag">✦ PERSONAL LOAN ADVISORY</span>
                  <h1>PL! Personal Loan Advisory!</h1>
                  <p>
                    Get instant personal loan guidance with interest rates starting @ 10.49% p.a., flexible repayment options, and end-to-end assistance from our senior financial advisors.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Quick Enquiry Form */}
            <div className="pla-enquiry-box reveal-on-scroll stagger-delay-2">
              <h3>Enquiry Form:</h3>
              <p>Fill details to get an instant loan offer & 1-on-1 advisor call</p>

              {submitted ? (
                <div style={{ background: "#ECFDF5", border: "1px solid #10B981", padding: "16px", borderRadius: "12px", color: "#065F46" }}>
                  <h4 style={{ fontSize: "16px", fontWeight: "700", marginBottom: "4px" }}>✓ Request Submitted!</h4>
                  <p style={{ fontSize: "13px", margin: 0 }}>Our personal loan advisor will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit}>
                  <div className="pla-form-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={enquiryForm.fullName}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, fullName: e.target.value })}
                      required
                    />
                  </div>

                  <div className="pla-form-group">
                    <label>Mob. No.</label>
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={enquiryForm.mobile}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, mobile: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                      required
                    />
                  </div>

                  <div className="pla-form-group">
                    <label>Email Id</label>
                    <input
                      type="email"
                      placeholder="Enter email address"
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="pla-form-group">
                    <label>Loan Amt. (₹)</label>
                    <select
                      value={enquiryForm.loanAmount}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, loanAmount: e.target.value })}
                    >
                      <option value="100000">₹1,00,000</option>
                      <option value="300000">₹3,00,000</option>
                      <option value="500000">₹5,00,000</option>
                      <option value="1000000">₹10,00,000</option>
                      <option value="2500000">₹25,00,000</option>
                    </select>
                  </div>

                  <div className="pla-form-group">
                    <label>Monthly Income (₹)</label>
                    <select
                      value={enquiryForm.monthlyIncome}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, monthlyIncome: e.target.value })}
                    >
                      <option value="25000">₹25,000 - ₹50,000</option>
                      <option value="50000">₹50,000 - ₹1,00,000</option>
                      <option value="100000">₹1,00,000+</option>
                    </select>
                  </div>

                  <div className="pla-form-group">
                    <label>Purpose</label>
                    <select
                      value={enquiryForm.purpose}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, purpose: e.target.value })}
                    >
                      <option value="Personal Use">Personal Use</option>
                      <option value="Debt Consolidation">Debt Consolidation</option>
                      <option value="Home Renovation">Home Renovation</option>
                      <option value="Medical Emergency">Medical Emergency</option>
                      <option value="Wedding / Function">Wedding / Function</option>
                    </select>
                  </div>

                  <button type="submit" className="pla-enquiry-btn">
                    <span>Submit Enquiry</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------
         2. TRUSTED PARTNER BANKS RIBBON WITH BRAND LOGOS
      ---------------------------------------------------- */}
      <section className="pla-partners-section reveal-on-scroll">
        <Container>
          <div className="pla-partners-header">
            <div>
              <span className="pill-tag">OFFICIAL BANK NETWORK</span>
              <h3>TRUSTED PARTNER! → 30+ Leading Bank & NBFC Partners</h3>
            </div>
          </div>

          <div className="pla-partners-grid">
            {partnerBanksData.map((bank, index) => {
              const Logo = bank.Logo;
              return (
                <div
                  key={bank.id}
                  className={`pla-partner-brand-card reveal-on-scroll stagger-delay-${(index % 5) + 1}`}
                  onClick={() => handleOpenApply(`${bank.name} Personal Loan`)}
                >
                  <div className="pla-partner-logo-box">
                    <Logo />
                  </div>
                  <span className="pla-partner-name">{bank.name}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------
         3. HOW IT WORKS (5-Step Horizontal Timeline)
      ---------------------------------------------------- */}
      <section className="pla-how-section reveal-on-scroll">
        <Container>
          <div className="pla-section-row">
            <div className="pla-section-label reveal-on-scroll stagger-delay-1">
              <span className="pill-tag">STEPS TO GET LOAN</span>
              <h2>HOW IT WORKS</h2>
              <p>Simple 5-step transparent approval journey</p>
            </div>

            <div className="pla-steps-timeline">
              {/* Step 1 */}
              <div className="pla-step-node reveal-on-scroll stagger-delay-1">
                <span className="pla-step-tag">STEP 1: APPLY</span>
                <h4>TALK OUR ADVISOR</h4>
                <p>Profile assessment & loan requirement mapping with our senior financial expert.</p>
              </div>

              {/* Step 2 */}
              <div className="pla-step-node reveal-on-scroll stagger-delay-2">
                <span className="pla-step-tag">STEP 2: SUPPORT</span>
                <h4>DOCUMENT SUBMISSION</h4>
                <p>Seamless document submission & verification support to target bank.</p>
              </div>

              {/* Step 3 */}
              <div className="pla-step-node reveal-on-scroll stagger-delay-3">
                <span className="pla-step-tag">STEP 3: VERIFICATION</span>
                <h4>LENDER MATCHING</h4>
                <p>Keep moving in our guidance with best ROI & maximum LCR lender matching.</p>
              </div>

              {/* Step 4 */}
              <div className="pla-step-node reveal-on-scroll stagger-delay-4">
                <span className="pla-step-tag">STEP 4: APPROVAL</span>
                <h4>GET APPROVAL</h4>
                <p>Fast-track bank sanction letter & approval verification.</p>
              </div>

              {/* Step 5 */}
              <div className="pla-step-node reveal-on-scroll stagger-delay-5">
                <span className="pla-step-tag">STEP 5: DISBURSAL</span>
                <h4>RECEIVE YOUR FUNDS</h4>
                <p>Direct bank account credit within 24 hours of approval.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------
         4. WHAT MAKES US BETTER (7 Feature Cards)
      ---------------------------------------------------- */}
      <section className="pla-better-section reveal-on-scroll">
        <Container>
          <div className="pla-section-row" style={{ marginBottom: "30px" }}>
            <div className="pla-section-label reveal-on-scroll">
              <span className="pill-tag">WHY CHOOSE JANKI</span>
              <h2>WHAT MAKES US BETTER</h2>
            </div>
          </div>

          <div className="pla-better-grid">
            {/* Feature 1 */}
            <div className="pla-feature-card reveal-on-scroll stagger-delay-1">
              <div className="pla-feature-icon">⊙</div>
              <div className="pla-feature-info">
                <h4>PARTNER POOL</h4>
                <p>Access to 30+ leading banks & NBFC partners under one roof.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="pla-feature-card reveal-on-scroll stagger-delay-2">
              <div className="pla-feature-icon">⊙</div>
              <div className="pla-feature-info">
                <h4>HIGHEST LOAN AMOUNT LCR</h4>
                <p>Get maximum loan sanction based on your income multiplier.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="pla-feature-card reveal-on-scroll stagger-delay-3">
              <div className="pla-feature-icon">⊙</div>
              <div className="pla-feature-info">
                <h4>MINIMUM ROI & FEES</h4>
                <p>Lowest interest rates starting @ 10.49% & minimal processing fees.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="pla-feature-card reveal-on-scroll stagger-delay-4">
              <div className="pla-feature-icon">⊙</div>
              <div className="pla-feature-info">
                <h4>100% TRANSPARENT</h4>
                <p>Zero hidden charges, clear terms & complete fee transparency.</p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="pla-feature-card reveal-on-scroll stagger-delay-5">
              <div className="pla-feature-icon">⊙</div>
              <div className="pla-feature-info">
                <h4>DEDICATED RELATIONSHIP MANAGER</h4>
                <p>Single point expert advisor for end-to-end loan application support.</p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="pla-feature-card reveal-on-scroll stagger-delay-6">
              <div className="pla-feature-icon">⊙</div>
              <div className="pla-feature-info">
                <h4>MAXIMUM LOAN TENURE</h4>
                <p>Flexible repayment tenure options up to 7 years (84 months).</p>
              </div>
            </div>

            {/* Feature 7 */}
            <div className="pla-feature-card reveal-on-scroll stagger-delay-1" style={{ gridColumn: "span 2" }}>
              <div className="pla-feature-icon">⊙</div>
              <div className="pla-feature-info">
                <h4>QUICK APPROVAL & FAST DISBURSEMENT</h4>
                <p>Instant digital verification & fast cash credit within 24 hours.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------
         5. ACCORDION & BOOK CONSULTATION DOUBLE SECTION
      ---------------------------------------------------- */}
      <section className="pla-details-section reveal-on-scroll">
        <Container>
          <div className="pla-details-grid">
            {/* Left Accordion */}
            <div className="reveal-on-scroll stagger-delay-1">
              <span className="pill-tag">COMPLETE DETAILS</span>
              <div className="section-wireframe-title" style={{ marginBottom: "20px" }}>
                <h2>Personal Loan Advisory Guide</h2>
              </div>

              <div className="pla-accordion-list">
                {/* 1. Who is Eligible */}
                <div className="pla-accordion-item">
                  <div
                    className="pla-accordion-header"
                    onClick={() => setOpenAccordion(openAccordion === "ELIGIBLE" ? "" : "ELIGIBLE")}
                  >
                    <h4><User size={18} className="text-gold" /> WHO IS ELIGIBLE</h4>
                    {openAccordion === "ELIGIBLE" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  {openAccordion === "ELIGIBLE" && (
                    <div className="pla-accordion-body">
                      <p>
                        <strong>Eligible Categories:</strong> Salaried Employees, Self-Employed Professionals (Doctors, CAs), and Business Owners.
                      </p>
                      <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
                        <li>Min Age: 21 Years | Max Age: 60 Years</li>
                        <li>Min Monthly Net Income: ₹25,000/month</li>
                        <li>Min CIBIL Score: 700+</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* 2. Document Required */}
                <div className="pla-accordion-item">
                  <div
                    className="pla-accordion-header"
                    onClick={() => setOpenAccordion(openAccordion === "DOCS" ? "" : "DOCS")}
                  >
                    <h4><FileText size={18} className="text-gold" /> DOCUMENT REQ.</h4>
                    {openAccordion === "DOCS" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  {openAccordion === "DOCS" && (
                    <div className="pla-accordion-body">
                      <p>Basic KYC and Income proof required:</p>
                      <ul style={{ paddingLeft: "20px", margin: "8px 0" }}>
                        <li>ID & Address Proof: PAN Card, Aadhaar Card, Passport</li>
                        <li>Income Proof: Latest 3 Months Salary Slips & 6 Months Bank Statement</li>
                        <li>Form 16 or ITR for last 2 years</li>
                      </ul>
                      <button
                        className="pla-advisor-cta-btn"
                        onClick={() => handleOpenApply("Document Verification Advisor")}
                      >
                        <span>SPEAK TO OUR ADVISOR</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                </div>

                {/* 3. Testimonial */}
                <div className="pla-accordion-item">
                  <div
                    className="pla-accordion-header"
                    onClick={() => setOpenAccordion(openAccordion === "TESTIMONIAL" ? "" : "TESTIMONIAL")}
                  >
                    <h4><Award size={18} className="text-gold" /> TESTIMONIALS</h4>
                    {openAccordion === "TESTIMONIAL" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  {openAccordion === "TESTIMONIAL" && (
                    <div className="pla-accordion-body">
                      <p style={{ fontStyle: "italic", color: "#374151" }}>
                        "Janki Financial Services helped me get my ₹8 Lakh personal loan sanctioned in just 18 hours at 10.5% interest rate. Extremely professional advisory team!"
                      </p>
                      <strong style={{ display: "block", marginTop: "6px", color: "#0D2447" }}>— Rajesh Sharma, Senior Software Engineer</strong>
                    </div>
                  )}
                </div>

                {/* 4. EMI Calculator */}
                <div className="pla-accordion-item">
                  <div
                    className="pla-accordion-header"
                    onClick={() => setOpenAccordion(openAccordion === "EMI" ? "" : "EMI")}
                  >
                    <h4><Calculator size={18} className="text-gold" /> EMI CALCULATOR</h4>
                    {openAccordion === "EMI" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  {openAccordion === "EMI" && (
                    <div className="pla-accordion-body">
                      <div style={{ background: "#F8F9FB", padding: "16px", borderRadius: "12px", marginTop: "6px" }}>
                        <div style={{ marginBottom: "12px" }}>
                          <label style={{ fontSize: "12px", fontWeight: "700", display: "block", marginBottom: "4px" }}>
                            Loan Amount: ₹{calcAmount.toLocaleString("en-IN")}
                          </label>
                          <input
                            type="range"
                            min="50000"
                            max="2500000"
                            step="50000"
                            value={calcAmount}
                            onChange={(e) => setCalcAmount(Number(e.target.value))}
                            style={{ width: "100%" }}
                          />
                        </div>

                        <div style={{ marginBottom: "12px" }}>
                          <label style={{ fontSize: "12px", fontWeight: "700", display: "block", marginBottom: "4px" }}>
                            Tenure: {calcTenure} Months
                          </label>
                          <input
                            type="range"
                            min="12"
                            max="84"
                            step="6"
                            value={calcTenure}
                            onChange={(e) => setCalcTenure(Number(e.target.value))}
                            style={{ width: "100%" }}
                          />
                        </div>

                        <div style={{ background: "#0D2447", color: "#FFF", padding: "12px 16px", borderRadius: "10px", textAlign: "center" }}>
                          <span style={{ fontSize: "12px", opacity: 0.8 }}>Estimated Monthly EMI</span>
                          <h3 style={{ fontSize: "22px", margin: 0, color: "#C89B3C" }}>₹{emi.toLocaleString("en-IN")} / mo</h3>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 5. Trusted By */}
                <div className="pla-accordion-item">
                  <div
                    className="pla-accordion-header"
                    onClick={() => setOpenAccordion(openAccordion === "TRUSTED" ? "" : "TRUSTED")}
                  >
                    <h4><ShieldCheck size={18} className="text-gold" /> TRUSTED BY</h4>
                    {openAccordion === "TRUSTED" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  {openAccordion === "TRUSTED" && (
                    <div className="pla-accordion-body">
                      <p>
                        Trusted by over <strong>10,000+ satisfied borrowers</strong> and top corporate employees across India. 100% data privacy & bank-grade encryption.
                      </p>
                    </div>
                  )}
                </div>

                {/* 6. FAQ */}
                <div className="pla-accordion-item">
                  <div
                    className="pla-accordion-header"
                    onClick={() => setOpenAccordion(openAccordion === "FAQ" ? "" : "FAQ")}
                  >
                    <h4><HelpCircle size={18} className="text-gold" /> FREQUENTLY ASKED QUESTIONS</h4>
                    {openAccordion === "FAQ" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  {openAccordion === "FAQ" && (
                    <div className="pla-accordion-body">
                      <p>
                        <strong>Q: How fast is the loan disbursed?</strong><br />
                        A: Once your documents are verified, the loan amount is credited directly to your bank account within 24 hours.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Book Consultation Card */}
            <div className="pla-consultation-card reveal-on-scroll stagger-delay-2">
              <div>
                <span className="pill-tag">1-ON-1 APPOINTMENT</span>
                <h3>BOOK CONSULTATION.</h3>
                <p>Choose your preferred mode to connect with our personal loan expert advisor:</p>

                <div className="pla-options-list">
                  {/* Option 1 */}
                  <div
                    className={`pla-option-item ${selectedConsultation === "Office" ? "selected" : ""}`}
                    onClick={() => setSelectedConsultation("Office")}
                  >
                    <div className="pla-option-icon">
                      <MapPin size={20} />
                    </div>
                    <div className="pla-option-text">
                      <h5>In person at our office</h5>
                      <p>Visit Janki Financial Advisory branch</p>
                    </div>
                  </div>

                  {/* Option 2 */}
                  <div
                    className={`pla-option-item ${selectedConsultation === "Phone" ? "selected" : ""}`}
                    onClick={() => setSelectedConsultation("Phone")}
                  >
                    <div className="pla-option-icon">
                      <PhoneCall size={20} />
                    </div>
                    <div className="pla-option-text">
                      <h5>Over phone call with our expert</h5>
                      <p>1-on-1 instant advisor call</p>
                    </div>
                  </div>

                  {/* Option 3 */}
                  <div
                    className={`pla-option-item ${selectedConsultation === "Meet" ? "selected" : ""}`}
                    onClick={() => setSelectedConsultation("Meet")}
                  >
                    <div className="pla-option-icon">
                      <Video size={20} />
                    </div>
                    <div className="pla-option-text">
                      <h5>Virtual Google meet 📹</h5>
                      <p>Face-to-face video consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="pla-schedule-btn"
                onClick={() => handleOpenApply(`Book Consultation - ${selectedConsultation}`)}
              >
                <span>SCHEDULE NOW</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------
         6. RESOURCES & NEWS BANNER
      ---------------------------------------------------- */}
      <section className="wf-resources-section reveal-on-scroll">
        <Container>
          <div className="wf-resources-grid">
            {/* Left: Resources List */}
            <div className="reveal-on-scroll stagger-delay-1">
              <span className="pill-tag">KNOWLEDGE HUB</span>
              <div className="section-wireframe-title" style={{ marginBottom: "16px" }}>
                <h2>RESOURCES:</h2>
              </div>

              <div className="wf-resource-list">
                <div
                  className="wf-resource-item"
                  onClick={() => handleOpenApply("Insurance Resource Guide")}
                >
                  <div className="wf-resource-bullet">⊙</div>
                  <div className="wf-resource-info">
                    <h4>Newsance - Health Insurance & Life Insurance</h4>
                    <p>Latest policy updates, Tax savings under Sec 80D/80C & cashless networks.</p>
                  </div>
                </div>

                <div
                  className="wf-resource-item"
                  onClick={() => handleOpenApply("Wealth Management Guide")}
                >
                  <div className="wf-resource-bullet">⊙</div>
                  <div className="wf-resource-info">
                    <h4>Wealth Management</h4>
                    <p>High-return SIPs, mutual funds, and long-term financial planning.</p>
                  </div>
                </div>

                <div
                  className="wf-resource-item"
                  onClick={() => handleOpenApply("Direct Support Helpline")}
                >
                  <div className="wf-resource-bullet">⊙</div>
                  <div className="wf-resource-info">
                    <h4>Contact-us: Dedicated Helpline</h4>
                    <p>Direct advisor desk: +91 98706 43210 or support@jankifinance.com</p>
                  </div>
                </div>

                <div
                  className="wf-resource-item"
                  onClick={() => handleOpenApply("Personal Loan Guides")}
                >
                  <div className="wf-resource-bullet">⊙</div>
                  <div className="wf-resource-info">
                    <h4>Resources: Eligibility & Document Checklist</h4>
                    <p>Complete loan document checklist & CIBIL score optimization guide.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: News Banner Card */}
            <div style={{ display: "flex", flexDirection: "column" }} className="reveal-on-scroll stagger-delay-2">
              <div style={{ marginBottom: "16px" }}>
                <span className="pill-tag">FEATURED INSIGHTS</span>
              </div>
              <div className="wf-news-banner-card">
                <div className="wf-news-img-box">
                  <img
                    src="/images/news_banner.png"
                    alt="News Financial Insights"
                  />
                  <span className="wf-news-badge">MARKET INSIGHTS</span>
                </div>
                <div className="wf-news-content">
                  <div>
                    <h3>Personal Loan Interest Rate Guide 2026</h3>
                    <p>
                      Learn how top banks determine interest rates and how working with Janki Financial Services helps you save up to ₹45,000 on total loan interest.
                    </p>
                  </div>
                  <button
                    className="wf-news-btn"
                    onClick={() => handleOpenApply("Rate Guide Article")}
                  >
                    <BookOpen size={16} />
                    <span>Read Full Article</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Interactive Eligibility & Lead Modal */}
      <EligibilityModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialLoanType={selectedLoanType}
      />
    </div>
  );
};

export default PersonalLoanAdvisory;

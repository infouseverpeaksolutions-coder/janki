import { useState, useEffect } from "react";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Mail,
  User,
  Building2,
  Home as HomeIcon,
  Landmark,
  CreditCard,
  FileText,
  TrendingUp,
  Award,
  Sparkles,
  ChevronRight,
  BookOpen
} from "lucide-react";

import Container from "../components/common/Container";
import EligibilityModal from "../components/personal-loan/EligibilityModal";
import "../styles/home-wireframe.css";

const Home = () => {
  const [activeTab, setActiveTab] = useState("VISION");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLoanType, setSelectedLoanType] = useState("Personal Loan");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    service: "Personal Loan Advisory",
    message: ""
  });

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

  const handleOpenApply = (loanTitle = "Personal Loan") => {
    setSelectedLoanType(loanTitle);
    setModalOpen(true);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setModalOpen(true);
    }, 800);
  };

  return (
    <div className="home-wireframe-page">
      {/* ----------------------------------------------------
         1. HERO SECTION (About Us, Vision. Mission. Values.)
      ---------------------------------------------------- */}
      <section className="wf-hero-section reveal-on-scroll">
        <Container>
          <div className="wf-hero-grid">
            <div className="wf-hero-content reveal-on-scroll stagger-delay-1">
              <h1>Smart Financial & Loan Advisory,</h1>
              <p className="wf-hero-tagline">Strategic Guidance. Custom Loans. Total Security.</p>
              <p className="wf-hero-desc">
                Welcome to Janki Financial Services. We are dedicated to delivering strategic financial advisory, competitive loan structuring, and complete wealth protection to help you achieve financial independence.
              </p>

              <button
                className="wf-contact-btn"
                onClick={() => handleOpenApply("Financial Advisory Consultation")}
              >
                <span>CONTACT US</span>
                <ArrowRight size={18} />
              </button>

              <div className="wf-hero-stats">
                <div className="stat-item">
                  <h3>₹500Cr+</h3>
                  <p>Loans Disbursed</p>
                </div>
                <div className="stat-item">
                  <h3>10,000+</h3>
                  <p>Happy Clients</p>
                </div>
                <div className="stat-item">
                  <h3>4.9★</h3>
                  <p>Client Rating</p>
                </div>
              </div>
            </div>

            <div className="wf-hero-visual reveal-on-scroll stagger-delay-2">
              <div className="hero-arch-portal-wrapper">
                <div className="hero-arch-portal" onClick={() => handleOpenApply("Financial Advisory Doorway")}>
                  {/* Arch Door Background Image */}
                  <img
                    src="/images/hero_arch_door.png"
                    alt="Arch Door Financial Gateway"
                    className="arch-background-img"
                  />

                  {/* Inner Chamber viewed through the Open Door */}
                  <div className="arch-inner-chamber">
                    <img
                      src="/logo.jpeg"
                      alt="Janki Financial Services Logo"
                      className="arch-logo-img"
                    />
                    <div className="arch-chamber-tag">
                      JANKI
                      <span>FINANCIAL SERVICES</span>
                    </div>
                  </div>

                  {/* 3D Open Door Panels */}
                  <div className="arch-door-left"></div>
                  <div className="arch-door-right"></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------
         2. ABOUT US (Vision, Mission, Values) + Sumit Advisory Banner
      ---------------------------------------------------- */}
      <section className="wf-about-section reveal-on-scroll">
        <Container>
          <div className="wf-about-grid">
            {/* Left: About Us with Tree Tabs */}
            <div className="wf-about-left reveal-on-scroll stagger-delay-1">
              <span className="pill-tag">OUR PHILOSOPHY</span>
              <div className="section-wireframe-title" style={{ marginBottom: "16px" }}>
                <h2>About Us.</h2>
              </div>
              <p style={{ color: "#6B7280", fontSize: "15px", marginBottom: "20px" }}>
                Our foundation is built on three core pillars that drive our commitment to excellence and client success:
              </p>

              <div className="wf-tree-container">
                {/* 3 Connected Pillars / Tabs */}
                <div className="wf-tree-nodes">
                  <button
                    className={`wf-tree-tab ${activeTab === "VISION" ? "active" : ""}`}
                    onClick={() => setActiveTab("VISION")}
                  >
                    [ VISION ]
                  </button>

                  <button
                    className={`wf-tree-tab ${activeTab === "MISSION" ? "active" : ""}`}
                    onClick={() => setActiveTab("MISSION")}
                  >
                    [ MISSION ]
                  </button>

                  <button
                    className={`wf-tree-tab ${activeTab === "VALUES" ? "active" : ""}`}
                    onClick={() => setActiveTab("VALUES")}
                  >
                    [ VALUES ]
                  </button>
                </div>

                {/* Active Tab Content Card */}
                <div className="wf-tree-content">
                  {activeTab === "VISION" && (
                    <div>
                      <h3>
                        <TrendingUp size={20} className="text-gold" /> Vision
                      </h3>
                      <p>
                        To be India's most trusted and client-centric financial advisory firm, providing transparent loan access, lowest interest rates, and sustainable wealth growth for every family and enterprise.
                      </p>
                    </div>
                  )}

                  {activeTab === "MISSION" && (
                    <div>
                      <h3>
                        <Award size={20} className="text-gold" /> Mission
                      </h3>
                      <p>
                        Our mission is to simplify complex banking processes, negotiate custom loan structures with top lenders, and ensure rapid 24-hour disbursal with 100% transparency and zero hidden charges.
                      </p>
                    </div>
                  )}

                  {activeTab === "VALUES" && (
                    <div>
                      <h3>
                        <ShieldCheck size={20} className="text-gold" /> Values
                      </h3>
                      <p>
                        Integrity, Client-First Dedication, Speed, & Absolute Confidentiality. We put our client's financial health ahead of everything else.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Perfect - Sumit Advisory Banner */}
            <div className="wf-advisory-wrapper reveal-on-scroll stagger-delay-2">
              <div className="wf-advisory-heading">
                <span className="pill-tag">EXPERT GUIDANCE</span>
                <h3>Perfect - Sumit Advisory.</h3>
              </div>

              <div className="wf-advisory-card">
                <div className="wf-advisory-img-box">
                  <img
                    src="/images/advisory_banner.png"
                    alt="Sumit Financial Advisory"
                  />
                  <span className="wf-advisory-tag">EXPERT CONSULTANT</span>
                </div>
                <div className="wf-advisory-body">
                  <div>
                    <h4>Personalized Financial Advisory</h4>
                    <p>
                      Get 1-on-1 consultation from Sumit Advisory team for corporate debt structuring, MSME expansion funding, and high-value loan negotiations.
                    </p>
                  </div>
                  <button
                    className="wf-card-action-btn"
                    onClick={() => handleOpenApply("Sumit Financial Advisory")}
                  >
                    <span>Book Free Consultation</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------
         3. SERVICES : ADVISORY (6 Vertical Service Columns ① to ⑥)
      ---------------------------------------------------- */}
      <section className="wf-services-section reveal-on-scroll">
        <Container>
          <div className="section-wireframe-title reveal-on-scroll">
            <div>
              <span className="pill-tag">WHAT WE PROVIDE</span>
              <h2>Services : Advisory.</h2>
            </div>
            <div className="title-sub-arrow">
              <span>All to provide</span>
              <ArrowRight size={18} />
            </div>
          </div>

          <div className="wf-services-grid">
            {/* ① Personal Loan Advisory */}
            <div className="wf-service-col reveal-on-scroll stagger-delay-1">
              <div className="num-circle">①</div>
              <div className="wf-service-icon">
                <User size={24} />
              </div>
              <h4>Personal Loan Advisory</h4>
              <p>Tailored personal loans with minimal paperwork & instant 24h approval.</p>
              <div
                className="wf-service-link"
                onClick={() => handleOpenApply("Personal Loan Advisory")}
              >
                <span>Learn More</span> <ChevronRight size={14} />
              </div>
            </div>

            {/* ② Business & MSME Loans */}
            <div className="wf-service-col reveal-on-scroll stagger-delay-2">
              <div className="num-circle">②</div>
              <div className="wf-service-icon">
                <Building2 size={24} />
              </div>
              <h4>Business & MSME Loans</h4>
              <p>Unsecured working capital & equipment financing for businesses.</p>
              <div
                className="wf-service-link"
                onClick={() => handleOpenApply("Business & MSME Loans")}
              >
                <span>Learn More</span> <ChevronRight size={14} />
              </div>
            </div>

            {/* ③ Home Loans & Balance Transfers */}
            <div className="wf-service-col reveal-on-scroll stagger-delay-3">
              <div className="num-circle">③</div>
              <div className="wf-service-icon">
                <HomeIcon size={24} />
              </div>
              <h4>Home Loans & Balance Transfers</h4>
              <p>Lowest ROI home loans & seamless balance transfer with top banks.</p>
              <div
                className="wf-service-link"
                onClick={() => handleOpenApply("Home Loan Advisory")}
              >
                <span>Learn More</span> <ChevronRight size={14} />
              </div>
            </div>

            {/* ④ Loan Against Property (LAP) */}
            <div className="wf-service-col reveal-on-scroll stagger-delay-4">
              <div className="num-circle">④</div>
              <div className="wf-service-icon">
                <Landmark size={24} />
              </div>
              <h4>Loan Against Property (LAP)</h4>
              <p>High LTV valuation against residential or commercial properties.</p>
              <div
                className="wf-service-link"
                onClick={() => handleOpenApply("Loan Against Property")}
              >
                <span>Learn More</span> <ChevronRight size={14} />
              </div>
            </div>

            {/* ⑤ Credit Card & Debt Structuring */}
            <div className="wf-service-col reveal-on-scroll stagger-delay-5">
              <div className="num-circle">⑤</div>
              <div className="wf-service-icon">
                <CreditCard size={24} />
              </div>
              <h4>Credit Card & Debt Structuring</h4>
              <p>Smart debt consolidation to reduce interest burden & boost CIBIL.</p>
              <div
                className="wf-service-link"
                onClick={() => handleOpenApply("Debt Structuring")}
              >
                <span>Learn More</span> <ChevronRight size={14} />
              </div>
            </div>

            {/* ⑥ Insurance & Risk Protection */}
            <div className="wf-service-col reveal-on-scroll stagger-delay-6">
              <div className="num-circle">⑥</div>
              <div className="wf-service-icon">
                <ShieldCheck size={24} />
              </div>
              <h4>Insurance & Risk Protection</h4>
              <p>Health, term life & keyman insurance policy customization.</p>
              <div
                className="wf-service-link"
                onClick={() => handleOpenApply("Insurance Protection")}
              >
                <span>Learn More</span> <ChevronRight size={14} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------
         4. LOAN & INSURANCE PRODUCTS (5 Box Bracket Cards)
      ---------------------------------------------------- */}
      <section className="wf-products-section reveal-on-scroll">
        <Container>
          <div className="section-wireframe-title reveal-on-scroll">
            <div>
              <span className="pill-tag">PRODUCT PORTFOLIO</span>
              <h2>Loan :- every loan.</h2>
            </div>
            <div className="title-sub-arrow">
              <span>Insurance. → All to provide</span>
              <ArrowRight size={18} />
            </div>
          </div>

          <div className="wf-products-grid">
            {/* Card ① */}
            <div className="wf-bracket-card reveal-on-scroll stagger-delay-1">
              <div className="wf-card-header">
                <h3>Loan Category</h3>
                <div className="num-circle">①</div>
              </div>
              <ul className="wf-item-list">
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>PL: Personal Loans</strong>
                    <span>Instant Disbursal</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>BL: Business Loans</strong>
                    <span>Collateral Free</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>LAP: Property Loans</strong>
                    <span>High LTV Value</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>HL: Home Loans</strong>
                    <span>Lowest Interest ROI</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>CL: Car & Commercial</strong>
                    <span>Flexible Tenure</span>
                  </div>
                </li>
              </ul>
              <button
                className="wf-card-action-btn"
                onClick={() => handleOpenApply("All Loans Category")}
              >
                <span>Apply for Loan</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Card ② */}
            <div className="wf-bracket-card reveal-on-scroll stagger-delay-2">
              <div className="wf-card-header">
                <h3>Insurance Portfolio</h3>
                <div className="num-circle">②</div>
              </div>
              <ul className="wf-item-list">
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Health Insurance</strong>
                    <span>Cashless Mediclaim</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Life Protection</strong>
                    <span>High Cover Term Plan</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Family Security</strong>
                    <span>Comprehensive Floater</span>
                  </div>
                </li>
              </ul>
              <button
                className="wf-card-action-btn"
                onClick={() => handleOpenApply("Health & Life Insurance")}
              >
                <span>Explore Insurance</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Card ③ */}
            <div className="wf-bracket-card reveal-on-scroll stagger-delay-3">
              <div className="wf-card-header">
                <h3>Loan & Wealth Shield</h3>
                <div className="num-circle">③</div>
              </div>
              <ul className="wf-item-list">
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Loan Insurance</strong>
                    <span>Repayment Shield</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Wealth Strategy</strong>
                    <span>Mutual Funds & SIP</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Asset Advisory</strong>
                    <span>Portfolio Growth</span>
                  </div>
                </li>
              </ul>
              <button
                className="wf-card-action-btn"
                onClick={() => handleOpenApply("Loan Insurance & Wealth")}
              >
                <span>Get Wealth Plan</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Card ④ */}
            <div className="wf-bracket-card reveal-on-scroll stagger-delay-4">
              <div className="wf-card-header">
                <h3>Loan Insurance</h3>
                <div className="num-circle">④</div>
              </div>
              <ul className="wf-item-list">
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Loan Coverage</strong>
                    <span>Against unforeseen events</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Family Shield</strong>
                    <span>Debt Protection Plan</span>
                  </div>
                </li>
              </ul>
              <button
                className="wf-card-action-btn"
                onClick={() => handleOpenApply("Loan Insurance Shield")}
              >
                <span>Protect Your Loan</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Card ⑤ */}
            <div className="wf-bracket-card reveal-on-scroll stagger-delay-5">
              <div className="wf-card-header">
                <h3>Wealth Management</h3>
                <div className="num-circle">⑤</div>
              </div>
              <ul className="wf-item-list">
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>High Yield</strong>
                    <span>Investment Strategies</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Financial Growth</strong>
                    <span>Wealth Freedom Plan</span>
                  </div>
                </li>
              </ul>
              <button
                className="wf-card-action-btn"
                onClick={() => handleOpenApply("Wealth Management Advisory")}
              >
                <span>Consult Wealth Expert</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------
         5. CONTACT US SECTION
      ---------------------------------------------------- */}
      <section className="wf-contact-section reveal-on-scroll" id="contact">
        <Container>
          <div className="wf-contact-card-box reveal-on-scroll">
            <div className="section-wireframe-title" style={{ marginBottom: "12px" }}>
              <h2>Contact- us :</h2>
            </div>
            <p style={{ color: "#6B7280", fontSize: "15px", marginBottom: "24px" }}>
              Have questions about loan interest rates, eligibility, or insurance plans? Request a fast callback below.
            </p>

            {contactSubmitted ? (
              <div style={{ background: "#ECFDF5", border: "1px solid #10B981", padding: "20px", borderRadius: "16px", color: "#065F46" }}>
                <h4 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "4px" }}>✓ Thank You! Your inquiry has been submitted.</h4>
                <p style={{ fontSize: "14px", margin: 0 }}>Our financial consultant will reach out to you within 15 minutes.</p>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="wf-contact-form-grid">
                <div className="wf-input-field">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                  />
                </div>

                <div className="wf-input-field">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                    required
                  />
                </div>

                <div className="wf-input-field wf-input-full">
                  <label>Select Service / Inquiry Type</label>
                  <select
                    value={contactForm.service}
                    onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                  >
                    <option value="Personal Loan Advisory">Personal Loan Advisory</option>
                    <option value="Business & MSME Loans">Business & MSME Loans</option>
                    <option value="Home Loan & Balance Transfer">Home Loan & Balance Transfer</option>
                    <option value="Loan Against Property">Loan Against Property</option>
                    <option value="Insurance & Wealth Management">Insurance & Wealth Management</option>
                  </select>
                </div>

                <div className="wf-input-field wf-input-full">
                  <label>Message (Optional)</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your requirement..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="wf-submit-btn">
                  <span>Submit Inquiry</span>
                  <ArrowRight size={18} />
                </button>
              </form>
            )}
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
                <h2>Resources:</h2>
              </div>

              <div className="wf-resource-list">
                <div
                  className="wf-resource-item"
                  onClick={() => handleOpenApply("Insurance Resource Guide")}
                >
                  <div className="wf-resource-bullet">⊙</div>
                  <div className="wf-resource-info">
                    <h4>Newsance - Health & Life Insurance</h4>
                    <p>Latest policy updates, Tax benefits (Sec 80D), and cashless network hospitals.</p>
                  </div>
                </div>

                <div
                  className="wf-resource-item"
                  onClick={() => handleOpenApply("Wealth Management Guide")}
                >
                  <div className="wf-resource-bullet">⊙</div>
                  <div className="wf-resource-info">
                    <h4>Wealth Management Insights</h4>
                    <p>Investment strategies, SIP returns planner, and financial portfolio balancing.</p>
                  </div>
                </div>

                <div
                  className="wf-resource-item"
                  onClick={() => {
                    const elem = document.getElementById("contact");
                    if (elem) elem.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <div className="wf-resource-bullet">⊙</div>
                  <div className="wf-resource-info">
                    <h4>Contact - us: Direct Support</h4>
                    <p>24x7 client support helpline: +91 98706 43210 or email support@jankifinance.com</p>
                  </div>
                </div>

                <div
                  className="wf-resource-item"
                  onClick={() => handleOpenApply("Financial Calculators")}
                >
                  <div className="wf-resource-bullet">⊙</div>
                  <div className="wf-resource-info">
                    <h4>Resources: EMI & Eligibility Tools</h4>
                    <p>Free loan EMI calculators, interest comparison matrix & document checklists.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: News Banner Card */}
            <div style={{ display: "flex", flexDirection: "column" }} className="reveal-on-scroll stagger-delay-2">
              <div style={{ marginBottom: "16px" }}>
                <span className="pill-tag">FEATURED READ</span>
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
                    <h3>2026 Interest Rate Outlook & Insurance Planning</h3>
                    <p>
                      Discover how recent RBI rate policies affect home loan EMIs and how pairing loan insurance safeguards your family's future assets.
                    </p>
                  </div>
                  <button
                    className="wf-news-btn"
                    onClick={() => handleOpenApply("2026 Interest Rate Article")}
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

export default Home;
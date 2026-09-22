import { useState, useEffect, useRef } from "react";
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
  ChevronLeft,
  BookOpen,
  Users,
  Handshake
} from "lucide-react";

import Container from "../components/common/Container";
import EligibilityModal from "../components/personal-loan/EligibilityModal";
import LoanCategories from "../components/personal-loan/LoanCategories";
import HowItWorks from "../components/personal-loan/HowItWorks";
import WhyChooseJanki from "../components/personal-loan/WhyChooseJanki";
import TestimonialsSection from "../components/personal-loan/TestimonialsSection";
import EMICalculatorSection from "../components/personal-loan/EMICalculatorSection";
import FAQSection from "../components/personal-loan/FAQSection";
import { partnerBanksData } from "../components/common/BankLogo";

import "../styles/home-wireframe.css";
import "../styles/personal-loan.css";

const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry"
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("VISION");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLoanType, setSelectedLoanType] = useState("Personal Loan");
  const [heroMobile, setHeroMobile] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    state: "",
    city: "",
    service: "Personal Loan Advisory",
    message: ""
  });

  const servicesGridRef = useRef(null);

  const scrollServices = (direction) => {
    if (servicesGridRef.current) {
      const firstCard = servicesGridRef.current.querySelector(".wf-service-col");
      const cardWidth = firstCard ? firstCard.offsetWidth + 16 : 290;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      servicesGridRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

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

  const handleSpeakToAdvisory = (e) => {
    if (e) e.preventDefault();
    handleOpenApply("Financial Advisory Consultation");
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
         1. HERO SECTION (Central Logo Orbit & Dynamic Moving Loan Nodes)
      ---------------------------------------------------- */}
      <section className="wf-hero-section" id="home">
        <Container>
          <div className="wf-hero-grid">
            {/* Left Content Column */}
            <div className="wf-hero-content reveal-on-scroll stagger-delay-1">
              <div className="hero-pill-badge">
                <Users size={16} className="hero-pill-icon" />
                <span>ADVISORY THAT PUTS YOU FIRST</span>
              </div>

              <h1 className="hero-main-title">
                Your Goals.
                <br />
                <span className="gold-highlight">Our Advice.</span>
                <br />
                <span className="navy-highlight">The Right Loan.</span>
              </h1>

              <p className="wf-hero-desc">
                We are a loan advisory firm that compares multiple options from 20+ trusted lenders to find the best fit for you.
              </p>

              {/* 4 Feature Badges */}
              <div className="hero-features-grid">
                <div className="hero-feature-item">
                  <ShieldCheck size={18} className="feat-icon" />
                  <span>100% Independent Advice</span>
                </div>
                <div className="hero-feature-item">
                  <FileText size={18} className="feat-icon" />
                  <span>Compare Multiple Lenders</span>
                </div>
                <div className="hero-feature-item">
                  <User size={18} className="feat-icon" />
                  <span>Expert Guidance Every Step</span>
                </div>
                <div className="hero-feature-item">
                  <ShieldCheck size={18} className="feat-icon" />
                  <span>Transparent & Secure Process</span>
                </div>
              </div>

              {/* Hero Action Buttons: Explore Loan Options & Talk to an Advisor */}
              <div className="hero-cta-group">
                <button
                  type="button"
                  className="hero-primary-btn"
                  onClick={() => {
                    const elem = document.getElementById("loans");
                    if (elem) elem.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span>Explore Loan Options</span>
                  <ArrowRight size={18} />
                </button>
                <button
                  type="button"
                  className="hero-secondary-btn"
                  onClick={() => handleOpenApply("Financial Advisory Consultation")}
                >
                  <PhoneCall size={18} />
                  <span>Talk to an Advisor</span>
                </button>
              </div>

              {/* Trust Rating Bar */}
              <div className="hero-trust-bar">
                <div className="avatar-stack">
                  <img src="/images/customer_priya.png" alt="Happy Customer 1" className="avatar-img" />
                  <img src="/images/customer_rahul.png" alt="Happy Customer 2" className="avatar-img" />
                  <img src="/images/customer_amit.png" alt="Happy Customer 3" className="avatar-img" />
                </div>
                <div className="trust-text-group">
                  <span className="trust-text">Trusted by 10,000+ Happy Customers</span>
                  <div className="trust-stars">
                    <span className="stars-gold">★★★★★</span>
                    <span className="rating-score">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Central Logo & 6 Floating Service Nodes */}
            <div className="wf-hero-visual reveal-on-scroll stagger-delay-2">
              <div className="hero-orbit-container">
                <div className="orbit-glow-bg"></div>

                {/* SVG Orbit Lines & Spokes */}
                <svg className="orbit-ring-svg" viewBox="0 0 500 500">
                  <circle cx="250" cy="250" r="190" className="orbit-circle-line" />
                  <circle cx="250" cy="250" r="135" className="orbit-inner-line" />
                  <line x1="250" y1="250" x2="250" y2="60" className="orbit-spoke" />
                  <line x1="250" y1="250" x2="415" y2="155" className="orbit-spoke" />
                  <line x1="250" y1="250" x2="415" y2="345" className="orbit-spoke" />
                  <line x1="250" y1="250" x2="250" y2="440" className="orbit-spoke" />
                  <line x1="250" y1="250" x2="85" y2="345" className="orbit-spoke" />
                  <line x1="250" y1="250" x2="85" y2="155" className="orbit-spoke" />
                </svg>

                {/* Center Logo Hub */}
                <div className="orbit-center-hub">
                  <div className="hub-inner-ring">
                    <svg width="76" height="48" viewBox="0 0 120 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 38 18 L 48 18 L 48 42 C 48 49 43 54 35 54 C 29 54 24 50 23 45 L 30 43 C 31 46 33 48 36 48 C 40 48 42 45 42 42 L 42 18 Z" fill="#0D2447" />
                      <path d="M 52 18 L 74 18 L 74 24 L 59 24 L 59 32 L 71 32 L 71 38 L 59 38 L 59 53 L 52 53 Z" fill="#0D2447" />
                      <path d="M 28 40 Q 52 24 78 12 M 78 12 L 67 14 M 78 12 L 76 23" stroke="url(#goldGradientHub)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="goldGradientHub" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#D4AF37" />
                          <stop offset="100%" stopColor="#8A6208" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <h2 className="hub-title">JANKI</h2>
                    <span className="hub-subtitle">FINANCIAL SERVICES</span>
                    <div className="hub-gold-divider"></div>
                    <p className="hub-motto">
                      Independent Advice.
                      <br />
                      <span className="hub-motto-sub">Better Choices.</span>
                    </p>
                  </div>
                </div>

                {/* 6 Orbiting Service Nodes with floating animation */}
                {/* Node 1: Personal Loan */}
                <div
                  className="orbit-node node-top"
                  onClick={() => handleOpenApply("Personal Loan")}
                  title="Click for Personal Loan Advisory"
                >
                  <div className="node-card">
                    <div className="node-icon-wrapper">
                      <img src="/images/node_personal_loan.png" alt="Personal Loan" className="node-img" />
                    </div>
                    <div className="node-text">
                      <h4>PERSONAL LOAN</h4>
                      <p>For your immediate financial needs</p>
                    </div>
                  </div>
                </div>

                {/* Node 2: Home Loan */}
                <div
                  className="orbit-node node-top-right"
                  onClick={() => handleOpenApply("Home Loan")}
                  title="Click for Home Loan Advisory"
                >
                  <div className="node-card">
                    <div className="node-icon-wrapper">
                      <img src="/images/node_home_loan.png" alt="Home Loan" className="node-img" />
                    </div>
                    <div className="node-text">
                      <h4>HOME LOAN</h4>
                      <p>Make your dream home a reality</p>
                    </div>
                  </div>
                </div>

                {/* Node 3: Car Loan */}
                <div
                  className="orbit-node node-bottom-right"
                  onClick={() => handleOpenApply("Car Loan")}
                  title="Click for Car Loan Advisory"
                >
                  <div className="node-card">
                    <div className="node-icon-wrapper">
                      <img src="/images/node_car_loan.png" alt="Car Loan" className="node-img" />
                    </div>
                    <div className="node-text">
                      <h4>CAR LOAN</h4>
                      <p>Drive your dreams with ease</p>
                    </div>
                  </div>
                </div>

                {/* Node 4: Gold Loan */}
                <div
                  className="orbit-node node-bottom"
                  onClick={() => handleOpenApply("Gold Loan")}
                  title="Click for Gold Loan Advisory"
                >
                  <div className="node-card">
                    <div className="node-icon-wrapper">
                      <img src="/images/node_gold_loan.png" alt="Gold Loan" className="node-img" />
                    </div>
                    <div className="node-text">
                      <h4>GOLD LOAN</h4>
                      <p>Unlock the value of your gold</p>
                    </div>
                  </div>
                </div>

                {/* Node 5: Loan Against Property */}
                <div
                  className="orbit-node node-bottom-left"
                  onClick={() => handleOpenApply("Loan Against Property")}
                  title="Click for Property Loan Advisory"
                >
                  <div className="node-card">
                    <div className="node-icon-wrapper">
                      <img src="/images/node_property_loan.png" alt="Loan Against Property" className="node-img" />
                    </div>
                    <div className="node-text">
                      <h4>LOAN AGAINST PROPERTY</h4>
                      <p>Leverage property for needs</p>
                    </div>
                  </div>
                </div>

                {/* Node 6: Business Loan */}
                <div
                  className="orbit-node node-top-left"
                  onClick={() => handleOpenApply("Business Loan")}
                  title="Click for Business Loan Advisory"
                >
                  <div className="node-card">
                    <div className="node-icon-wrapper">
                      <img src="/images/node_business_loan.png" alt="Business Loan" className="node-img" />
                    </div>
                    <div className="node-text">
                      <h4>BUSINESS LOAN</h4>
                      <p>Fuel your business growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Infinite Bank Partners Marquee Strip */}
        <div className="hero-marquee-wrapper">
          <div className="hero-marquee-header">
            <span className="marquee-label">20+ TRUSTED LENDERS</span>
          </div>
          <div className="hero-marquee-scroll-container">
            <div className="hero-marquee-track">
              {[...partnerBanksData, ...partnerBanksData].map((bank, index) => {
                const LogoComp = bank.Logo;
                return (
                  <div key={`${bank.id}-${index}`} className="marquee-bank-item">
                    <div className="bank-logo-icon">
                      <LogoComp />
                    </div>
                    <span className="bank-name">{bank.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
         1.5 LOAN CATEGORIES (Tailored Financial Solutions For Every Need)
      ---------------------------------------------------- */}
      <LoanCategories onOpenApply={handleOpenApply} />

      {/* ----------------------------------------------------
         2. EXPERT ADVISORY & BOOKING CONSULTATION SECTION
      ---------------------------------------------------- */}
      <section className="wf-about-section reveal-on-scroll" id="about">
        <Container>
          <div className="wf-about-grid" style={{ alignItems: "stretch" }}>
            {/* Left Column: Practice Header & 2x2 Feature Grid */}
            <div className="wf-advisory-practice-left reveal-on-scroll stagger-delay-1">
              <div className="advisory-subtitle-box" style={{ marginBottom: "20px" }}>
                <span className="pill-tag">CORE PRACTICE AREAS</span>
                <h3 style={{ fontSize: "26px", color: "#0D2447", fontWeight: "800", marginTop: "8px", marginBottom: "8px", lineHeight: "1.3" }}>
                  Advisory-led loan & financial services
                </h3>
                <p style={{ color: "#4B5563", fontSize: "14.5px", lineHeight: "1.55" }}>
                  From individual liquidity needs to complex business capital structures — each engagement is led by a senior consultant, not a call-centre.
                </p>
              </div>

              {/* 4 Feature Cards 2x2 Grid */}
              <div className="advisory-cards-2x2">
                <div className="advisory-feature-card">
                  <div className="advisory-card-icon">
                    <Handshake size={22} />
                  </div>
                  <h4>Personalized Bank Matching</h4>
                  <p>
                    We compare offers across 20+ lenders to find the exact fit for your profile — not the highest commission.
                  </p>
                </div>

                <div className="advisory-feature-card">
                  <div className="advisory-card-icon">
                    <Users size={22} />
                  </div>
                  <h4>End-to-End Application Support</h4>
                  <p>
                    Document prep, submission, follow-up and negotiation — handled by a dedicated relationship manager.
                  </p>
                </div>

                <div className="advisory-feature-card">
                  <div className="advisory-card-icon">
                    <CheckCircle2 size={22} />
                  </div>
                  <h4>Higher Approval Odds</h4>
                  <p>
                    Deep underwriting insight means we position your file to maximise sanction probability first time.
                  </p>
                </div>

                <div className="advisory-feature-card">
                  <div className="advisory-card-icon">
                    <Sparkles size={22} />
                  </div>
                  <h4>Transparent Advisory</h4>
                  <p>
                    Flat consulting fee, disclosed lender commissions, and unbiased recommendations. Always.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Senior Financial Advisor Booking Consultation Card */}
            <div className="wf-advisory-wrapper reveal-on-scroll stagger-delay-2">
              <div className="wf-advisory-heading">
                <span className="pill-tag">EXPERT CONSULTATION</span>
                <h3>Book Consultation</h3>
              </div>

              <div className="wf-advisory-card">
                <div className="wf-advisory-img-box">
                  <img
                    src="/images/advisory_banner.png"
                    alt="Senior Financial Advisory Consultant"
                  />
                  <span className="wf-advisory-tag">SENIOR STRATEGIST</span>
                </div>
                <div className="wf-advisory-body">
                  <div>
                    <h4>Personalized Financial Advisory</h4>
                    <p>
                      Get direct 1-on-1 consultation from senior advisory team for corporate debt structuring, MSME expansion funding, and high-value loan negotiations.
                    </p>
                  </div>
                  <button
                    className="wf-card-action-btn"
                    onClick={() => handleOpenApply("Senior Financial Advisory Consultation")}
                  >
                    <PhoneCall size={16} />
                    <span>Book Consultation</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------
         3. SERVICES : ADVISORY (Commented out as requested)
      ---------------------------------------------------- */}
      {/* 
      <section className="wf-services-section reveal-on-scroll" id="advisory">
        <Container>
          <div className="section-wireframe-title reveal-on-scroll">
            <div>
              <span className="pill-tag">WHAT WE PROVIDE</span>
              <h2>Advisory cum service.</h2>
            </div>
            <div className="slider-nav-arrows">
              <button
                type="button"
                className="slider-arrow-btn"
                onClick={() => scrollServices("left")}
                aria-label="Previous service"
                title="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="slider-arrow-btn"
                onClick={() => scrollServices("right")}
                aria-label="Next service"
                title="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="wf-services-grid" ref={servicesGridRef}>
            <div className="wf-service-col reveal-on-scroll stagger-delay-1">
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

            <div className="wf-service-col reveal-on-scroll stagger-delay-2">
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

            <div className="wf-service-col reveal-on-scroll stagger-delay-3">
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

            <div className="wf-service-col reveal-on-scroll stagger-delay-4">
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

            <div className="wf-service-col reveal-on-scroll stagger-delay-5">
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

            <div className="wf-service-col explore-service-col reveal-on-scroll stagger-delay-6">
              <div className="wf-service-icon explore-icon">
                <Sparkles size={24} />
              </div>
              <h4>Explore More Advisory</h4>
              <p>Compare 20+ personalized loan advisory solutions & custom financial plans.</p>
              <div
                className="wf-service-link explore-link"
                onClick={() => handleOpenApply("Explore All Advisory Services")}
              >
                <span>Explore More</span> <ArrowRight size={14} />
              </div>
            </div>
          </div>
        </Container>
      </section>
      */}

      {/* ----------------------------------------------------

      {/* ----------------------------------------------------
         4. LOAN & INSURANCE PRODUCTS (Commented out as requested)
      ---------------------------------------------------- */}
      {/* 
      <section className="wf-products-section reveal-on-scroll" id="loans">
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
            <div className="wf-bracket-card reveal-on-scroll stagger-delay-1">
              <div className="wf-card-header">
                <h3>Loan Category</h3>
                <Landmark size={20} className="card-header-icon" />
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
                    <strong>HL: Home Loans</strong>
                    <span>Lowest Interest ROI</span>
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

            <div className="wf-bracket-card reveal-on-scroll stagger-delay-2" id="insurance">
              <div className="wf-card-header">
                <h3>Insurance Portfolio</h3>
                <ShieldCheck size={20} className="card-header-icon" />
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

            <div className="wf-bracket-card reveal-on-scroll stagger-delay-3">
              <div className="wf-card-header">
                <h3>Loan & Wealth Shield</h3>
                <TrendingUp size={20} className="card-header-icon" />
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

            <div className="wf-bracket-card reveal-on-scroll stagger-delay-4">
              <div className="wf-card-header">
                <h3>Loan Insurance</h3>
                <Award size={20} className="card-header-icon" />
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
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Asset Shield</strong>
                    <span>Property & Life Backed</span>
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

            <div className="wf-bracket-card explore-card-highlight reveal-on-scroll stagger-delay-5">
              <div className="explore-card-inner">
                <div className="explore-sparkle-badge">
                  <Sparkles size={24} />
                </div>
                <h3>Explore More</h3>
                <p>Compare 20+ trusted bank loan rates, insurance plans & customized wealth growth tools.</p>
                <button
                  className="wf-card-action-btn explore-card-btn"
                  onClick={() => handleOpenApply("Explore All Products & Advisory")}
                >
                  <span>Explore More</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      */}

      {/* ----------------------------------------------------
         4.5 WEALTH MANAGEMENT SECTION (Commented out as requested)
      ---------------------------------------------------- */}
      {/* 
      <section className="wf-wealth-section reveal-on-scroll" id="wealth">
        <Container>
          <div className="section-wireframe-title reveal-on-scroll">
            <div>
              <span className="pill-tag">WEALTH & INVESTMENTS</span>
              <h2>Wealth Management :- Plan & Grow.</h2>
            </div>
            <div className="title-sub-arrow">
              <span>Mutual Funds. → SIPs & Assets</span>
              <ArrowRight size={18} />
            </div>
          </div>

          <div className="wf-products-grid">
            <div className="wf-bracket-card reveal-on-scroll stagger-delay-1">
              <div className="wf-card-header">
                <h3>Mutual Funds & SIP</h3>
                <TrendingUp size={20} className="card-header-icon" />
              </div>
              <ul className="wf-item-list">
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>SIP Investments</strong>
                    <span>Systematic Monthly Growth</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Equity Portfolios</strong>
                    <span>High Return Funds</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Debt & Hybrid Funds</strong>
                    <span>Low Risk Stability</span>
                  </div>
                </li>
              </ul>
              <button
                className="wf-card-action-btn"
                onClick={() => handleOpenApply("Mutual Funds & SIP Plan")}
              >
                <span>Start SIP Plan</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="wf-bracket-card reveal-on-scroll stagger-delay-2">
              <div className="wf-card-header">
                <h3>Portfolio Management</h3>
                <Landmark size={20} className="card-header-icon" />
              </div>
              <ul className="wf-item-list">
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Asset Allocation</strong>
                    <span>Balanced Risk Strategy</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>HNI Advisory</strong>
                    <span>Tailored Wealth Freedom</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Goal Based Plans</strong>
                    <span>Retirement & Family</span>
                  </div>
                </li>
              </ul>
              <button
                className="wf-card-action-btn"
                onClick={() => handleOpenApply("Portfolio Management Advisory")}
              >
                <span>Consult Portfolio Expert</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="wf-bracket-card reveal-on-scroll stagger-delay-3">
              <div className="wf-card-header">
                <h3>Fixed Income & Bonds</h3>
                <Award size={20} className="card-header-icon" />
              </div>
              <ul className="wf-item-list">
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Corporate FDs</strong>
                    <span>High Interest Yields</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Sovereign Gold Bonds</strong>
                    <span>RBI Backed Security</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Tax Free Bonds</strong>
                    <span>Guaranteed Annual Payouts</span>
                  </div>
                </li>
              </ul>
              <button
                className="wf-card-action-btn"
                onClick={() => handleOpenApply("Fixed Income & Bonds")}
              >
                <span>Explore Bonds</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="wf-bracket-card reveal-on-scroll stagger-delay-4">
              <div className="wf-card-header">
                <h3>Tax Saving & Security</h3>
                <ShieldCheck size={20} className="card-header-icon" />
              </div>
              <ul className="wf-item-list">
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>ELSS Funds</strong>
                    <span>Tax Savings Sec 80C</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>ULIP Wealth Shield</strong>
                    <span>Growth + Life Cover</span>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} />
                  <div className="wf-item-text">
                    <strong>Capital Gain Bonds</strong>
                    <span>Sec 54EC Tax Exemption</span>
                  </div>
                </li>
              </ul>
              <button
                className="wf-card-action-btn"
                onClick={() => handleOpenApply("Tax Saving Wealth Strategy")}
              >
                <span>Save Taxes Now</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="wf-bracket-card explore-card-highlight reveal-on-scroll stagger-delay-5">
              <div className="explore-card-inner">
                <div className="explore-sparkle-badge">
                  <Sparkles size={24} />
                </div>
                <h3>Explore More</h3>
                <p>Discover 15+ high-yielding investment plans, wealth growth tools & customized tax-saving solutions.</p>
                <button
                  className="wf-card-action-btn explore-card-btn"
                  onClick={() => handleOpenApply("Explore All Wealth Management Services")}
                >
                  <span>Explore More</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      */}

      {/* ----------------------------------------------------
         4.1 HOW IT WORKS (Copied & Synced)
      ---------------------------------------------------- */}
      <HowItWorks onStartApplication={handleOpenApply} />

      {/* ----------------------------------------------------
         4.2 WHY CHOOSE JANKI (Copied & Synced)
      ---------------------------------------------------- */}
      <WhyChooseJanki />

      {/* ----------------------------------------------------
         4.5 1-ON-1 STRATEGY SESSION BANNER
      ---------------------------------------------------- */}
      <section className="wf-strategy-section reveal-on-scroll">
        <Container>
          <div className="strategy-card-wrapper">
            <div className="strategy-grid">
              {/* Left Content */}
              <div className="strategy-left-content">
                <span className="strategy-pill-tag">1-ON-1 STRATEGY SESSION</span>
                <h2>Get direct access to a senior financial strategist.</h2>

                <div className="strategy-features-grid">
                  <div className="strategy-feature-item">
                    <CheckCircle2 size={18} className="strategy-check-icon" />
                    <span>Complete profile & CIBIL evaluation</span>
                  </div>
                  <div className="strategy-feature-item">
                    <CheckCircle2 size={18} className="strategy-check-icon" />
                    <span>Multi-bank rate comparison</span>
                  </div>
                  <div className="strategy-feature-item">
                    <CheckCircle2 size={18} className="strategy-check-icon" />
                    <span>Eligibility & document assessment</span>
                  </div>
                  <div className="strategy-feature-item">
                    <CheckCircle2 size={18} className="strategy-check-icon" />
                    <span>Custom written action plan</span>
                  </div>
                </div>
              </div>

              {/* Right Booking Card */}
              <div className="strategy-right-card">
                <div className="fee-header">
                  <span className="fee-label">Consultation Fee</span>
                  <div className="fee-amount-box">
                    <span className="currency-symbol">₹</span>
                    <span className="fee-price">1,500</span>
                    <span className="session-duration">/ 45-min session</span>
                  </div>
                </div>

                <div className="strategy-divider"></div>

                <ul className="strategy-perks-list">
                  <li>
                    <CheckCircle2 size={16} className="perk-check" />
                    <span>Video or in-office session</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="perk-check" />
                    <span>Written summary emailed</span>
                  </li>
                  <li>
                    <CheckCircle2 size={16} className="perk-check" />
                    <span>No obligation to engage further</span>
                  </li>
                </ul>

                <button
                  className="strategy-book-btn"
                  onClick={() => handleOpenApply("1-on-1 Financial Strategy Session")}
                >
                  <span>Speak with Advisory</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ----------------------------------------------------
         4.6 PLAN BETTER WITH OUR EMI CALCULATOR (Custom Inputs)
      ---------------------------------------------------- */}
      <EMICalculatorSection onApplyWithParams={handleOpenApply} />

      {/* ----------------------------------------------------
         4.7 TRUSTED BY THOUSANDS OF HAPPY CUSTOMERS
      ---------------------------------------------------- */}
      <TestimonialsSection />

      {/* ----------------------------------------------------
         4.8 FREQUENTLY ASKED QUESTIONS (2-Column Desktop Grid)
      ---------------------------------------------------- */}
      <FAQSection />

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
                  <label>
                    Full Name <span style={{ color: "#EF4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                  />
                </div>

                <div className="wf-input-field">
                  <label>
                    Phone Number <span style={{ color: "#EF4444" }}>*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value.replace(/\D/g, "").slice(0, 10) })}
                    required
                  />
                </div>

                <div className="wf-input-field">
                  <label>
                    State <span style={{ color: "#EF4444" }}>*</span>
                  </label>
                  <select
                    value={contactForm.state}
                    onChange={(e) => setContactForm({ ...contactForm, state: e.target.value })}
                    required
                  >
                    <option value="">Select your state</option>
                    {INDIAN_STATES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="wf-input-field">
                  <label>
                    City <span style={{ color: "#9CA3AF", fontWeight: "normal", fontSize: "12px" }}>(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your city"
                    value={contactForm.city}
                    onChange={(e) => setContactForm({ ...contactForm, city: e.target.value })}
                  />
                </div>

                <div className="wf-input-field wf-input-full">
                  <label>
                    Select Service / Inquiry Type <span style={{ color: "#EF4444" }}>*</span>
                  </label>
                  <select
                    value={contactForm.service}
                    onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                    required
                  >
                    <option value="Personal Loan Advisory">Personal Loan Advisory</option>
                    <option value="Business & MSME Loans">Business & MSME Loans</option>
                    <option value="Home Loan & Balance Transfer">Home Loan & Balance Transfer</option>
                    <option value="Loan Against Property">Loan Against Property</option>
                    <option value="Insurance & Wealth Management">Insurance & Wealth Management</option>
                  </select>
                </div>

                <div className="wf-input-field wf-input-full">
                  <label>
                    Message <span style={{ color: "#9CA3AF", fontWeight: "normal", fontSize: "12px" }}>(Optional)</span>
                  </label>
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

      {/* Global Interactive Eligibility & Lead Modal */}
      <EligibilityModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialMobile={heroMobile}
        initialLoanType={selectedLoanType}
      />
    </div>
  );
};

export default Home;
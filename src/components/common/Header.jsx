import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ChevronDown, ArrowRight, Menu, X, PhoneCall } from "lucide-react";

import Container from "./Container";
import "../../styles/common/header.css";

const Header = ({ onOpenApply }) => {
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenus = () => {
    setLoansDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const scrollToSection = (id) => {
    closeMenus();
    if (location.pathname !== "/personal-loan" && location.pathname !== "/") {
      window.location.href = `/personal-loan#${id}`;
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <div className="header-content">
          <NavLink to="/personal-loan" className="brand" onClick={closeMenus}>
            <div className="logo-container">
              <img
                src="/logo.jpeg"
                alt="Janki Financial Services Logo"
                className="brand-logo-img"
              />
            </div>
            <div className="brand-info">
              <h2>JANKI <span className="sub-heading">FINANCIAL SERVICES</span></h2>
            </div>
          </NavLink>

          <nav className={`navigation ${mobileMenuOpen ? "mobile-active" : ""}`}>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={closeMenus}
            >
              Home
            </NavLink>

            <NavLink
              to="/personal-loan#about"
              className="nav-link"
              onClick={() => scrollToSection("why-choose-us")}
            >
              About Us
            </NavLink>

            <div
              className="nav-item-dropdown"
              onMouseEnter={() => setLoansDropdownOpen(true)}
              onMouseLeave={() => setLoansDropdownOpen(false)}
            >
              <button
                className={`nav-link dropdown-btn ${location.pathname.includes("loan") ? "active" : ""}`}
                onClick={() => setLoansDropdownOpen(!loansDropdownOpen)}
              >
                Loans <ChevronDown size={15} className={`chevron ${loansDropdownOpen ? "rotate" : ""}`} />
              </button>

              {loansDropdownOpen && (
                <div className="dropdown-menu">
                  <NavLink
                    to="/personal-loan-advisory"
                    className="dropdown-item highlighted"
                    onClick={closeMenus}
                  >
                    <span className="dot">●</span> Personal Loan Advisory <span className="badge-tag">New</span>
                  </NavLink>
                  <NavLink
                    to="/personal-loan"
                    className="dropdown-item"
                    onClick={closeMenus}
                  >
                    Personal Loan
                  </NavLink>
                  <NavLink
                    to="/personal-loan#loan-categories"
                    className="dropdown-item"
                    onClick={() => scrollToSection("loan-categories")}
                  >
                    Home Loan
                  </NavLink>
                  <NavLink
                    to="/personal-loan#loan-categories"
                    className="dropdown-item"
                    onClick={() => scrollToSection("loan-categories")}
                  >
                    Car Loan
                  </NavLink>
                  <NavLink
                    to="/personal-loan#loan-categories"
                    className="dropdown-item"
                    onClick={() => scrollToSection("loan-categories")}
                  >
                    Business Loan
                  </NavLink>
                  <NavLink
                    to="/personal-loan#loan-categories"
                    className="dropdown-item"
                    onClick={() => scrollToSection("loan-categories")}
                  >
                    Loan Against Property
                  </NavLink>
                </div>
              )}
            </div>

            <button
              className="nav-link nav-btn-link"
              onClick={() => scrollToSection("how-it-works")}
            >
              How It Works
            </button>

            <button
              className="nav-link nav-btn-link"
              onClick={() => scrollToSection("emi-calculator")}
            >
              EMI Calculator
            </button>

            <button
              className="nav-link nav-btn-link"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </button>

            <div className="mobile-only-action">
              <button
                className="apply-now-btn"
                onClick={() => {
                  closeMenus();
                  if (onOpenApply) onOpenApply();
                }}
              >
                Apply Now <ArrowRight size={16} />
              </button>
            </div>
          </nav>

          <div className="header-actions">
            <a href="tel:+919870643210" className="phone-quick">
              <PhoneCall size={16} />
              <span>+91 98706 43210</span>
            </a>
            <button
              className="apply-now-btn"
              onClick={() => {
                if (onOpenApply) onOpenApply();
              }}
            >
              Apply Now <ArrowRight size={16} />
            </button>
            
            <button
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </Container>

      {mobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={closeMenus}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;
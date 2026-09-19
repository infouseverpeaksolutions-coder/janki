import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X, Heart } from "lucide-react";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa6";

import Container from "./Container";
import DonateModal from "./DonateModal";
import "../../styles/common/header.css";

const Header = ({ onOpenApply }) => {
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

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
    if (location.pathname !== "/home" && location.pathname !== "/") {
      navigate(`/home#${id}`);
      setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) elem.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <div className="header-content">
            {/* 1. LOGO */}
            <NavLink to="/home" className="brand" onClick={closeMenus}>
              <div className="logo-container">
                <img
                  src="/logo.jpeg"
                  alt="Janki Financial Services Logo"
                  className="brand-logo-img"
                />
              </div>
              <div className="brand-info">
                <h2>
                  JANKI <span className="sub-heading">FINANCIAL SERVICES</span>
                </h2>
              </div>
            </NavLink>

            {/* NAV ITEMS ALONG X-AXIS */}
            <nav className={`navigation ${mobileMenuOpen ? "mobile-active" : ""}`}>
              {/* Drawer Top Header (Mobile Only Logo) */}
              <div className="mobile-drawer-header">
                <NavLink to="/home" className="brand drawer-brand" onClick={closeMenus}>
                  <div className="logo-container">
                    <img
                      src="/logo.jpeg"
                      alt="Janki Financial Services Logo"
                      className="brand-logo-img"
                    />
                  </div>
                  <div className="brand-info">
                    <h2>
                      JANKI <span className="sub-heading">FINANCIAL SERVICES</span>
                    </h2>
                  </div>
                </NavLink>
              </div>

              {/* 2. Home */}
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                onClick={closeMenus}
              >
                Home
              </NavLink>

              {/* 3. About Us */}
              <button
                type="button"
                className="nav-link nav-btn-link"
                onClick={() => scrollToSection("about")}
              >
                About Us
              </button>

              {/* 4. Advisory */}
              <button
                type="button"
                className="nav-link nav-btn-link"
                onClick={() => scrollToSection("advisory")}
              >
                Advisory
              </button>

              {/* 5. Loans (with dropdown) */}
              <div
                className="nav-item-dropdown"
                onMouseEnter={() => setLoansDropdownOpen(true)}
                onMouseLeave={() => setLoansDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="nav-link dropdown-btn"
                  onClick={() => scrollToSection("loans")}
                >
                  Loans <ChevronDown size={14} className={`chevron ${loansDropdownOpen ? "rotate" : ""}`} />
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
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => scrollToSection("loans")}
                    >
                      Home Loan
                    </button>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => scrollToSection("loans")}
                    >
                      Car Loan
                    </button>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => scrollToSection("loans")}
                    >
                      Business Loan
                    </button>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => scrollToSection("loans")}
                    >
                      Loan Against Property
                    </button>
                  </div>
                )}
              </div>

              {/* 6. Insurance */}
              <button
                type="button"
                className="nav-link nav-btn-link"
                onClick={() => scrollToSection("insurance")}
              >
                Insurance
              </button>

              {/* 7. Wealth Management */}
              <button
                type="button"
                className="nav-link nav-btn-link"
                onClick={() => scrollToSection("wealth")}
              >
                Wealth Management
              </button>

              {/* 8. EMI Calculator */}
              <button
                type="button"
                className="nav-link nav-btn-link"
                onClick={() => scrollToSection("emi-calculator")}
              >
                EMI Calculator
              </button>

              {/* 9. Contact Us */}
              <button
                type="button"
                className="nav-link nav-btn-link"
                onClick={() => scrollToSection("contact")}
              >
                Contact Us
              </button>

              {/* 9. Donate */}
              <button
                type="button"
                className="nav-link donate-nav-btn"
                onClick={() => {
                  closeMenus();
                  setDonateModalOpen(true);
                }}
              >
                <Heart size={14} className="heart-nav-icon" />
                <span>Donate</span>
              </button>

              {/* Mobile version of quick contact box */}
              <div className="mobile-only-action">
                <div className="quick-contact-box">
                  <a href="tel:+919870643210" className="quick-btn call-btn" title="Call Us" aria-label="Call Us">
                    <FaPhone size={14} />
                  </a>
                  <span className="quick-divider"></span>
                  <a
                    href="https://wa.me/919870643210"
                    target="_blank"
                    rel="noreferrer"
                    className="quick-btn wa-btn"
                    title="WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp size={16} />
                  </a>
                  <span className="quick-divider"></span>
                  <a
                    href="mailto:support@jankifinancial.com"
                    className="quick-btn mail-btn"
                    title="Email Us"
                    aria-label="Email Us"
                  >
                    <FaEnvelope size={14} />
                  </a>
                </div>
              </div>
            </nav>

            {/* 10. QUICK CONTACT BOX ON RIGHT [ calling | WA | mail ] & MOBILE MENU HAMBURGER */}
            <div className="header-actions">
              <div className="quick-contact-box header-quick-box">
                <a
                  href="tel:+919870643210"
                  className="quick-btn call-btn"
                  title="Call Us: +91 98706 43210"
                  aria-label="Call Us"
                >
                  <FaPhone size={14} />
                </a>
                <span className="quick-divider"></span>
                <a
                  href="https://wa.me/919870643210"
                  target="_blank"
                  rel="noreferrer"
                  className="quick-btn wa-btn"
                  title="Chat on WhatsApp"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
                <span className="quick-divider"></span>
                <a
                  href="mailto:support@jankifinancial.com"
                  className="quick-btn mail-btn"
                  title="Email Us: support@jankifinancial.com"
                  aria-label="Email Us"
                >
                  <FaEnvelope size={15} />
                </a>
              </div>

              <button
                type="button"
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

      {/* Donate Modal */}
      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
      />
    </>
  );
};

export default Header;
import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, X, Heart, MessageSquareText, Calculator } from "lucide-react";
import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa6";

import Container from "./Container";
import DonateModal from "./DonateModal";
import "../../styles/common/header.css";

const Header = ({ onOpenApply }) => {
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [emiSubDropdownOpen, setEmiSubDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoverPill, setHoverPill] = useState({ left: 0, width: 0, opacity: 0 });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavItemHover = (e) => {
    if (!e || !e.currentTarget) return;
    const target = e.currentTarget;
    setHoverPill({
      left: target.offsetLeft,
      width: target.offsetWidth,
      opacity: 1
    });
  };

  const handleNavMouseLeave = () => {
    setHoverPill((prev) => ({ ...prev, opacity: 0 }));
  };

  const closeMenus = () => {
    setLoansDropdownOpen(false);
    setMoreDropdownOpen(false);
    setEmiSubDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  const triggerHighlight = (elem) => {
    if (!elem) return;
    elem.classList.remove("section-scroll-highlight");
    // Trigger reflow to restart CSS animation
    void elem.offsetWidth;
    elem.classList.add("section-scroll-highlight");
    setTimeout(() => {
      elem.classList.remove("section-scroll-highlight");
    }, 2400);
  };

  const scrollToSection = (id) => {
    closeMenus();
    if (location.pathname !== "/home" && location.pathname !== "/") {
      navigate(`/home#${id}`);
      setTimeout(() => {
        const elem = document.getElementById(id);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
          triggerHighlight(elem);
        }
      }, 150);
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
      triggerHighlight(elem);
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
            <nav
              className={`navigation ${mobileMenuOpen ? "mobile-active" : ""}`}
              onMouseLeave={handleNavMouseLeave}
            >
              {/* Dynamic Sliding Hover Indicator Pill */}
              <div
                className="nav-sliding-pill"
                style={{
                  left: `${hoverPill.left}px`,
                  width: `${hoverPill.width}px`,
                  opacity: hoverPill.opacity
                }}
              />

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
                onMouseEnter={handleNavItemHover}
              >
                Home
              </NavLink>

              {/* 3. About Us */}
              <button
                type="button"
                className="nav-link nav-btn-link"
                onClick={() => scrollToSection("about")}
                onMouseEnter={handleNavItemHover}
              >
                About Us
              </button>

              {/* 4. Advisory */}
              <button
                type="button"
                className="nav-link nav-btn-link"
                onClick={() => scrollToSection("advisory")}
                onMouseEnter={handleNavItemHover}
              >
                Advisory
              </button>

              {/* 5. Loans (with dropdown) */}
              <div
                className="nav-item-dropdown"
                onMouseEnter={(e) => {
                  setLoansDropdownOpen(true);
                  handleNavItemHover(e);
                }}
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
                onMouseEnter={handleNavItemHover}
              >
                Insurance
              </button>

              {/* 7. Wealth Management */}
              <button
                type="button"
                className="nav-link nav-btn-link"
                onClick={() => scrollToSection("wealth")}
                onMouseEnter={handleNavItemHover}
              >
                Wealth Management
              </button>

              {/* 8. More (with dropdown: EMI Calculator, Resources, Blog) */}
              <div
                className="nav-item-dropdown"
                onMouseEnter={(e) => {
                  setMoreDropdownOpen(true);
                  handleNavItemHover(e);
                }}
                onMouseLeave={() => setMoreDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="nav-link dropdown-btn"
                  onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                >
                  More <ChevronDown size={14} className={`chevron ${moreDropdownOpen ? "rotate" : ""}`} />
                </button>

                {moreDropdownOpen && (
                  <div className="dropdown-menu">
                    {/* Sub-dropdown for EMI Calculator & All Loan Solutions */}
                    <div
                      className="sub-dropdown-wrapper"
                      onMouseEnter={() => setEmiSubDropdownOpen(true)}
                      onMouseLeave={() => setEmiSubDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        className="dropdown-item has-sub-menu"
                        onClick={() => {
                          setEmiSubDropdownOpen(!emiSubDropdownOpen);
                          scrollToSection("emi-calculator");
                        }}
                      >
                        <span>EMI Calculator & Services</span>
                        <ChevronRight size={14} className={`sub-chevron ${emiSubDropdownOpen ? "rotate-90" : ""}`} />
                      </button>

                      {emiSubDropdownOpen && (
                        <div className="sub-dropdown-menu">
                          <button
                            type="button"
                            className="sub-dropdown-item main-calc-item"
                            onClick={() => {
                              closeMenus();
                              scrollToSection("emi-calculator");
                            }}
                          >
                            <div className="sub-item-icon-box">
                              <img src="/images/node_calculator.png" alt="EMI Calculator" className="sub-3d-img" />
                            </div>
                            <span>EMI Calculator (Main)</span>
                          </button>

                          <div className="sub-dropdown-divider"></div>
                          <span className="sub-menu-header">TAILORED SOLUTIONS</span>

                          <button
                            type="button"
                            className="sub-dropdown-item"
                            onClick={() => {
                              closeMenus();
                              if (onOpenApply) onOpenApply("Home Loan");
                              else scrollToSection("loan-categories");
                            }}
                          >
                            <div className="sub-item-icon-box">
                              <img src="/images/node_home_loan.png" alt="Home Loan" className="sub-3d-img" />
                            </div>
                            <span>Home Loan</span>
                          </button>

                          <button
                            type="button"
                            className="sub-dropdown-item"
                            onClick={() => {
                              closeMenus();
                              if (onOpenApply) onOpenApply("Car Loan");
                              else scrollToSection("loan-categories");
                            }}
                          >
                            <div className="sub-item-icon-box">
                              <img src="/images/node_car_loan.png" alt="Car Loan" className="sub-3d-img" />
                            </div>
                            <span>Car Loan</span>
                          </button>

                          <button
                            type="button"
                            className="sub-dropdown-item"
                            onClick={() => {
                              closeMenus();
                              if (onOpenApply) onOpenApply("Personal Loan");
                              else scrollToSection("loan-categories");
                            }}
                          >
                            <div className="sub-item-icon-box">
                              <img src="/images/node_personal_loan.png" alt="Personal Loan" className="sub-3d-img" />
                            </div>
                            <span>Personal Loan</span>
                          </button>

                          <button
                            type="button"
                            className="sub-dropdown-item"
                            onClick={() => {
                              closeMenus();
                              if (onOpenApply) onOpenApply("Business Loan");
                              else scrollToSection("loan-categories");
                            }}
                          >
                            <div className="sub-item-icon-box">
                              <img src="/images/node_business_loan.png" alt="Business Loan" className="sub-3d-img" />
                            </div>
                            <span>Business Loan</span>
                          </button>

                          <button
                            type="button"
                            className="sub-dropdown-item"
                            onClick={() => {
                              closeMenus();
                              if (onOpenApply) onOpenApply("Loan Against Property");
                              else scrollToSection("loan-categories");
                            }}
                          >
                            <div className="sub-item-icon-box">
                              <img src="/images/node_property_loan.png" alt="Loan Against Property" className="sub-3d-img" />
                            </div>
                            <span>Loan Against Property</span>
                          </button>

                          <button
                            type="button"
                            className="sub-dropdown-item"
                            onClick={() => {
                              closeMenus();
                              if (onOpenApply) onOpenApply("Gold Loan");
                              else scrollToSection("loan-categories");
                            }}
                          >
                            <div className="sub-item-icon-box">
                              <img src="/images/node_gold_loan.png" alt="Gold Loan" className="sub-3d-img" />
                            </div>
                            <span>Gold Loan</span>
                          </button>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenus();
                        scrollToSection("resources");
                      }}
                    >
                      Resources
                    </button>
                    <button
                      type="button"
                      className="dropdown-item"
                      onClick={() => {
                        closeMenus();
                        scrollToSection("blog");
                      }}
                    >
                      Blog
                    </button>
                  </div>
                )}
              </div>

              {/* 9. Contact Us */}
              <button
                type="button"
                className="nav-link nav-btn-link"
                onClick={() => scrollToSection("contact")}
                onMouseEnter={handleNavItemHover}
              >
                Contact Us
              </button>

              {/* 10. Enquire */}
              <button
                type="button"
                className="nav-link enquire-nav-btn"
                onClick={() => {
                  closeMenus();
                  if (onOpenApply) {
                    onOpenApply("General Inquiry");
                  } else {
                    scrollToSection("contact");
                  }
                }}
                onMouseEnter={handleNavItemHover}
              >
                <MessageSquareText size={14} className="enquire-nav-icon" />
                <span>Enquire</span>
              </button>

              {/* 11. Donate */}
              <button
                type="button"
                className="nav-link donate-nav-btn"
                onClick={() => {
                  closeMenus();
                  setDonateModalOpen(true);
                }}
                onMouseEnter={handleNavItemHover}
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
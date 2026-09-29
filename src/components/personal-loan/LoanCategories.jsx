import { useState, useRef } from "react";
import { Home, Car, User, Store, Landmark, Coins, ArrowRight, Check, ChevronLeft, ChevronRight, ShieldCheck, TrendingUp, Calculator, HelpCircle } from "lucide-react";
import Container from "../common/Container";

const categories = [
  {
    id: "home-loan",
    icon: Home,
    image: "/images/services/home-loan-city.png",
    title: "Home Loan",
    desc: "Make your dream home a reality",
    interest: "Starting @ 8.40% p.a."
  },
  {
    id: "car-loan",
    icon: Car,
    image: "/images/car_loan.png",
    title: "Car Loan",
    desc: "Drive your dream car today",
    interest: "Starting @ 8.75% p.a."
  },
  {
    id: "personal-loan",
    icon: User,
    image: "/images/services/personal-loan.png",
    title: "Personal Loan",
    desc: "Funds for your personal needs",
    interest: "Starting @ 10.50% p.a.",
    popular: true
  },
  {
    id: "business-loan",
    icon: Store,
    image: "/images/services/business-loan.png",
    title: "Business Loan",
    desc: "Grow your business",
    interest: "Starting @ 11.25% p.a."
  },
  {
    id: "property-loan",
    icon: Landmark,
    image: "/images/services/lap.png",
    title: "Loan Against Property",
    desc: "Unlock the value of your property",
    interest: "Starting @ 9.15% p.a."
  },
  {
    id: "gold-loan",
    icon: Coins,
    image: "/images/services/gold-loan.png",
    title: "Gold Loan",
    desc: "Unlock instant value of your gold",
    interest: "Starting @ 9.25% p.a."
  }
];

const LoanCategories = ({ onSelectCategory, onOpenApply }) => {
  const [activeCategory, setActiveCategory] = useState("personal-loan");
  const categoriesGridRef = useRef(null);

  const scrollCategories = (direction) => {
    if (categoriesGridRef.current) {
      const firstCard = categoriesGridRef.current.querySelector(".category-card");
      const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 280;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
      categoriesGridRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleInsuranceClick = () => {
    const elem = document.getElementById("insurance");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else if (onOpenApply) {
      onOpenApply("Insurance");
    }
  };

  const handleWealthClick = () => {
    const elem = document.getElementById("wealth");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else if (onOpenApply) {
      onOpenApply("Wealth Management");
    }
  };

  const handleEmiClick = () => {
    const elem = document.getElementById("emi-calculator");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else if (onOpenApply) {
      onOpenApply("EMI Calculator");
    }
  };

  const handleAdvisoryClick = () => {
    const elem = document.getElementById("advisory");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    } else if (onOpenApply) {
      onOpenApply("Financial Advisory");
    }
  };

  return (
    <section className="pl-categories-section" id="loan-categories">
      <Container>
        <div className="section-wireframe-title reveal-on-scroll">
          <div>
            <span className="section-pill-tag">EXPLORE LOANS</span>
            <h2>Tailored Financial Solutions For Every Need</h2>
            <p style={{ color: "#6B7280", fontSize: "15px", margin: "4px 0 0" }}>
              Select a loan category below to get instant quotes, interest rates, and customized offers.
            </p>
          </div>
          <div className="slider-nav-arrows">
            <button
              type="button"
              className="slider-arrow-btn"
              onClick={() => scrollCategories("left")}
              aria-label="Previous category"
              title="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="slider-arrow-btn"
              onClick={() => scrollCategories("right")}
              aria-label="Next category"
              title="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="categories-grid" ref={categoriesGridRef}>
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                className={`category-card reveal-on-scroll stagger-delay-${idx + 1} ${isActive ? "active" : ""} ${cat.popular ? "popular-card" : ""}`}
                onClick={() => {
                  setActiveCategory(cat.id);
                  if (onSelectCategory) onSelectCategory(cat);
                }}
              >
                {cat.popular && (
                  <span className="popular-badge">
                    <Check size={12} /> Popular Choice
                  </span>
                )}

                <div className="cat-icon-box">
                  {cat.image ? (
                    <img src={cat.image} alt={cat.title} className="cat-3d-img" />
                  ) : (
                    <Icon size={26} className="cat-icon" />
                  )}
                </div>

                <h3>{cat.title}</h3>
                <p>{cat.desc}</p>
                <div className="cat-rate">{cat.interest}</div>

                <button
                  className="cat-action-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onOpenApply) onOpenApply(cat.title);
                  }}
                >
                  <span>Apply Now</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Explore More Strip inside Tailored Financial Solutions section */}
        <div className="explore-strip-card" style={{ marginTop: "32px" }}>
          <div className="explore-strip-title">
            <span>Explore More</span>
            <ArrowRight size={18} className="strip-arrow" />
          </div>

          <div className="explore-strip-pills">
            <button
              type="button"
              className="strip-pill-btn"
              onClick={handleInsuranceClick}
            >
              <span>INSURANCE</span>
            </button>

            <button
              type="button"
              className="strip-pill-btn"
              onClick={handleWealthClick}
            >
              <span>WEALTH MANAGEMENT</span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LoanCategories;


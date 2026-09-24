import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import Container from "../common/Container";

const testimonials = [
  {
    id: 1,
    name: "Rahul Mehta",
    role: "IT Professional, Mumbai",
    avatar: "/images/customer_rahul.png",
    rating: 5,
    loanType: "Personal Loan",
    amountTag: "₹5 Lakh Approved",
    quote: "The process was so smooth and quick. Got my ₹5 Lakh personal loan approved in just 4 hours with minimum documentation!"
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Marketing Manager, Delhi",
    avatar: "/images/customer_priya.png",
    rating: 4,
    loanType: "Home Loan",
    amountTag: "₹45 Lakh Sanctioned",
    quote: "Very transparent advisory! Janki Financial helped me compare top bank offers and secure a low-interest home loan easily."
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Business Owner, Bangalore",
    avatar: "/images/customer_amit.png",
    rating: 5,
    loanType: "Business Loan",
    amountTag: "₹20 Lakh Working Capital",
    quote: "Best loan experience ever. They got our MSME business loan approved without collateral headaches. Highly recommended!"
  },
  {
    id: 4,
    name: "Sneha Reddy",
    role: "Healthcare Specialist, Hyderabad",
    avatar: "/images/customer_priya.png",
    rating: 4,
    loanType: "Gold Loan",
    amountTag: "Instant Disbursal",
    quote: "Needed quick funds for a emergency. Janki team facilitated hassle-free doorstep gold loan valuation at lowest interest rates."
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    role: "Manufacturer, Pune",
    avatar: "/images/customer_rahul.png",
    rating: 5,
    loanType: "Loan Against Property",
    amountTag: "₹60 Lakh LAP",
    quote: "Seamless valuation process and high LTV sanction. The senior advisor guided us from paperwork to final disbursal."
  },
  {
    id: 6,
    name: "Ananya Roy",
    role: "Software Engineer, Kolkata",
    avatar: "/images/customer_amit.png",
    rating: 4,
    loanType: "Car Loan",
    amountTag: "100% On-Road Funding",
    quote: "Got my dream vehicle financed smoothly with zero hidden charges and maximum tenure flexibilities. Outstanding service!"
  }
];

const TestimonialsSection = () => {
  const marqueeRef = useRef(null);

  const scroll = (direction) => {
    if (marqueeRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      marqueeRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="pl-testimonials-section" id="testimonials">
      <Container>
        {/* Top Header Layout */}
        <div className="testimonials-top-bar reveal-on-scroll">
          <div className="testimonials-header-left">
            <span className="pill-tag">TESTIMONIALS</span>
            <h2 className="testimonials-main-title">
              What Our Customers Say About Our Loan Services
            </h2>
            <p className="testimonials-subtitle-text">
              Real stories from real borrowers across India who secured the right loan with our expert advisory.
            </p>
          </div>

          <div className="testimonials-header-right">
            {/* Rating Stat Box */}
            <div className="overall-rating-card">
              <div className="rating-top-row">
                <span className="big-rating-score">4.8</span>
                <div>
                  <div className="stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="star-filled" />
                    ))}
                  </div>
                  <span className="rating-count-text">from 2,500+ reviews</span>
                </div>
              </div>
            </div>

            {/* Manual Slide Navigation Buttons */}
            <div className="slider-nav-btns">
              <button
                onClick={() => scroll("left")}
                className="slider-btn"
                aria-label="Previous testimonials"
                title="Scroll Left"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll("right")}
                className="slider-btn"
                aria-label="Next testimonials"
                title="Scroll Right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* Infinite X-Axis Marquee Track */}
      <div className="testimonials-marquee-wrapper reveal-on-scroll">
        <div className="testimonials-marquee-container" ref={marqueeRef}>
          <div className="testimonials-marquee-track">
            {[...testimonials, ...testimonials].map((t, idx) => (
              <div key={`${t.id}-${idx}`} className="testimonial-card-item">
                <div className="card-top-row">
                  <div className="loan-badge-group">
                    <span className="loan-service-badge">
                      <Sparkles size={13} className="badge-sparkle" />
                      {t.loanType}
                    </span>
                    {t.amountTag && <span className="amount-tag">{t.amountTag}</span>}
                  </div>
                  <div className="card-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < t.rating ? "star-filled-sm" : "star-muted-sm"}
                      />
                    ))}
                  </div>
                </div>

                <div className="quote-box">
                  <Quote size={22} className="quote-icon-sm" />
                  <p className="testimonial-quote-text">"{t.quote}"</p>
                </div>

                <div className="author-info-footer">
                  <div className="author-left">
                    <img src={t.avatar} alt={t.name} className="author-avatar-img" />
                    <div>
                      <h4 className="author-name">{t.name}</h4>
                      <span className="author-role-text">{t.role}</span>
                    </div>
                  </div>
                  <span className="verified-pill">
                    <CheckCircle2 size={12} /> Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

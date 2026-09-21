import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "../common/Container";

const faqList = [
  {
    question: "How does Janki Financial Services help me get the best loan?",
    answer: "Janki Financial Services acts as your independent loan advisory partner. We compare loan offers from 20+ top banks & NBFCs, negotiate lowest interest rates, and handle end-to-end documentation to get your loan approved hassle-free."
  },
  {
    question: "What types of loan & advisory services do you provide?",
    answer: "We offer expert advisory and fast processing for Personal Loans, Home Loans & Balance Transfers, Business & MSME Loans, Loan Against Property (LAP), Gold Loans, as well as Health Insurance and Wealth Management solutions."
  },
  {
    question: "Are there any upfront advisory fees or hidden charges?",
    answer: "No! We believe in 100% transparency. Our financial advisory consultation is completely free for clients, and there are zero hidden fees or surprise costs throughout your loan journey."
  },
  {
    question: "Will checking loan eligibility through Janki Advisory impact my CIBIL score?",
    answer: "Not at all! Pre-eligibility checking and comparing loan offers on Janki Financial Services is a soft inquiry and has ZERO impact on your CIBIL credit score."
  },
  {
    question: "How quickly can my loan get approved and disbursed?",
    answer: "Thanks to our direct integration with 20+ trusted bank partners, in-principle approval takes less than 10 minutes, and complete loan funds disbursal into your bank account happens within 2 to 24 hours."
  },
  {
    question: "What documents are required to apply through Janki Financial Services?",
    answer: "You only need basic digital KYC documents: PAN Card, Aadhaar Card, last 3 months bank statements/salary slips, and current address proof. Our dedicated advisor assists you step-by-step."
  }
];

const FAQSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const toggle = (idx) => {
    setActiveIdx(activeIdx === idx ? -1 : idx);
  };

  return (
    <section className="pl-faq-section" id="faq">
      <Container>
        <div className="section-header center reveal-on-scroll">
          <span className="section-pill-tag">FREQUENTLY ASKED QUESTIONS</span>
          <h2>Frequently Asked Questions</h2>
          <p>Got questions about loan advisory, eligibility, rates, or disbursal? We've got answers.</p>
        </div>

        <div className="faq-accordion-wrapper reveal-on-scroll stagger-delay-1">
          {faqList.map((faq, idx) => {
            const isOpen = activeIdx === idx;
            return (
              <div key={idx} className={`faq-accordion-item ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className="faq-toggle-icon">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>

                <div className="faq-answer-wrapper">
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;

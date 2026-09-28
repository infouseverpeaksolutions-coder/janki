import { MessageSquare, Search, Scale, Lightbulb, CheckCircle2 } from "lucide-react";
import Container from "../common/Container";

const steps = [
  {
    stepNumber: "01",
    icon: MessageSquare,
    title: "You Tell Us",
    desc: "Share your needs and goals"
  },
  {
    stepNumber: "02",
    icon: Search,
    title: "We Analyze",
    desc: "We study your profile and requirements"
  },
  {
    stepNumber: "03",
    icon: Scale,
    title: "We Compare",
    desc: "We compare options from 20+ trusted lenders"
  },
  {
    stepNumber: "04",
    icon: Lightbulb,
    title: "We Recommend",
    desc: "We suggest the best options for you"
  },
  {
    stepNumber: "05",
    icon: CheckCircle2,
    title: "You Decide",
    desc: "You choose what suits you best"
  }
];

const HowItWorks = ({ onStartApplication }) => {
  return (
    <section className="pl-how-it-works" id="how-it-works">
      <Container>
        <div className="section-header center reveal-on-scroll">
          <span className="section-pill-tag">HOW IT WORKS</span>
          <h2>Simple 5-Step Advisory Process</h2>
          <p>Transparent digital guidance to help you find and choose the best loan option with zero hassle.</p>
        </div>

        <div className="steps-wrapper">
          <div className="steps-grid-5">
            {/* SVG Curved Dashed Arrow Connectors Overlay */}
            <svg
              className="steps-connectors-overlay"
              viewBox="0 0 1150 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <defs>
                <marker
                  id="gold-arrowhead"
                  viewBox="0 0 10 10"
                  refX="7"
                  refY="5"
                  markerWidth="8"
                  markerHeight="8"
                  orient="auto"
                >
                  <path d="M 0 1.5 L 9 5 L 0 8.5 L 2.5 5 Z" fill="#D4AF37" />
                </marker>
              </defs>

              {/* Arrow 1: Badge 01 (top-right Card 1) -> Top of Card 2 */}
              <path
                d="M 172,28 C 208,28 242,42 268,70"
                stroke="#D4AF37"
                strokeWidth="2.5"
                strokeDasharray="6 5"
                strokeLinecap="round"
                markerEnd="url(#gold-arrowhead)"
              />

              {/* Arrow 2: Badge 02 (bottom-right Card 2) -> Bottom-left of Card 3 */}
              <path
                d="M 410,224 C 445,224 480,206 506,170"
                stroke="#D4AF37"
                strokeWidth="2.5"
                strokeDasharray="6 5"
                strokeLinecap="round"
                markerEnd="url(#gold-arrowhead)"
              />

              {/* Arrow 3: Badge 03 (top-right Card 3) -> Top of Card 4 */}
              <path
                d="M 648,28 C 682,28 718,42 744,70"
                stroke="#D4AF37"
                strokeWidth="2.5"
                strokeDasharray="6 5"
                strokeLinecap="round"
                markerEnd="url(#gold-arrowhead)"
              />

              {/* Arrow 4: Badge 04 (bottom-right Card 4) -> Bottom-left of Card 5 */}
              <path
                d="M 886,224 C 920,224 956,206 982,170"
                stroke="#D4AF37"
                strokeWidth="2.5"
                strokeDasharray="6 5"
                strokeLinecap="round"
                markerEnd="url(#gold-arrowhead)"
              />
            </svg>

            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 1; // 02 & 04 shifted down

              return (
                <div
                  key={step.stepNumber}
                  className={`hw-step-card ${isEven ? "card-stagger-down" : "card-stagger-up"} reveal-on-scroll stagger-delay-${idx + 1}`}
                  style={{ zIndex: 10 - idx }}
                  onClick={() => {
                    if (onStartApplication) onStartApplication(step.title);
                  }}
                >
                  <div className="hw-card-top">
                    <div className="hw-icon-wrapper">
                      <Icon size={24} className="hw-icon" />
                    </div>
                    {!isEven && <div className="hw-step-number">{step.stepNumber}</div>}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                  {isEven && (
                    <div className="hw-card-bottom">
                      <div className="hw-step-number number-bottom">{step.stepNumber}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HowItWorks;



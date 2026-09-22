import { MessageSquare, Search, Scale, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";
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

const HowItWorks = () => {
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
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={step.stepNumber} className={`hw-step-card reveal-on-scroll stagger-delay-${idx + 1}`}>
                  <div className="hw-card-top">
                    <div className="hw-icon-wrapper">
                      <Icon size={24} className="hw-icon" />
                    </div>
                    <div className="hw-step-number">{step.stepNumber}</div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>

                  {idx < steps.length - 1 && (
                    <div className="hw-connector-arrow" aria-hidden="true">
                      <ArrowRight size={14} />
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



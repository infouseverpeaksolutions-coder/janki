import { useState } from "react";
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

const HowItWorks = ({ onStartApplication }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="pl-how-it-works" id="how-it-works">
      <Container>
        <div className="section-header center reveal-on-scroll">
          <span className="section-pill-tag">HOW IT WORKS</span>
          <h2>Simple 5-Step Advisory Process</h2>
          <p>Transparent digital guidance to help you find and choose the best loan option with zero hassle.</p>
        </div>

        <div className="steps-wrapper reveal-on-scroll">
          {/* Top Progress Track */}
          <div className="steps-progress-track">
            <div
              className="steps-progress-line-active"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
            {steps.map((step, idx) => (
              <button
                key={step.stepNumber}
                className={`progress-node ${idx <= activeStep ? "node-active" : ""}`}
                onClick={() => setActiveStep(idx)}
                title={`Step ${step.stepNumber}: ${step.title}`}
              >
                <span className="node-number">{step.stepNumber}</span>
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="steps-grid-5">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = idx === activeStep;

              return (
                <div key={step.stepNumber} className="step-card-container">
                  <div
                    className={`hw-step-card-modern ${isActive ? "card-active" : ""}`}
                    onMouseEnter={() => setActiveStep(idx)}
                    onClick={() => {
                      setActiveStep(idx);
                      if (onStartApplication) onStartApplication(step.title);
                    }}
                  >
                    <div className="hw-card-header">
                      <div className="hw-icon-wrapper-modern">
                        <Icon size={22} className="hw-icon" />
                      </div>
                      <span className="hw-step-badge">0{idx + 1}</span>
                    </div>

                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>

                    <div className="hw-card-footer">
                      <span className="hw-step-label">Step {step.stepNumber}</span>
                    </div>
                  </div>

                  {idx < steps.length - 1 && (
                    <div className="step-arrow-connector">
                      <ArrowRight size={14} className="connector-arrow-icon" />
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



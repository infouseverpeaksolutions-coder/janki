import { ArrowRight, Users } from "lucide-react";

import Button from "../common/Button";
import Container from "../common/Container";
import EnquiryForm from "./EnquiryForm";

import "../../styles/home/hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <Container>

        <div className="hero-wrapper">

          <div className="hero-content">

           

            <h1>
              Find the Right Loan.<br />
              With Expert Guidance.
            </h1>

            <p>
              Helping individuals, families and businesses secure
              the right financial solutions with a simple,
              transparent and hassle-free loan application process.
            </p>

            <div className="hero-buttons">

              <Button>
                Apply For Loan
                <ArrowRight size={18} />
              </Button>

              <Button variant="outline">
                <Users size={18} />
                Become Partner
              </Button>

            </div>

            <div className="hero-features">

              <div className="feature-item">

                <h3>50+</h3>

                <span>Banking Partners</span>

              </div>

              <div className="feature-item">

                <h3>10K+</h3>

                <span>Happy Customers</span>

              </div>

              <div className="feature-item">

                <h3>24 Hours</h3>

                <span>Quick Approval</span>

              </div>

            </div>

          </div>

          <div className="hero-form">

            <EnquiryForm />

          </div>

        </div>

      </Container>

    </section>
  );
};

export default Hero;
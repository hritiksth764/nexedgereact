import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services-page">
      <h1 className="services-heading">Our Services</h1>
      <p className="services-subtext">
        We offer a range of solutions tailored to meet your unique needs.
      </p>

      <div className="service-cards">
        <div className="service-card">
          <h2>Wealth Planning</h2>
          <p>Strategic guidance for long-term financial growth and legacy.</p>
        </div>
        <div className="service-card">
          <h2>Investment Advisory</h2>
          <p>Expert advice to align your portfolio with your vision.</p>
        </div>
        <div className="service-card">
          <h2>Estate Structuring</h2>
          <p>Comprehensive estate solutions for generational impact.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;

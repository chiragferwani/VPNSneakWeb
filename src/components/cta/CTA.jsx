import React from "react";
import "./cta.css";

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content" id="product">
      <p>Secure Your Spot Early – Get Started Now.</p>
      <h3>Order & Install Now and Dive into Limitless Security Possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <a href="https://vpnsneakproducts.vercel.app/">
      <button type="button">Order Now</button>
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button type="button">Get App</button>
    </div>
  </div>
);

export default CTA;

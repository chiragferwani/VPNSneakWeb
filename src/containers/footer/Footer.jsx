import React from "react";
import gpt3Logo from "../../logo.svg";
import vpnsneak from "../../assets/vpnsneak.png";
import "./footer.css";

const Footer = () => (
  <div className="gpt3__footer section__padding" id="footer">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">
      Ready to Embrace the Future of Online Security Ahead of the Curve?
      </h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Get Sneak Products</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={vpnsneak} alt="gpt3_logo" />
        <p>
          Project By Team Buddy <br /> All Rights Reserved
        </p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Github</p>
        <p>Instagram</p>
        <p>LinkedIn</p>
        <p>Blogger</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Pune, Maharashtra</p>
        <p>sneak.v7.7.0@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 VPNSneak. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;

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
        <a href="youtube.com/@vpnsneak"><p>YouTube</p></a>
        <a href="https://www.instagram.com/vpnsneak/"><p>Instagram</p></a>
        <a href="https://www.linkedin.com/in/chiragferwani/"><p>LinkedIn</p></a>
        <a href="https://vpnsneak.blogspot.com/"><p>Blogger</p></a>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Project</h4>
        <p>About</p>
        <p>Source Code</p>
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

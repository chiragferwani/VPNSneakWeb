import React from "react";
import Feature from "../../components/feature/Feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="What is VPNSneak"
        text="VPN Sneak is a holistic digital security initiative featuring an Android app, Sneak2.0 hardware device, and educational resources. With user-friendly solutions, global server locations, and an emphasis on education, it empowers users to safeguard their online presence. The project ensures a comprehensive, accessible, and informed approach to online privacy, providing users with the tools for a secure digital experience. VPN Sneak represents a commitment to online security, offering a multifaceted solution in a rapidly evolving digital landscape."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
      Securing Tomorrow's Digital Frontiers Today
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Sneak 2.O"
        text="Sneak 2.0 is VPN Sneak's innovative hardware device, revolutionizing online security. It empowers users to create personal VPN servers effortlessly, enhancing privacy, especially in public Wi-Fi settings. A tangible solution for fortified digital security, Sneak 2.0 sets a new standard for protection in the evolving digital landscape."
      />
      <Feature
        title="Sneak v7.7.0"
        text="VPN Sneak's Android app, version v7.7.0, is a cutting-edge tool for seamless online privacy. Offering global server connections and a network speed test, it ensures a secure and swift browsing experience. With an intuitive interface, this version is the epitome of user-friendly online security, setting a high standard for the VPN landscape."
      />
      <Feature
        title="Education"
        text="VPN Sneak's website educates on VPN importance, privacy practices, and cybersecurity for confident digital experiences. Offering comprehensive resources, it transforms users into vigilant guardians of their online security, providing essential insights to empower users in navigating the digital landscape securely and confidently."
      />
    </div>
  </div>
);

export default WhatGPT3;

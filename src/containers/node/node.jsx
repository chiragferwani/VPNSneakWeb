import React from "react";
import possibilityImage from "../../assets/pi.png";
import "./node.css";

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h3>LEVEL UP YOUR ONLINE SECURITY!</h3>
      <h1 className="gradient__text">
        Fortify Your Digital Shield!
      </h1>
      <p>
      The hardware device revolutionizes online security by allowing users to effortlessly create personal VPN servers. 
      With this hardware device, users can establish a fortified digital shield, enhancing their privacy and protection, especially in public Wi-Fi settings. 
  
      </p>
      <h4>Experience a new era of secure browsing with Sneak 2.0</h4>
    </div>
  </div>
);

export default Possibility;

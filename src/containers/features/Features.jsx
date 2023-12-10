import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";

const featuresData = [
  {
    title: "Global Server Network Connection",
    text: "The project provides a vast network of servers across the globe, allowing users to choose from a wide range of locations to enhance online privacy and access content without geographical restrictions.",
  },
  {
    title: "User-Friendly Interface",
    text: "The project emphasizes user-friendly design, enabling all users, regardless of technical expertise, to seamlessly navigate the Android app, hardware device, and educational resources for enhanced online security.",
  },
  {
    title: "Hardware Innovation",
    text: "The project unveils an innovative device for effortless personal VPN server creation, boosting security in public Wi-Fi. This tangible solution adds an extra layer of protection beyond software-only alternatives.",
  },
  {
    title: "Educational Resources",
    text: "The project website is a robust educational hub, offering insights on VPN importance, online privacy best practices, and cybersecurity. This commitment to education empowers users for informed decisions about digital security.",
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
      Unlock the Future of Online Security with VPN Sneak. Step into a Secure Digital Tomorrow – Make it Happen Today.
      </h1>
      <p>Order Sneak Devices Now to Get Started</p>
    </div>
    <div className="gpt3__features-containers">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

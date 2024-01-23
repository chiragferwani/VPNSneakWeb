import React from "react";
import "./App.css";

import { Brand, CTA, Navbar } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
  node
} from "./containers";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <node />
      <Footer />
    </div>
  );
};

export default App;

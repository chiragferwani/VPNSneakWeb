import React from "react";
import "./brand.css";
import { chirag, yash, atharva, nitanshu} from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div className="gpt3__features-heading">
      <h1 className="gradient__text">
      Team Members
      </h1>
      <p>Chirag Ferwani 
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Yash Chavan
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Atharva Kakade
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Nitanshu Bhor
        </p>
      </div>
      <div>
        <img src={chirag} />
      </div>
      <div>
        <img src={yash} />
      </div>
      <div>
        <img src={atharva} />
      </div>
      <div>
        <img src={nitanshu} />
      </div>
    </div>
    
  );
};

export default Brand;

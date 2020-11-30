import React from "react";
import Home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>dreams</span> come{" "}
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>
          Contact us for anything fuck you kiss my ass ill figure it out later.
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={Home1} alt="Guy with fuck you" />
      </div>
    </div>
  );
};

export default AboutSection;

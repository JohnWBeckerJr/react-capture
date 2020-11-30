import React from "react";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServiceSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="Clock" />
              <h3>Efficient</h3>
            </div>
            <p>Blah blah fuck you fuck whatever. </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="Teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Blah blah fuck you fuck whatever. </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="Diaphragm" />
              <h3>Diaphragm</h3>
            </div>
            <p>Blah blah fuck you fuck whatever. </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="Cash" />
              <h3>Affordable</h3>
            </div>
            <p>Blah blah fuck you fuck whatever. </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="Home" />
      </div>
    </div>
  );
};

export default ServiceSection;
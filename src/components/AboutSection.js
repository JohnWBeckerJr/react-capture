import React from "react";
import Home1 from "../img/home1.png";
//import styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              Your <span>dreams</span> come{" "}
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for anything fuck you kiss my ass ill figure it out later.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={Home1} alt="Guy with fuck you" />
      </Image>
    </About>
  );
};

//Styled Components

export default AboutSection;

import React from "react";
import England from "../img/England.jpeg";
//import styled
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>Suck my shit</h2>
          </Hide>
          <Hide>
            <h2>
              balls <span>boobs</span> the heck{" "}
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>fuck you kiss my ass ill figure it out later.</p>
        <button>Balls</button>
      </Description>
      <Image>
        <img src={England} alt="Guy with fuck you" />
      </Image>
    </About>
  );
};

//Styled Components

export default AboutSection;

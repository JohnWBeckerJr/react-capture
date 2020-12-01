import React from "react";
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>fuck you, nerd dork ass whatever, working sucks, be cool</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Schedule</h4>
        <div className="answer">
          <p>fuck you, nerd dork ass whatever, working sucks, be cool</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Payment?</h4>
        <div className="answer">
          <p>fuck you, nerd dork ass whatever, working sucks, be cool</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="question">
        <h4>Who cares?</h4>
        <div className="answer">
          <p>fuck you, nerd dork ass whatever, working sucks, be cool</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    P {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;

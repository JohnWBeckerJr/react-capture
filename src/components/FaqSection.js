import React, {useState} from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from './Toggle'
import { AnimateSharedLayout } from "framer-motion"
import {scrollReveal} from "../animation"
import {useScroll} from "./useScroll"

const FaqSection = () => {
  const [element,controls] = useScroll();
  return (
    <Faq variants = {scrollReveal} ref = {element} animate = {controls} initial = "hideen" >
      <h2>
       <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
      <Toggle title = "How Do I Start?">
        <div className="answer">
          <p>fuck you, nerd dork ass whatever, working sucks, be cool</p>
      </div>
      </Toggle>
      <Toggle title = "Schedule">
        <div className="answer">
          <p>fuck you, nerd dork ass whatever, working sucks, be cool</p>
      </div>
      </Toggle>
      <Toggle title = "Payment?">
        <div className="answer">
          <p>fuck you, nerd dork ass whatever, working sucks, be cool</p>
        </div>
      </Toggle>
      <Toggle title = "Who cares?">
        <div className="answer">
          <p>fuck you, nerd dork ass whatever, working sucks, be cool</p>
        </div>
      </Toggle>
      </AnimateSharedLayout>
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
    padding: 2rem 0rem;
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

import React from "react";
import England from "../img/England.jpeg";
//import styled
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation"
import Wave from "./Wave"

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants = {titleAnim} >Suck my shit</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants = {titleAnim}>
              balls <span>boobs</span> the heck{" "}
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants = {titleAnim} >true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants = {fade} >fuck you kiss my ass ill figure it out later.</motion.p>
        <motion.button variants = {fade}>Balls</motion.button>
      </Description>
      <Image>
        <motion.img 
        variants ={photoAnim} src={England} alt="Guy with fuck you" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;

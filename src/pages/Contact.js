import React from "react";
//Animations 
import { motion } from "framer-motion"
import { pageAnimation, titleAnim } from "../animation"; 
import styled from "styled-components"; 
 
const Contact = () => {
  return (
    <ContactStyle
    exit ="exit"
    variants = {pageAnimation}
    initial = "hidden"
    animate = "show"
    style = {{background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get In Touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
        <Social variants = {titleAnim}>
          <Circle />
          <h2>Email</h2>
          </Social>
          </Hide>
          <Hide>
          <Social variants = {titleAnim}>
          <Circle />
          <h2>Cell</h2>
          </Social>
          </Hide>
          <Hide>
          <Social variants = {titleAnim}>
          <Circle />
          <h2>Social Media</h2>
          </Social>
          </Hide>
      </div>  
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
padding: 5rem 10rem; 
color: #353535; 
min-height: 90vh; 
@media (max-width: 1300px){
   padding: 2rem; 
   font-size: 1rem; 
}
`

const Title = styled.div`
margin-bottom: 4rem;
color: black; 
@media (max-width: 1300px){
   margin-top: 5rem; 
};
`
const Hide = styled.div`
overflow:hidden; 
`
const Circle =  styled.div`
border-radius:50%; 
width: 1.5rem;
height: 1.5rem; 
background: #353535; 
`

const Social = styled(motion.div)`
display: flex;
align-items:center; 
h2 {
  margin: .75rem; 
}
`

export default Contact;

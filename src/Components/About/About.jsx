import React from "react";
import Combined from "../Combined/Combined";
import About__Pic from "../../Assets/about.svg";
import "./About.css";
import Faqs from "./Faqs";
import pic2 from "../../Assets/software.jpg"

const About = () => {
  return (
    <>
      <Combined
        title="This page is all About of"
        imgsrc={About__Pic}
        visit="/contact"
        btnName="Contact Now"
      />

   

      <Faqs />
    </>
  );
};

export default About;

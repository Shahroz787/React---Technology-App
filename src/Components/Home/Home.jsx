import React from "react";
import HeaderImg from "../../Assets/headerImg.svg";
import Combined from "../Combined/Combined";

const Home = () => {
  return (
    <>
      <Combined
        title="Grow your business with"
        imgsrc={HeaderImg}
        visit="/services"
        btnName="Get Started"
      />
    </>
  );
};

export default Home;

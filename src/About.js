import React, { useContext } from "react";
import HeroSection from "./components/Herosection";
import { AppContext } from "./context/productcontext"; // Ensure this path is correct

const About = () => {
  const myName = useContext(AppContext);
  const data = {
    name: "PoohEcommerce",
  };

  return (
    <>
      <h1>{myName.myName}</h1>
      <HeroSection myData={data} />
    </>
  );
};

export default About;

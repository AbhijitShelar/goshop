import React from "react";
import DescriptionSection from "./components/DescriptionSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";
const Home = () => {
  const name="GoShop"
  return (
    <>
    <DescriptionSection name={name}/>
    <Services></Services>
    <Trusted></Trusted>
    </>
  );
  
};



export default Home;
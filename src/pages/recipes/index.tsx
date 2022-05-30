import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";
import React from "react";
import RecipiesSection from "./sections/RecipiesSection";

const Recipes = () => {
  return (
    <>
      <Navbar />
      <RecipiesSection />
      <Footer />
    </>
  );
};

export default Recipes;

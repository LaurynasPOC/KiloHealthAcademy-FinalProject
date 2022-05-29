import React from "react";
import Navbar from "components/navbar/Navbar";

import WelcomeSection from "./sections/WelcomeSection";
import Footer from "components/footer/Footer";
import { SectionWrapper } from "components";

const Home = () => {
  return (
    <>
      <Navbar />
      <WelcomeSection />
      <Footer />
    </>
  );
};

export default Home;

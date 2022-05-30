import React from "react";
import Navbar from "components/navbar/Navbar";

import WelcomeSection from "./sections/WelcomeSection";
import Footer from "components/footer/Footer";

const Home = () => (
  <>
    <Navbar />
    <WelcomeSection />
    <Footer />
  </>
);

export default Home;

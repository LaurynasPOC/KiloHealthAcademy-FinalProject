import React from "react";
import FAQSection from "./sections/FAQSection";
import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
import { SectionWrapper } from "components";

const index = () => (
  <>
    <Navbar />
    <SectionWrapper height="100vh">
      <FAQSection />
    </SectionWrapper>
    <Footer />
  </>
);
export default index;

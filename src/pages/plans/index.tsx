import { SectionWrapper } from "components";
import SubHeader from "components/globalElements/SubHeader";
import Navbar from "components/navbar/Navbar";
import React from "react";
import PlansSection from "./sections/PlansSection";
import ReviewSection from "./sections/ReviewSection";

const index = () => {
  return (
    <>
      <Navbar />
      <SectionWrapper>
        <SubHeader text="Planų pasirinkimai" />
        <PlansSection />
        <ReviewSection />
      </SectionWrapper>
    </>
  );
};

export default index;

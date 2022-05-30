import { SectionWrapper, Typography } from "components";
import Footer from "components/footer/Footer";
import SubHeader from "components/globalElements/SubHeader";
import Navbar from "components/navbar/Navbar";
import FAQSection from "pages/duk/sections/FAQSection";

import React from "react";
import AdvertismentSection from "./sections/AdvertismentSection";
import PlansSection from "./sections/PlansSection";
import ReviewSection from "./sections/ReviewSection";

const index = () => {
  return (
    <>
      <Navbar />
      <SectionWrapper>
        <SubHeader text="Planų pasirinkimai" />
        <PlansSection power={[]} active={[]} healthy={[]} />
        <Typography my="2rem" textAlign={"center"} type="h6" color="primary">
          Mano klienčių atsiliepimai
        </Typography>
        <ReviewSection />
        <AdvertismentSection />
        <FAQSection />
      </SectionWrapper>
      <Footer />
    </>
  );
};

export default index;

import React from "react";
import { useSelector } from "react-redux";
import { selectUsername } from "state/selectors";
import { SectionWrapper } from "components";
import MonthPlansSection from "./endQuizSections/MonthPlansSection";
import AdvertismentSection from "pages/plans/sections/AdvertismentSection";
import ReviewSection from "pages/plans/sections/ReviewSection";
import FAQSection from "pages/duk/sections/FAQSection";
import SubHeader from "components/globalElements/SubHeader";

const EndQuizSection = () => {
  const username = useSelector(selectUsername);
  return (
    <SectionWrapper>
      <SubHeader text={username + " specialus pasiūlymasa tik tau!"} />

      <MonthPlansSection power={[]} active={[]} healthy={[]} />

      <AdvertismentSection />
      <SubHeader text="Laimingų klienčių atsiliepimai" />
      <ReviewSection />
      <FAQSection />
      <SubHeader text={username + " nedvejok ir rinkis tuoj pat!"} />
      <MonthPlansSection power={[]} active={[]} healthy={[]} />
    </SectionWrapper>
  );
};

export default EndQuizSection;

import React from "react";
import { useSelector } from "react-redux";
import { selectUsername } from "state/selectors";
import { Box, SectionWrapper, Typography } from "components";
import MonthPlansSection from "./endQuizSections/MonthPlansSection";
import AdvertismentSection from "pages/plans/sections/AdvertismentSection";
import ReviewSection from "pages/plans/sections/ReviewSection";
import FAQSection from "pages/duk/sections/FAQSection";
const EndQuizSection = () => {
  const username = useSelector(selectUsername);
  return (
    <SectionWrapper>
      <Typography
        m={"2rem"}
        textAlign={"center"}
        fontWeight={"fw700"}
        color="primary"
        type="h5"
      >
        {username}, rinkis iš šių planų ir gauk tik tau specialiai pritaikytą
        nuolaidą!
      </Typography>
      <Box
        p={"2rem"}
        borderRadius={"br8"}
        margin={"auto"}
        maxWidth={{ _: "80%", tablet: "50%" }}
        bg={"white"}
      >
        <MonthPlansSection power={[]} active={[]} healthy={[]} />
      </Box>

      <AdvertismentSection />
      <Typography my="2rem" color="primary" textAlign={"center"} type="h6">
        Laimingų klienčių atsiliepimai
      </Typography>
      <ReviewSection />
      <FAQSection />
    </SectionWrapper>
  );
};

export default EndQuizSection;

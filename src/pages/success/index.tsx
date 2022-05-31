import React from "react";

import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
import {
  FlexWrapper,
  SectionWrapper,
  Typography,
  Image,
  Box,
} from "components";

const Succsess = () => (
  <>
    <Navbar />
    <SectionWrapper height="100vh">
      <FlexWrapper justifyContent={"center"}>
        <Box>
          <Box position={"absolute"} top="7rem">
            <Typography color="primary" type="h6">
              Sveikiname pinigų jūsų sąskaitoje jau nėra!!!
            </Typography>
          </Box>
          <Image margin="10rem 0 0 0" src="confetti" alt="success" />
        </Box>
      </FlexWrapper>
    </SectionWrapper>
    <Footer />
  </>
);

export default Succsess;

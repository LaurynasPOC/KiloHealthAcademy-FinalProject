import React from "react";
import { ADDS } from "constants/AdvertismentData";
import AdertismentPart from "../elements/AdertismentPart";
import { Container, Typography } from "components";

const AdvertismentSection = () => (
  <Container>
    <Typography color="primary" m="2rem" type="h5" textAlign={"center"}>
      Kodėl verta sveikai maitintis ir sportuoti?
    </Typography>
    {ADDS.map(({ text }) => (
      <AdertismentPart text={text} />
    ))}
  </Container>
);

export default AdvertismentSection;

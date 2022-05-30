import React from "react";
import { ADDS } from "constants/AdvertismentData";
import AdertismentPart from "../elements/AdertismentPart";
import { Container } from "components";
import SubHeader from "components/globalElements/SubHeader";

const AdvertismentSection = () => (
  <Container>
    <SubHeader text="Kodėl verta sveikai maitintis ir sportuoti?" />
    {ADDS.map(({ text }, i) => (
      <AdertismentPart key={i} text={text} />
    ))}
  </Container>
);

export default AdvertismentSection;

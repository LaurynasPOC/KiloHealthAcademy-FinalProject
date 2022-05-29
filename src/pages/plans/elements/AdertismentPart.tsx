import React from "react";
import { FlexWrapper, Image, Typography } from "components";

interface Props {
  text: string;
}

const AdertismentPart: React.FC<Props> = ({ text }) => (
  <FlexWrapper
    alignItems={"center"}
    p="0.5rem"
    borderRadius={"br8"}
    bg={"white"}
    m={"0.5rem auto"}
    width={{ _: "80%", tablet: "50%" }}
  >
    <Image src="checkCircle" alt="buy it my friend" />
    <Typography ml="0.5rem">{text}</Typography>
  </FlexWrapper>
);

export default AdertismentPart;

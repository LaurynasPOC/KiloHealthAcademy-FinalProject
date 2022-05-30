import React from "react";

import { Box, FlexWrapper, Typography, Image } from "components";
import { theme } from "styles/theme";

interface Props {
  img: string;
  alt: string;
  hText?: string;
  text: string;
  text2?: string;
  direction?: string;
}

const ImgAndText: React.FC<Props> = ({
  img,
  text,
  text2,
  hText,
  direction,
  alt,
}) => (
  <FlexWrapper
    backgroundColor={"white"}
    border={`2px solid ${theme.colors.primary}`}
    textAlign={"center"}
    margin={"0 auto"}
    display={{
      _: "block",
      laptop: "flex",
    }}
    flexDirection={{ direction }}
  >
    <Image src={img} alt={alt} />

    <Box margin={"0 auto"} px="2rem" py="1rem" textAlign="left">
      <Typography type="h6">{hText}</Typography>
      <Typography lineHeight={"lh24"} pt="1rem">
        {text}
      </Typography>
      <Typography>{text2}</Typography>
    </Box>
  </FlexWrapper>
);

export default ImgAndText;

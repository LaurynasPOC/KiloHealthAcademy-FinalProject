import React from "react";
import { Image } from "components/Image";
import { Box, FlexWrapper } from "components";
import { theme } from "styles/theme";
import { Typography } from "components/typography/Typography";

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
}) => {
  return (
    <FlexWrapper
      backgroundColor={"white"}
      border={`2px solid ${theme.colors.primary}`}
      textAlign={"center"}
      margin={"0 auto"}
      display={{
        _: "block",
        laptop: "flex",
        tablet: "block",
        mobile: "block",
        smMobile: "block",
      }}
      flexDirection={{ direction }}
    >
      <Image src={img} alt={alt} />

      <Box
        margin={"0 auto"}
        px="2rem"
        maxWidth={{ mobile: "100%", tablet: "100%", laptop: "80%" }}
        textAlign="left"
      >
        <Typography type="h6">{hText}</Typography>
        <Typography lineHeight={"lh24"} pt="1rem">
          {text}
        </Typography>
        <Typography>{text2}</Typography>
      </Box>
    </FlexWrapper>
  );
};
export default ImgAndText;

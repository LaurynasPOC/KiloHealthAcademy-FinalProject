import React from "react";
import { SectionWrapper } from "components/wrappers/SectionWrapper";
import { Container } from "components/wrappers/Container";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { Box } from "components/wrappers/Box";
import { theme } from "styles/theme";
import { Image } from "components/Image";
import { Link } from "gatsby";
import { NAVBARDATA } from "constants/NavbarData";

const Footer = () => {
  return (
    <Box
      py="2rem"
      backgroundColor="secondary"
      borderTop={`2px solid ${theme.colors.primary}`}
    >
      <FlexWrapper justifyContent="center">
        {NAVBARDATA[0].socialTags.map(({ img, alt, link }, i) => (
          <Box mx="0.1875rem" key={i}>
            <Link to={link}>
              <Image height="1.875rem" src={img} alt={alt} />
            </Link>
          </Box>
        ))}
      </FlexWrapper>
    </Box>
  );
};

export default Footer;

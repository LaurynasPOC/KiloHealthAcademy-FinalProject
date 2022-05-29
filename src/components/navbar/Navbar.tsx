import React from "react";
import { DefaultLink } from "components/links/DefaultLink";
import {
  Image,
  FlexWrapper,
  Typography,
  Box,
  SectionWrapper,
  Container,
} from "components";
import { theme } from "styles/theme";
import { Link } from "gatsby";
import { NAVBARDATA } from "constants/NavbarData";

const Navbar = () => (
  <Box
    py={"1rem"}
    px={"2rem"}
    borderBottom={`2px solid ${theme.colors.primary}`}
  >
    <Container>
      <FlexWrapper
        textAlign="center"
        display={{ _: "block", tablet: "flex" }}
        justifyContent="space-between"
      >
        <Box>
          <Image width="100px" src="logo" alt="logo" />
        </Box>

        <FlexWrapper mt="1rem" justifyContent="center">
          {NAVBARDATA[0].navigation.map(({ title, link }, i) => (
            <Typography
              mx={{
                smMobile: "0.25rem",
                mobile: "0.375rem",
                tablet: "0.5rem",
                laptop: "0.625rem",
              }}
              key={i}
              color="black"
              fontWeight={"fw700"}
            >
              <DefaultLink to={link}>{title}</DefaultLink>
            </Typography>
          ))}
        </FlexWrapper>
        <FlexWrapper mt="1rem" justifyContent="center">
          {NAVBARDATA[0].socialTags.map(({ img, alt, link }, i) => (
            <Box mx="0.1875rem" key={i}>
              <Link to={link}>
                <Image height="1.875rem" src={img} alt={alt} />
              </Link>
            </Box>
          ))}
        </FlexWrapper>
      </FlexWrapper>
    </Container>
  </Box>
);

export default Navbar;

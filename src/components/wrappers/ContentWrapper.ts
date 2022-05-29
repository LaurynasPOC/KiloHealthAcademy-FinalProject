import styled from "styled-components/macro";
import { Box } from "./Box";
import { mobile, tablet } from "styles/breakpoints";

export const ContentWrapper = styled(Box)`
  margin: 0 auto;
  padding: 0 3rem;

  @media ${tablet} {
    padding: 0 2rem;
  }
  @media ${mobile} {
    padding: 0 1rem;
  }
`;

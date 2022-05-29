import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

export const DefaultLink = styled(GatsbyLink)`
  color: ${theme.colors.primary};
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid ${theme.colors.primary};
  }
`;

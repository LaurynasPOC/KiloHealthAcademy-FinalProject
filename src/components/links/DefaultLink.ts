import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components/macro";
import { theme } from "styles/theme";

interface Link {
  fontWeight?: string;
  border?: string;
  borderRadius?: string;
}

export const DefaultLink = styled(GatsbyLink)<Link>`
  color: ${theme.colors.primary};
  font-weight: ${({ fontWeight }) => fontWeight || ""};
  border: ${({ border }) => border || ""};
  border-radius: ${({ borderRadius }) => borderRadius || ""};
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid ${theme.colors.primary};
  }
`;

import styled from "styled-components/macro";

import { Colors } from "styles/theme";

interface SectionWrapperStyles {
  minHeight?: string;
  backgroundColor?: Colors;
  borderBottom?: string;
  borderTop?: string;
  height?: string;
  backgroundImage?: string;
}

export const SectionWrapper = styled.section<SectionWrapperStyles>`
  position: relative;
  padding: 2rem 0;
  background-image: linear-gradient(
    90deg,
    rgba(251, 255, 181, 1) 0%,
    rgba(131, 200, 87, 0.4051995798319328) 41%,
    rgba(231, 247, 163, 1) 100%
  );
  min-height: ${({ minHeight }) => minHeight || ""};
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ? theme.colors[backgroundColor] : ""};
  border-bottom: ${({ borderBottom }) => borderBottom || ""};
  border-top: ${({ borderTop }) => borderTop || ""};
  height: ${({ height }) => height || "100wh"};
`;

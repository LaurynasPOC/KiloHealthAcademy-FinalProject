import styled from "styled-components/macro";
import { color, ColorProps, display, DisplayProps } from "styled-system";
import { mobile, tablet } from "styles/breakpoints";
import { Theme } from "styles/theme";

interface ContainerStyles<T> extends ColorProps<T>, DisplayProps<T> {}

export const Container = styled.div<ContainerStyles<Theme>>`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 72rem;
  ${color};
  ${display};
  @media ${tablet} {
    max-width: 100%;
  }
  @media ${mobile} {
    max-width: 100%;
  }
`;

import styled from "styled-components/macro";
import { flexbox, FlexboxProps } from "styled-system";
import { Box } from "./Box";
import { Theme } from "styles/theme";

export const FlexWrapper = styled(Box)<FlexboxProps<Theme>>`
  display: flex;

  ${flexbox};
`;

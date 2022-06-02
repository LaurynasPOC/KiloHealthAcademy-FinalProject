import styled from "styled-components/macro";
import { flexbox, FlexboxProps } from "styled-system";
import { Box } from "./Box";
import { Theme } from "styles/theme";

interface FlexProps extends FlexboxProps<Theme> {
  flexDirection?: any;
}

export const FlexWrapper = styled(Box)<FlexProps>`
  display: flex;

  ${flexbox};
`;

import styled from "styled-components/macro";
import {
  alignSelf,
  AlignSelfProps,
  border,
  BorderProps,
  borderRadius,
  BorderRadiusProps,
  BoxShadowProps,
  color,
  ColorProps,
  compose,
  display,
  DisplayProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  zIndex,
  ZIndexProps,
} from "styled-system";

import { Theme } from "styles/theme";

const boxProps = compose(
  alignSelf,
  border,
  borderRadius,
  color,
  display,
  layout,
  position,
  space,
  shadow,
  textAlign,
  zIndex
);

export interface BoxStyles<T>
  extends AlignSelfProps<T>,
    BorderProps<T>,
    BorderRadiusProps<T>,
    ColorProps<T>,
    PositionProps<T>,
    DisplayProps<T>,
    BoxShadowProps<T>,
    LayoutProps<T>,
    ShadowProps<T>,
    TextAlignProps<T>,
    SpaceProps<T>,
    ZIndexProps<T> {
  backgroundImage?: string;
}

export const Box = styled.div<BoxStyles<Theme>>`
  background-image: ${({ backgroundImage }) => backgroundImage || ""};
  && {
    ${boxProps};
  }
`;

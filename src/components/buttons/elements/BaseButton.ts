import { ReactNode } from "react";
import styled from "styled-components/macro";
import {
  border,
  borderRadius,
  BorderRadiusProps,
  compose,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";
import { Theme } from "styles/theme";
import { Statuses } from "typings/generalTypes";

const defaultButtonProps = compose(layout, space);

export interface DefaultButtonProps
  extends SpaceProps<Theme>,
    LayoutProps<Theme>,
    BorderRadiusProps<Theme> {
  type?: "button" | "submit" | "reset";
  style?: any;
  text?: number;
  onClick?: () => void;
  status?: Statuses;
  children: ReactNode;
}

export type ButtonStyles = Pick<
  DefaultButtonProps,
  "margin" | "width" | "padding"
>;

export const BaseButton = styled.button<ButtonStyles>`
  display: block;
  padding: "0.5rem 1rem";
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeights.fw700};
  cursor: pointer;

  && {
    ${defaultButtonProps}
  }
`;

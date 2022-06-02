import React from "react";
import styled from "styled-components/macro";
import { mobile } from "styles/breakpoints";
import LoadingAnimation from "components/globalElements/LaodingAnimation";

import { BaseButton, DefaultButtonProps } from "./elements/BaseButton";

export const QuizButton: React.FC<DefaultButtonProps> = ({
  status,
  children,
  onClick,
  style,
  ...rest
}) => (
  <Button style={style} onClick={onClick} {...rest}>
    {status === "loading" ? <LoadingAnimation /> : children}
  </Button>
);

const Button = styled(BaseButton)<DefaultButtonProps>`
  margin: auto;
  height: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 0.5rem;
  max-width: 60%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
  @media ${mobile} {
    max-width: 90%;
  }
`;

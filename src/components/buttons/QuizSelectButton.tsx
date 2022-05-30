import React from "react";
import styled from "styled-components/macro";
import { smMobile } from "styles/breakpoints";
import LoadingAnimation from "components/globalElements/LaodingAnimation";

import { BaseButton, DefaultButtonProps } from "./elements/BaseButton";

export const QuizSelectButton: React.FC<DefaultButtonProps> = ({
  status,
  children,
  onClick,

  ...rest
}) => (
  <Button onClick={onClick} {...rest}>
    {status === "loading" ? <LoadingAnimation /> : children}
  </Button>
);

const Button = styled(BaseButton)<DefaultButtonProps>`
  margin: auto;
  height: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 0.5rem;
  max-width: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
  &::selection {
    background-color: black;
  }
  @media ${smMobile} {
    max-width: 70%;
  }
`;

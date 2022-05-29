import React from "react";
import styled from "styled-components/macro";

import { BaseButton, DefaultButtonProps } from "./elements/BaseButton";

export const PlansButton: React.FC<DefaultButtonProps> = ({
  status,
  children,
  onClick,
  ...rest
}) => (
  <Button onClick={onClick} {...rest}>
    {status === "loading" ? "Loading..." : children}
  </Button>
);

const Button = styled(BaseButton)<DefaultButtonProps>`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 18.75rem;
  max-width: 4rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

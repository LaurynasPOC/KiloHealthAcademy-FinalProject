import React from "react";
import styled from "styled-components/macro";

import { BaseButton, DefaultButtonProps } from "./elements/BaseButton";

export const DefaultButton: React.FC<DefaultButtonProps> = ({
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
  background-color: ${({ theme }) => theme.colors.accent || ""};

  max-width: 5rem;
  margin: 0.5rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.basegrey};
  }
`;

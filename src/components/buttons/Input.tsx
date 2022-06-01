import React from "react";
import styled from "styled-components/macro";
import { Box, BoxStyles } from "components/wrappers/Box";
import { Theme } from "styles/theme";
import { mobile } from "styles/breakpoints";

export type InputTypes =
  | "checkbox"
  | "radio"
  | "email"
  | "number"
  | "submit"
  | "text";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value?: string | number;
  placeholder?: string;
  type?: InputTypes;
  onChange?: (e: any) => void;
}

export const Input: React.FC<InputProps & BoxStyles<Theme>> = ({
  id,
  type,
  value,
  placeholder,
  onChange,
  ...props
}) => (
  <Box>
    <InputStyles
      id={id}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      {...props}
    />
  </Box>
);

const InputStyles = styled.input<InputProps>`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  max-width: 50%;
  cursor: pointer;
  @media ${mobile} {
    max-width: 90%;
  }
`;

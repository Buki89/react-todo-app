import React from "react";
import styled, { withTheme } from "styled-components";
import { Theme } from "../themes/theme";

interface ButtonStylesProps {
  color: string;
  styles: { [key: string]: string };
  theme: Theme;
}

const ButtonStyled = styled.button<ButtonStylesProps>`
  background: ${({ color }) => color};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  outline: none;
  transition: ${({ theme }) => theme.transition};
  ${({ styles }) => styles};

  &:hover {
    background: ${({ theme }) => theme.colors.turquiseLight};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
    line-height: 24px;
  }
`;

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  name: string;
  color?: string;
  onClick?: () => any;
  styles?: { [key: string]: string };
  theme: Theme;
}

const Button = ({
  type = "button",
  name,
  theme,
  color = theme.colors.turquise,
  onClick,
  styles
}: ButtonProps) => (
  <ButtonStyled type={type} color={color} onClick={onClick} styles={styles}>
    {name}
  </ButtonStyled>
);

export default withTheme(Button);

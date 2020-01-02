import React from "react";
import styled from "styled-components";

interface ButtonStylesProps {
  color: string;
  styles: { [key: string]: string };
}

const ButtonStyled = styled.button<ButtonStylesProps>`
  background: ${({ color }) => color};
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 3px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  ${({ styles }) => styles};
`;

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  name: string;
  color?: string;
  onClick?: () => any;
  styles?: { [key: string]: string };
}

const Button = ({
  type = "button",
  name,
  color = "#00ACC1",
  onClick,
  styles
}: ButtonProps) => (
  <ButtonStyled type={type} color={color} onClick={onClick} styles={styles}>
    {name}
  </ButtonStyled>
);

export default Button;

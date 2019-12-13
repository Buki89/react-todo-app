import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: ${({ color }) => color};
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 3px;
  width: 100%;
  height: 100%;
  max-width: 80px;
  max-height: 40px;
  font-weight: bold;
  margin: 2px;
  &:hover {
    cursor: pointer;
  }
`;

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  name: string;
  color: string;
  onClick: () => any;
}

const Button = ({ type = "button", name, color, onClick }: ButtonProps) => (
  <ButtonStyled type={type} color={color} onClick={onClick}>
    {name}
  </ButtonStyled>
);

export default Button;

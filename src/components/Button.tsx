import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: ${({ color }) => color};
  color: #fff;
  border: none;
  border-radius: 10px;
  max-width: 80px;
  max-height: 40px;
  width: 100%;
  height: 100%;
  padding: 5px;
  margin: 0 0 0 5px;
  font-weight: bold;
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

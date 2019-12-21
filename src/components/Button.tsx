import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  background: ${({ color }) => color};
  color: #fff;
  text-align: center;
  border: none;
  border-radius: 3px;
  max-width: 70px;
  font-weight: bold;
  margin: 0 0 0 5px;
  :hover {
    cursor: pointer;
  }
`;

interface ButtonProps {
  type?: "submit" | "button" | "reset";
  name: string;
  color: string;
  onClick?: () => any;
}

const Button = ({ type = "button", name, color, onClick }: ButtonProps) => (
  <ButtonStyled type={type} color={color} onClick={onClick}>
    {name}
  </ButtonStyled>
);

export default Button;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../themes/theme";

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
`;
const StyledLink = styled(Link)`
  background: ${theme.colors.color2};
  padding: 5px;
  margin: 0 10px;
  font-size: 25px;
  text-decoration: none;
  color: ${theme.colors.color1};
`;

const Menu = () => (
  <Wrapper>
    <StyledLink to="/home">Home</StyledLink>
    <StyledLink to="/progress">In progress</StyledLink>
    <StyledLink to="/summary">Summary</StyledLink>
  </Wrapper>
);

export default Menu;

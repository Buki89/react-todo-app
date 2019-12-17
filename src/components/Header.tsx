import React from "react";
import styled from "styled-components";
import theme from "../themes/theme";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  background: #333333;
  align-items: center;
  display: flex;
  max-height: 150px;
  justify-content: center;
  h1 {
    font-size: 36px;
    font-weight: 700;
    font-family: "Times New Roman", Times, serif;
    color: ${theme.colors.color1};
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Header = () => (
  <HeaderWrapper>
    <StyledLink to='/'>
      <h1>Todo application</h1>
    </StyledLink>
  </HeaderWrapper>
);

export default Header;

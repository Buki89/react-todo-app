import React from "react";
import styled from "styled-components";
import theme from "../themes/theme";

const HeaderWrapper = styled.div`
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

const Header = () => (
  <HeaderWrapper>
    <h1>Todo application</h1>
  </HeaderWrapper>
);

export default Header;

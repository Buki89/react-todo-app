import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  align-items: center;
  background: #d9d9d9;
  display: flex;
  height: 150px;
  justify-content: center;
`;

const Header = () => (
  <HeaderWrapper>
    <h1>TO DO</h1>
  </HeaderWrapper>
);

export default Header;

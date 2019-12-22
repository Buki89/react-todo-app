import React from "react";
import styled from "styled-components";
import theme from "../themes/theme";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #333333;
  max-height: 150px;
`;
const HeaderTitle = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 25px;
  font-weight: 700;
  font-family: "Times New Roman", Times, serif;
  color: ${theme.colors.color1};
`;
const Logout = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 0 15px 15px 0;
  color: ${theme.colors.color1};
  :hover {
    cursor: pointer;
  }
`;

interface HeaderProps {
  handleLogout: () => void;
}

const Header = (props: HeaderProps) => (
  <HeaderWrapper>
    <HeaderTitle to="/">
      <h1>Todo application</h1>
    </HeaderTitle>
    <Logout onClick={props.handleLogout}>Logout</Logout>
  </HeaderWrapper>
);

export default Header;

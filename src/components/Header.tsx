import React from "react";
import styled from "styled-components";
import { FaPowerOff } from "react-icons/fa";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const LogoutButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 15px;
  bottom: 15px;
  color: ${({ theme }) => theme.colors.whiteDirty};
  cursor: pointer;
`;

const AppName = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 42px;
  line-height: 50px;
  color: ${({ theme }) => theme.colors.whiteDirty};
  margin: 0;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.whiteDirty};
  margin: 0 16px;
`;

const LogoutText = styled.p`
  margin: 0 5px 0 0;
`;

interface HeaderProps {
  handleLogout?: () => void;
  withLogoutButton?: boolean;
}

const Header = ({ handleLogout, withLogoutButton = true }: HeaderProps) => (
  <Wrapper>
    <AppName>
      <H1>TODO</H1>
      <Text>or not</Text>
      <H1>TODO?</H1>
    </AppName>
    {withLogoutButton && (
      <LogoutButtonWrapper onClick={handleLogout}>
        <LogoutText>logout</LogoutText>
        <FaPowerOff />
      </LogoutButtonWrapper>
    )}
  </Wrapper>
);

export default Header;

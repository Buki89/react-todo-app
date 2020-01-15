import React from "react";
import styled from "styled-components";
import { FaPowerOff } from "react-icons/fa";
import { Box } from "../themes/styles";

const Wrapper = styled(Box)`
  position: relative;
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

export interface Button {
  handleLogout: () => void;
  title: string;
}

interface HeaderProps {
  button?: Button;
}

const Header = ({ button }: HeaderProps) => (
  <Wrapper>
    <AppName>
      <H1>TODO</H1>
      <Text>or not</Text>
      <H1>TODO?</H1>
    </AppName>
    {button && button.title && (
      <LogoutButtonWrapper onClick={button.handleLogout}>
        <LogoutText>{button.title}</LogoutText>
        <FaPowerOff />
      </LogoutButtonWrapper>
    )}
  </Wrapper>
);

export default Header;

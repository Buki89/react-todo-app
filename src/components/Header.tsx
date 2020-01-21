import React from "react";
import styled from "styled-components";
import { FaPowerOff } from "react-icons/fa";
import { Box } from "../themes/styles";
import { iconSize } from "../lib/helpers";

const Wrapper = styled(Box)`
  position: relative;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.black};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 120px;
  }
`;

const LogoutButtonWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 6px;
  bottom: 6px;
  color: ${({ theme }) => theme.colors.whiteDirty};
  cursor: pointer;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    right: 8px;
    bottom: 8px;
  }
`;

const AppName = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 28px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.whiteDirty};
  margin: 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 42px;
    line-height: 50px;
  }
`;

const Text = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.whiteDirty};
  margin: 0 10px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
    line-height: 24px;
    margin: 0 16px;
  }
`;

const LogoutText = styled.p`
  margin: 0 2px 0 0;
  font-size: 12px;
  line-height: 14px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 5px 0 0;
    font-size: 16px;
    line-height: 18px;
  }
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
        <FaPowerOff size={iconSize(18)} />
      </LogoutButtonWrapper>
    )}
  </Wrapper>
);

export default Header;

import React from "react";
import HomeDashboard from "./HomeDashboard";
import Header from "./Header";
import Menu from "./Menu";
import styled from "styled-components";
import theme from "../themes/theme";

export const MainContainer = styled.div`
  background: ${theme.colors.color2};
  padding: 20px;
`;

const HomePage = () => (
  <MainContainer>
    <Header />
    <Menu />
    <HomeDashboard />
  </MainContainer>
);

export default HomePage;

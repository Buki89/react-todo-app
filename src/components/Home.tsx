import React from "react";
import Dashboard from "./Dashboard";
import Header from "./Header";
import Menu from "./Menu";
import styled from "styled-components";
import theme from "../themes/theme";

const MainContainer = styled.div`
  background: ${theme.colors.color2};
  padding: 20px;
`;

const Home = () => (
  <MainContainer>
    <Header />
    <Menu />
    <Dashboard />
  </MainContainer>
);

export default Home;

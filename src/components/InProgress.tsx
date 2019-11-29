import React from "react";
import styled from "styled-components";
import theme from "../themes/theme";
import Header from "./Header";
import Menu from "./Menu";
import InProgressDashboard from "./InProgressDashboard";

const MainContainer = styled.div`
  background: ${theme.colors.color2};
  padding: 20px;
  max-width: 80rem;
  margin: 40px auto;
`;

class InProgress extends React.PureComponent<any, any> {
  render() {
    return (
      <MainContainer>
        <Header />
        <Menu />
        <InProgressDashboard />
      </MainContainer>
    );
  }
}
export default InProgress;

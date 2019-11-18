import React from "react";
import styled from "styled-components";
import AddItem from "./AddItem";

const BodyContainer = styled.div`
  background: #f2f2f2;
`;

interface DashBoardState {
  textValue: string;
}

interface Props {
  defaultValue?: string;
}

class Dashboard extends React.PureComponent<{}, DashBoardState> {
  state = {
    textValue: ""
  };

  onClick = (e: any) => {
    e.preventDefault();
  };
  onTextChange = (e: any) => {
    this.setState({ textValue: e.target.value });
  };

  render() {
    return (
      <BodyContainer>
        <div>
          <h2>Add what you should do</h2>
        </div>
        <AddItem />
      </BodyContainer>
    );
  }
}

export default Dashboard;

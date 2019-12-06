import React from "react";
import styled from "styled-components";
import theme from "../themes/theme";
import { Task } from "../types/types";
import InProgressTaskList from "./InProgressTaskList";

const BodyContainer = styled.div`
  background: ${theme.colors.color1};
  margin: 0 20px 20px 20px;
  padding: 40px;
  border: 1px solid ${theme.colors.color2};
  border-radius: 10px;
`;

const BordedWrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
`;

interface InProgressDashboardProps {
  taskList: Array<Task>;
}

const InProgressDashboard = ({ taskList }: InProgressDashboardProps) => (
  <BodyContainer>
    <BordedWrapper>
      <>
        <h2>Tasks in progress</h2>
        <InProgressTaskList taskList={taskList} />
      </>
    </BordedWrapper>
  </BodyContainer>
);

export default InProgressDashboard;

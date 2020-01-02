import React from "react";
import styled from "styled-components";
import { numberOfTasks } from "../lib/helpers";
import { Task, Filter } from "../types/types";
import { Box } from "../styles/styles";
import { GoGraph } from "react-icons/go";

const iconSize = 40;

const Wrapper = styled.div`
  position: relative;
  background: #f7e200;
  padding: 10px 20px;
  color: white;
  width: 100%;
  max-width: 200px;
  margin: 30px 0 50px;
`;

const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.black};
  width: ${iconSize}px;
  height: ${iconSize}px;
  top: calc(50% - ${iconSize / 2}px);
  left: -${iconSize}px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #333;
  margin: 0;
  text-transform: uppercase;
  &:not(:first-of-type) {
    font-weight: 700;
  }
`;

interface OverviewProps {
  taskList: Array<Task>;
}

interface Category {
  label: string;
  filter: Filter;
}

const Overview = (props: OverviewProps) => {
  const data: Array<Category> = [
    { label: "Done", filter: Filter.completed },
    { label: "Not done yet", filter: Filter.incompleted },
    { label: "All Tasks", filter: Filter.allTasks }
  ];

  return (
    <Wrapper>
      <IconWrapper>
        <GoGraph size={20} />
      </IconWrapper>
      {data.map((item: Category, index: number) => (
        <Box key={index} justifyContent="space-between">
          <Text>{item.label} </Text>
          <Text>{numberOfTasks(props.taskList, item.filter)}</Text>
        </Box>
      ))}
    </Wrapper>
  );
};
export default Overview;

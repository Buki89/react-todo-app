import React from "react";
import styled from "styled-components";
import { numberOfTasks } from "../lib/helpers";
import { Task, SortType } from "../store/types";
import { Box } from "../themes/styles";
import { GoGraph } from "react-icons/go";
import { TextStyles } from "../themes/typography";

const iconSize = 40;

const Wrapper = styled.div`
  position: relative;
  background: #f7e200;
  padding: 10px 20px;
  color: white;
  width: 100%;
  max-width: 200px;
  margin: 40px 0 15px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 0 50px;
  }
`;

const IconWrapper = styled(Box)`
  position: absolute;
  background: ${({ theme }) => theme.colors.black};
  width: ${iconSize}px;
  height: ${iconSize}px;
  top: -40px;
  left: 80px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: calc(50% - ${iconSize / 2}px);
    left: -${iconSize}px;
  }
`;

const Text = styled.p`
  ${TextStyles}
  color: #333;
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
  filter: SortType;
}

const Overview = (props: OverviewProps) => {
  const data: Array<Category> = [
    { label: "Done", filter: SortType.completed },
    { label: "Not done yet", filter: SortType.incompleted },
    { label: "All Tasks", filter: SortType.allTasks }
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

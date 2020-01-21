import React from "react";
import styled from "styled-components";
import { numberOfTasks } from "../lib/helpers";
import { Task, SortType } from "../store/types";
import { Box } from "../themes/styles";
import { GoGraph } from "react-icons/go";
import { TextStyles } from "../themes/typography";

const iconSize = 40;
const calculateCenter = `calc(50% - ${iconSize / 2}px)`;

const Wrapper = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.yellow};
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 200px;
  margin: 40px 0 15px;
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 0 20px;
  }
`;

const IconWrapper = styled(Box)`
  position: absolute;
  background: ${({ theme }) => theme.colors.black};
  width: ${iconSize}px;
  height: ${iconSize}px;
  top: -${iconSize}px;
  left: ${calculateCenter};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: ${calculateCenter};
    left: -${iconSize}px;
  }
`;

const Text = styled.p`
  ${TextStyles}
  color: ${({ theme }) => theme.colors.black};;
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
        <Box key={index} justifyContent='space-between'>
          <Text>{item.label} </Text>
          <Text>{numberOfTasks(props.taskList, item.filter)}</Text>
        </Box>
      ))}
    </Wrapper>
  );
};
export default Overview;

import React from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import styled from "styled-components";
import Overview from "./Overview";
import Pagination from "./Pagination";
import Select from "./fields/Select";
import { numberOfTasks } from "../lib/helpers";
import { HomePageActions } from "./HomePage";
import { Task, FilterState, SortType } from "../types/types";
import { Box } from "../themes/styles";

interface HomeDashboardProps {
  currentPage: number;
  handleAddTask: (params: Task) => void;
  taskList: Array<Task>;
  filter: FilterState;
  handleChangeFilter: (filter: string) => void;
  handleSortBy: (value: string) => void;
  getPageNumber: (pageNumber: number) => void;
  taskActions: Pick<
    HomePageActions,
    "startDeleteTask" | "startEditTask" | "startCompleteTask"
  >;
}

const Container = styled(Box)`
  flex-direction: column;
  margin: 10px auto;
  padding: 30px 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 5px 5px;
  }
`;
const Item = styled.div`
  margin: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 5px;
  }
`;
const ItemListContainer = styled.div`
  max-width: 600px;
  width: 100%;
`;
const OverviewBar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 5px;
  }
`;

const Dashboard = (props: HomeDashboardProps) => {
  const tasksAmount = numberOfTasks(props.taskList, props.filter.filterBy);

  return (
    <Container>
      <Item>
        <AddItemForm
          handleSubmit={props.handleAddTask}
          buttonTitle="Add Item"
          taskList={props.taskList}
        />
      </Item>
      <Overview taskList={props.taskList} />
      <ItemListContainer>
        <OverviewBar>
          <Select
            onChange={props.handleSortBy}
            label="Sort by"
            options={[
              { value: SortType.dateNewest, label: "Newest" },
              { value: SortType.dateOldest, label: "Oldest" },
              { value: SortType.fromAToZ, label: "A - Z" },
              { value: SortType.fromZToA, label: "Z - A" }
            ]}
          />
          <Select
            onChange={props.handleChangeFilter}
            options={[
              { value: SortType.allTasks, label: "All Tasks" },
              { value: SortType.completed, label: "Completed" },
              { value: SortType.incompleted, label: "Incompleted" }
            ]}
          />
        </OverviewBar>
        <ItemList
          taskList={props.taskList}
          filter={props.filter}
          taskActions={props.taskActions}
        />
      </ItemListContainer>
      <Pagination
        tasksAmount={tasksAmount}
        getPageNumber={props.getPageNumber}
        currentPage={props.currentPage}
      />
    </Container>
  );
};

export default Dashboard;

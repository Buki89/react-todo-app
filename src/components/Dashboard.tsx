import React from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import styled from "styled-components";
import { Task, FilterState, SortType, Filter } from "../types/types";
import Overview from "./Overview";
import Pagination from "./Pagination";
import { numberOfTasks } from "../lib/helpers";
import { HomePageActions } from "./HomePage";
import Select from "./fields/Select";

interface HomeDashboardProps {
  handleAddTask: (params: Task) => void;
  taskList: Array<Task>;
  filter: FilterState;
  handleChangeFilter: (filter: string) => void;
  handleSortBy: (value: string) => void;
  showPage: (pageNumber: number) => void;
  taskActions: Pick<
    HomePageActions,
    "startDeleteTask" | "startEditTask" | "startCompleteTask"
  >;
}

const Container = styled.div`
  flex-direction: column;
  background: #c0c0c0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Item = styled.div`
  margin: 20px;
`;
const ItemListContainer = styled.div`
  max-width: 600px;
  width: 100%;
`;
const OverviewBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px 0 0;
`;
const FlexDiv = styled.div`
  display: flex;
`;

const Dashboard = (props: HomeDashboardProps) => {
  const tasksAmount = numberOfTasks(props.taskList, props.filter.displayTasks);

  return (
    <Container>
      <Item>
        <AddItemForm
          handleSubmit={props.handleAddTask}
          buttonTitle="Add Item"
          taskList={props.taskList}
        />
      </Item>

      <ItemListContainer>
        <OverviewBar>
          <FlexDiv>
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
                { value: Filter.allTasks, label: "All Tasks" },
                { value: Filter.completed, label: "Completed" },
                { value: Filter.incompleted, label: "Incompleted" }
              ]}
            />
          </FlexDiv>
          <Overview taskList={props.taskList} />
        </OverviewBar>
        <ItemList
          taskList={props.taskList}
          filter={props.filter}
          taskActions={props.taskActions}
        />
      </ItemListContainer>
      <Pagination tasksAmount={tasksAmount} showPage={props.showPage} />
    </Container>
  );
};

export default Dashboard;

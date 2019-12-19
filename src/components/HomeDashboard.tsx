import React from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import styled from "styled-components";
import Filter from "./Filter";
import { Task, FilterState } from "../types/types";
import Overview from "./Overview";
import Pagination from "./Pagination";
import { numberOfTasks } from "../lib/helpers";
import Select from "./fields/Select";

interface HomeDashboardProps {
  handleAddTask: (params: Task) => void;
  taskList: Array<Task>;
  filter: FilterState;
  handleChangeFilter: (filter: string) => void;
  handleSortByMethod: () => void;
  showPage: (pageNumber: number) => void;
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
const SortIcon = styled.div`
  align-items: flex-end;
  display: flex;
  margin: 0 0 0 30px;
  padding: 10px;
`;
const OverviewBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 30px 0 0;
`;
const FlexDiv = styled.div`
  display: flex;
`;

const HomeDashboard = (props: HomeDashboardProps) => {
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
              label="Sort by"
              options={[
                { value: "dateNewest", label: "Newest" },
                { value: "dateOldest", label: "Oldest" },
                { value: "fromAToZ", label: "A - Z" },
                { value: "fromZToA", label: "Z - A" }
              ]}
            />

            <Filter handleChangeFilter={props.handleChangeFilter} />
          </FlexDiv>
          <Overview taskList={props.taskList} />
        </OverviewBar>
        <ItemList taskList={props.taskList} filter={props.filter} />
      </ItemListContainer>
      <Pagination tasksAmount={tasksAmount} showPage={props.showPage} />
    </Container>
  );
};

export default HomeDashboard;

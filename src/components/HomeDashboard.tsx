import React from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";
import styled from "styled-components";
import Filter from "./Filter";
import TabMenu from "./TabMenu";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import { Task, FilterState } from "../types/types";
import Overview from "./Overview";

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

const HomeDashboard = (props: HomeDashboardProps) => (
  <Container>
    <Item>
      <AddItemForm
        handleSubmit={props.handleAddTask}
        buttonTitle='Add Item'
        taskList={props.taskList}
      />
    </Item>

    <ItemListContainer>
      <OverviewBar>
        <FlexDiv>
          <SortIcon>
            {props.filter.sortAlphabetically ? (
              <FaSortAlphaDown onClick={props.handleSortByMethod} />
            ) : (
              <FaSortAlphaUp onClick={props.handleSortByMethod} />
            )}
          </SortIcon>
          <div>
            <Filter handleChangeFilter={props.handleChangeFilter} />
          </div>
        </FlexDiv>
        <Overview taskList={props.taskList} />
      </OverviewBar>

      <ItemList taskList={props.taskList} filter={props.filter} />
    </ItemListContainer>
    <Item>
      <TabMenu
        showPage={props.showPage}
        taskList={props.taskList}
        filterList={props.filter}
      />
    </Item>
  </Container>
);

export default HomeDashboard;

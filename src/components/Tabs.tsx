import React from "react";
import Header from "./Header";
import ItemList from "./ItemList";
import TabMenu from "./TabMenu";
import styled from "styled-components";
import Filter from "./Filter";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";
import { connect } from "react-redux";
import { State, Task, FilterState, FilterAction } from "../types/types";
import { filterChange, sortByMethod } from "../store/actions/filter";

const Container = styled.div`
  flex-direction: column;
  background: #d9d9d9;
  margin: auto;
  max-width: 800px;
  height: 100%;
  width: 100%;
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
  margin: 0 0 0 30px;
`;

interface TabsProps {
  taskList: Array<Task>;
  filter: FilterState;
  handleChangeFilter: (filter: string) => void;
  handleSortByMethod: () => void;
  filterChange: (
    filter: string
  ) => {
    type: FilterAction.FilterChange;
    payload: {
      filter: string;
    };
  };
  location: any;
  sortByMethod: () => void;
}

class Tabs extends React.PureComponent<TabsProps, any> {
  handleChangeFilter = (filter: string) => {
    this.props.filterChange(filter);
  };
  handleSortByMethod = () => {
    this.props.sortByMethod();
  };

  render() {
    return (
      <>
        <Header />
        <Container>
          <ItemListContainer>
            <SortIcon>
              {this.props.filter.ascendingSort ? (
                <FaSortAlphaDown onClick={this.handleSortByMethod} />
              ) : (
                <FaSortAlphaUp onClick={this.handleSortByMethod} />
              )}
            </SortIcon>

            <ItemList
              taskList={this.props.taskList}
              filter={this.props.filter}
              location={this.props.location}
            />
          </ItemListContainer>
          <Item>
            <TabMenu />
          </Item>
          <Item>
            <Filter handleChangeFilter={this.handleChangeFilter} />
          </Item>
        </Container>
      </>
    );
  }
}

const mapDispatchToProps = { filterChange, sortByMethod };

const mapStateToProps = (state: State) => {
  return {
    taskList: state.tasks,
    filter: state.filter
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);

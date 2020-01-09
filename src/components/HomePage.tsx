import React from "react";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import { startLogout } from "../store/actions/auth";
import {
  startTaskAdd,
  startSetTasks,
  startDeleteTask,
  startCompleteTask,
  startEditTask,
  EditTaskArgs
} from "../store/actions/task";
import {
  filterByChange,
  sortByChange,
  getPageNumber
} from "../store/actions/filter";
import { Action, State, Task, ThunkResult, FilterState } from "../types/types";

interface HomePageProps {
  taskList: Array<Task>;
  filter: FilterState;
  location: any;
  currentPage: number;
}

export interface HomePageActions {
  startTaskAdd: (task: Task) => ThunkResult<void>;
  startSetTasks: () => ThunkResult<void>;
  startLogout: () => ThunkResult<void>;
  filterByChange: (filter: string) => Action;
  sortByChange: (value: string) => Action;
  getPageNumber: (pageNumber: number) => Action;
  startDeleteTask: (id: string) => ThunkResult<void>;
  startCompleteTask: (id: string, isChecked: boolean) => ThunkResult<void>;
  startEditTask: (args: EditTaskArgs) => ThunkResult<void>;
}

class HomePage extends React.PureComponent<HomePageProps & HomePageActions> {
  handleAddTask = ({ taskName, id, createdAt }: Task) => {
    this.props.startTaskAdd({ taskName, id, createdAt, isCompleted: false });
  };
  // TODO: Unify filter and sortby actions
  handleChangeFilter = (filter: string) => {
    this.props.filterByChange(filter);
    this.props.getPageNumber(1);
  };

  handleSortBy = (value: string) => {
    this.props.sortByChange(value);
    this.props.getPageNumber(1);
  };

  handleShowPage = (pageNumber: number) => {
    this.props.getPageNumber(pageNumber);
  };

  handleLogout = () => {
    this.props.startLogout();
  };

  render() {
    return (
      <Layout
        header={{
          handleLogout: this.handleLogout,
          title: "logout"
        }}
      >
        <Dashboard
          currentPage={this.props.currentPage}
          taskList={this.props.taskList}
          filter={this.props.filter}
          handleAddTask={this.handleAddTask}
          handleChangeFilter={this.handleChangeFilter}
          handleSortBy={this.handleSortBy}
          getPageNumber={this.handleShowPage}
          taskActions={{
            startCompleteTask: this.props.startCompleteTask,
            startEditTask: this.props.startEditTask,
            startDeleteTask: this.props.startDeleteTask
          }}
        />
      </Layout>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    taskList: state.tasks,
    filter: state.filter,
    currentPage: state.filter.currentPage
  };
};

const mapDispatchToProps = {
  startTaskAdd,
  startSetTasks,
  filterByChange,
  sortByChange,
  getPageNumber,
  startLogout,
  startDeleteTask,
  startCompleteTask,
  startEditTask
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

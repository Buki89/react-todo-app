import React from "react";
import Header from "./Header";
import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import { startLogout } from "../store/actions/auth";
import {
  startTaskAdd,
  startSetTasks,
  startDeleteTask,
  startCompleteTask,
  startEditTask,
  StartEditTaskProps
} from "../store/actions/task";
import { filterChange, sortByMethod, showPage } from "../store/actions/filter";
import { Action, State, Task, ThunkResult, FilterState } from "../types/types";

interface HomePageProps {
  taskList: Array<Task>;
  filter: FilterState;
  location: any;
}

export interface HomePageActions {
  startTaskAdd: (task: Task) => ThunkResult<void>;
  startSetTasks: () => ThunkResult<void>;
  startLogout: () => ThunkResult<void>;
  filterChange: (filter: string) => Action;
  sortByMethod: (value: string) => Action;
  showPage: (pageNumber: number) => Action;
  startDeleteTask: (id: string) => ThunkResult<void>;
  startCompleteTask: (id: string, isChecked: boolean) => ThunkResult<void>;
  startEditTask: (props: StartEditTaskProps) => ThunkResult<void>;
}

class HomePage extends React.PureComponent<HomePageProps & HomePageActions> {
  handleAddTask = ({ taskName, id, createdAt }: Task) => {
    this.props.startTaskAdd({ taskName, id, createdAt });
  };
  // TODO: Unify filter and sortby actions
  // TODO: Unify also enums - filter and sortType
  handleChangeFilter = (filter: string) => {
    this.props.filterChange(filter);
    this.props.showPage(1);
  };

  handleSortBy = (value: string) => {
    this.props.sortByMethod(value);
    this.props.showPage(1);
  };

  handleShowPage = (pageNumber: number) => {
    this.props.showPage(pageNumber);
  };

  handleLogout = () => {
    this.props.startLogout();
  };

  render() {
    return (
      <>
        <Header handleLogout={this.handleLogout} />
        <Dashboard
          taskList={this.props.taskList}
          filter={this.props.filter}
          handleAddTask={this.handleAddTask}
          handleChangeFilter={this.handleChangeFilter}
          handleSortBy={this.handleSortBy}
          showPage={this.handleShowPage}
          taskActions={{
            startCompleteTask: this.props.startCompleteTask,
            startEditTask: this.props.startEditTask,
            startDeleteTask: this.props.startDeleteTask
          }}
        />
      </>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    taskList: state.tasks,
    filter: state.filter
  };
};

const mapDispatchToProps = {
  startTaskAdd,
  startSetTasks,
  filterChange,
  sortByMethod,
  showPage,
  startLogout,
  startDeleteTask,
  startCompleteTask,
  startEditTask
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

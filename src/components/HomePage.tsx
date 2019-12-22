import React from "react";
import Header from "./Header";
import HomeDashboard from "./HomeDashboard";
import { connect } from "react-redux";
import { logout, startLogout } from "../store/actions/auth";
import { startTaskAdd, startSetTasks } from "../store/actions/task";
import { filterChange, sortByMethod, showPage } from "../store/actions/filter";
import {
  State,
  Task,
  ThunkResult,
  FilterAction,
  FilterState,
  AuthAction
} from "../types/types";

interface HomePageProps {
  taskList: Array<Task>;
  filter: FilterState;
  location: any;
}

// TODO: debilní naming

interface HomePageActions {
  startTaskAdd: (task: Task) => ThunkResult<void>;
  startSetTasks: () => ThunkResult<void>;
  filterChange: (
    filter: string
  ) => {
    type: FilterAction.filterChange;
    payload: {
      filter: string;
    };
  };
  sortByMethod: (value: string) => void;
  handleShowPage: (pageNumber: number) => void;
  showPage: (
    pageNumber: number
  ) => {
    type: FilterAction.showPage;
    payload: {
      pageNumber: number;
    };
  };
  logout: () => { type: AuthAction.logout };
  startLogout: () => ThunkResult<void>;
}

class HomePage extends React.PureComponent<HomePageProps & HomePageActions> {
  handleAddTask = ({ taskName, id, createdAt }: Task) => {
    this.props.startTaskAdd({ taskName, id, createdAt });
  };

  handleChangeFilter = (filter: string) => {
    this.props.filterChange(filter);
    this.props.showPage(1);
  };

  handleSortBy = (value: string) => {
    this.props.sortByMethod(value);
  };

  handleShowPage = (pageNumber: number) => {
    this.props.showPage(pageNumber);
  };

  handleLogout = () => {
    this.props.logout();
    this.props.startLogout();
    console.log("User logout");
  };

  render() {
    return (
      <>
        <Header handleLogout={this.handleLogout} />
        <HomeDashboard
          taskList={this.props.taskList}
          filter={this.props.filter}
          handleAddTask={this.handleAddTask}
          handleChangeFilter={this.handleChangeFilter}
          handleSortBy={this.handleSortBy}
          showPage={this.handleShowPage}
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
  logout,
  startLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React from "react";
import Layout from "./Layout";
import Dashboard from "./Dashboard";
import { connect } from "react-redux";
import { startLogout } from "../store/actions/auth";
import {
  startAddTask,
  startSetTasks,
  startDeleteTask,
  startCompleteTask,
  startEditTask
} from "../store/actions/task";
import {
  filterByChange,
  sortByChange,
  getPageNumber
} from "../store/actions/filter";
import { State, Task, FilterState, SortType } from "../store/types";

interface HomePageProps {
  taskList: Array<Task>;
  filter: FilterState;
  location: any;
  currentPage: number;
}

export interface HomePageActions {
  startAddTask: typeof startAddTask;
  startSetTasks: typeof startSetTasks;
  startLogout: typeof startLogout;
  filterByChange: typeof filterByChange;
  sortByChange: typeof sortByChange;
  getPageNumber: typeof getPageNumber;
  startDeleteTask: typeof startDeleteTask;
  startCompleteTask: typeof startCompleteTask;
  startEditTask: typeof startEditTask;
}

class HomePage extends React.PureComponent<HomePageProps & HomePageActions> {
  state = {
    showModal: false
  };
  handleAddTask = ({ taskName, id, createdAt }: Task) => {
    this.props.startAddTask({ taskName, id, createdAt, isCompleted: false });
  };

  handleChangeFilter = (filter: SortType) => {
    this.props.filterByChange(filter);
    this.props.getPageNumber(1);
  };

  handleSortBy = (value: SortType) => {
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
  startAddTask,
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

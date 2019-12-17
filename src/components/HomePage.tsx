import React from "react";
import Header from "./Header";
import HomeDashboard from "./HomeDashboard";
import { connect } from "react-redux";
import { startTaskAdd, startSetTasks } from "../store/actions/task";
import { filterChange, sortByMethod, showPage } from "../store/actions/filter";
import {
  State,
  Task,
  ThunkResult,
  FilterAction,
  FilterState
} from "../types/types";

interface HomePageProps {
  taskList: Array<Task>;
  filter: FilterState;
  location: any;
}

type StartTaskAddAction = (task: Task) => ThunkResult<void>;
type StartSetTasksAction = () => ThunkResult<void>;
type FilterChange = (
  filter: string
) => {
  type: FilterAction.FilterChange;
  payload: {
    filter: string;
  };
};
// TODO: debilní naming
type SortByMethod = () => void;
interface HomePageActions {
  startTaskAdd: StartTaskAddAction;
  startSetTasks: StartSetTasksAction;
  filterChange: FilterChange;
  sortByMethod: SortByMethod;
  handleShowPage: (pageNumber: number) => void;
  showPage: (
    pageNumber: number
  ) => {
    type: FilterAction.ShowPage;
    payload: {
      pageNumber: number;
    };
  };
}

class HomePage extends React.PureComponent<HomePageProps & HomePageActions> {
  handleAddTask = ({ task, id }: Task) => {
    this.props.startTaskAdd({ task, id });
  };

  handleChangeFilter = (filter: string) => {
    this.props.filterChange(filter);
  };
  handleSortByMethod = () => {
    this.props.sortByMethod();
  };
  handleShowPage = (pageNumber: number) => {
    this.props.showPage(pageNumber);
  };

  render() {
    return (
      <>
        <Header />
        <HomeDashboard
          taskList={this.props.taskList}
          filter={this.props.filter}
          handleAddTask={this.handleAddTask}
          handleChangeFilter={this.handleChangeFilter}
          handleSortByMethod={this.handleSortByMethod}
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
  showPage
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

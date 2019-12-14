import React from "react";
import Header from "./Header";
import HomeDashboard from "./HomeDashboard";
import { connect } from "react-redux";
import { startTaskAdd, startSetTasks } from "../store/actions/task";
import { filterChange, sortByMethod } from "../store/actions/filter";
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
// TODO: naming
type SortByMethod = () => void;
interface HomePageActions {
  startTaskAdd: StartTaskAddAction;
  startSetTasks: StartSetTasksAction;
  filterChange: FilterChange;
  sortByMethod: SortByMethod;
}

class HomePage extends React.PureComponent<HomePageProps & HomePageActions> {
  handleAddTask = ({ task, id, createdAt }: Task) => {
    this.props.startTaskAdd({ task, id, createdAt });
  };

  handleChangeFilter = (filter: string) => {
    this.props.filterChange(filter);
  };
  handleSortByMethod = () => {
    this.props.sortByMethod();
  };

  render() {
    return (
      <div>
        <Header />
        <HomeDashboard
          taskList={this.props.taskList}
          filter={this.props.filter}
          handleAddTask={this.handleAddTask}
          handleChangeFilter={this.handleChangeFilter}
          handleSortByMethod={this.handleSortByMethod}
        />
      </div>
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
  sortByMethod
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

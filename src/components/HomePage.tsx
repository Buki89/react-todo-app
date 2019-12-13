import React from "react";
import Header from "./Header";
import HomeDashboard from "./HomeDashboard";
import { connect } from "react-redux";
import { startTaskAdd, startSetTasks } from "../store/actions/task";
import { filterChange } from "../store/actions/filter";
import { State, Task, ThunkResult, FilterAction } from "../types/types";

interface HomePageProps {
  taskList: Array<Task>;
  filterList: { filter: string };
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

interface HomePageActions {
  startTaskAdd: StartTaskAddAction;
  startSetTasks: StartSetTasksAction;
  filterChange: FilterChange;
}

class HomePage extends React.PureComponent<HomePageProps & HomePageActions> {
  handleAddTask = ({ task, id, createdAt }: Task) => {
    this.props.startTaskAdd({ task, id, createdAt });
  };

  handleChangeFilter = (filter: string) => {
    this.props.filterChange(filter);
  };

  render() {
    return (
      <div>
        <Header />
        <HomeDashboard
          taskList={this.props.taskList}
          filterList={this.props.filterList}
          handleAddTask={this.handleAddTask}
          handleChangeFilter={this.handleChangeFilter}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    taskList: state.tasks,
    filterList: state.filter
  };
};

const mapDispatchToProps = { startTaskAdd, startSetTasks, filterChange };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

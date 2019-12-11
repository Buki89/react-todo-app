import React from "react";
import Header from "./Header";
import HomeDashboard from "./HomeDashboard";
import { connect } from "react-redux";
import { startTaskAdd, startSetTasks } from "../store/actions/task";
import { State, Task, ThunkResult } from "../types/types";

interface HomePageProps {
  taskList: Array<Task>;
}

type StartTaskAddAction = (task: Task) => ThunkResult<void>;
type StartSetTasksAction = () => ThunkResult<void>;

interface HomePageActions {
  startTaskAdd: StartTaskAddAction;
  startSetTasks: StartSetTasksAction;
}

class HomePage extends React.PureComponent<HomePageProps & HomePageActions> {
  handleAddTask = ({ task, id, createdAt }: Task) => {
    this.props.startTaskAdd({ task, id, createdAt });
  };

  render() {
    return (
      <div>
        <Header />
        <HomeDashboard
          taskList={this.props.taskList}
          handleAddTask={this.handleAddTask}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    taskList: state.tasks
  };
};

const mapDispatchToProps = { startTaskAdd, startSetTasks };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

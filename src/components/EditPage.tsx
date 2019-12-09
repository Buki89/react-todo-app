import React from "react";
import theme from "../themes/theme";
import Header from "./Header";
import Menu from "./Menu";
import EditDashboard from "./EditDashboard";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  startEditTask,
  startRemoveTask,
  startCompleteTask
} from "../store/actions/taskActions";

export const MainContainer = styled.div`
  background: ${theme.colors.color2};
  padding: 20px;
  max-width: 80rem;
  margin: 40px auto;
`;

class EditPage extends React.PureComponent<any, any> {
  handleEditTask = ({ task, category, note, deadline }) => {
    this.props.startEditTask({
      task,
      category,
      id: this.props.taskList.id,
      note,
      deadline,
      createdAt: this.props.taskList.createdAt,
      isCompleted: this.props.taskList.isCompleted
    });
    this.props.history.push("/progress");
  };

  handleRemoveTask = () => {
    this.props.startRemoveTask({ id: this.props.taskList.id });
    this.props.history.push("/progress");
  };

  handleCompleteTask = () => {
    this.props.startCompleteTask({ id: this.props.taskList.id });
    this.props.history.push("/progress");
  };

  render() {
    return (
      <MainContainer>
        <Header />
        <Menu />
        <EditDashboard
          taskList={this.props.taskList}
          handleSubmit={this.handleEditTask}
          handleRemoveTask={this.handleRemoveTask}
          handleCompleteTask={this.handleCompleteTask}
        />
      </MainContainer>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    taskList: state.find(task => task.id === props.match.params.id)
  };
};

const mapDispatchToProps = {
  startEditTask,
  startRemoveTask,
  startCompleteTask
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);

import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import { MainContainer } from "./HomePage";
import SummaryDashboard from "./SummaryDashboard";
import { connect } from "react-redux";
import { Task } from "../types/types";

interface SummaryPageProps {
  taskList: Array<Task>;
}

const SummaryPage = (props: SummaryPageProps) => (
  <MainContainer>
    <Header />
    <Menu />
    <SummaryDashboard taskList={props.taskList} />
  </MainContainer>
);

const mapStateToProps = (state: Array<Task>) => {
  return {
    taskList: state
  };
};

export default connect(mapStateToProps)(SummaryPage);

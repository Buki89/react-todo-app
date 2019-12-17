import React from "react";
import { Task, FilterState } from "../types/types";
import { renderRefToPages } from "../components/TodoFunctions";
import styled from "styled-components";

const Div = styled.div`
  margin: 0 10px;
  :hover {
    cursor: pointer;
  }
`;

const Bar = styled.div`
  display: flex;
`;

interface TabsProps {
  showPage: (pagenumber: number) => void;
  taskList: Array<Task>;
  filterList: FilterState;
}
const Tabs = (props: TabsProps) => (
  <Bar>
    {renderRefToPages(props.taskList, props.filterList).map(
      (item: number, index) => (
        <Div onClick={() => props.showPage(item)} key={index}>
          {item}
        </Div>
      )
    )}
  </Bar>
);

export default Tabs;

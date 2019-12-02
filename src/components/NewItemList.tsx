import React from "react";
import styled from "styled-components";
import NewItem from "./NewItem";

const BordedWrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
  margin: 5px 0 0 0;
`;

const Header = styled.div`
  font-size: 20px;
  padding: 0 0 10px 0;
  font-weight: bold;
`;

const NewItemList = ({ taskList }) => (
  <BordedWrapper>
    <Header>Recently added</Header>
    <>
      {taskList &&
        taskList
          .filter((item, index) => index >= taskList.length - 5)
          .map(task => (
            <div key={task.id}>
              <NewItem task={task} />
            </div>
          ))}
    </>
  </BordedWrapper>
);

export default NewItemList;

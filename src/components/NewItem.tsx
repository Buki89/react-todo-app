import React from "react";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  div {
    margin: 0 10px;
    width: 100px;
  }
`;

class NewItem extends React.PureComponent<any, any> {
  render() {
    return (
      <Menu>
        <div>{this.props.task.task}</div>
        <div>{this.props.task.category}</div>
        <div>{this.props.task.createdAt}</div>
      </Menu>
    );
  }
}
export default NewItem;

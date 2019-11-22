import React from "react";
import AddItemForm from "./AddItemForm";
import { Task } from "./Dashboard";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  h2 {
    margin: 0 20px;
  }
`;

interface ItemProps {
  item: any;
  handleRemoveTask: (id: string) => void;
  handleEditTask: any;
}

class Item extends React.PureComponent<ItemProps> {
  state = {
    isVisible: false
  };
  render() {
    const { handleRemoveTask, item } = this.props;
    return (
      <div>
        <Wrapper>
          <h2>to do:{item.task}</h2>
          <h2>category: {item.category}</h2>
          <button onClick={() => handleRemoveTask(item.id)}>Remove item</button>
          <button
            onClick={() => this.setState({ isVisible: !this.state.isVisible })}
          >
            Edit item
          </button>
          {this.state.isVisible && (
            <AddItemForm
              handleSubmit={this.props.handleEditTask}
              buttonTitle='Edit item'
              id={item.id}
            />
          )}
        </Wrapper>
      </div>
    );
  }
}

export default Item;

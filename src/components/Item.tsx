import React from "react";
import AddItemForm from "./AddItemForm";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  div {
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
          <div>to do:{item.task}</div>
          <div>category: {item.category}</div>
          <div>
            <button onClick={() => handleRemoveTask(item.id)}>
              Remove item
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                this.setState({ isVisible: !this.state.isVisible })
              }
            >
              Edit item
            </button>
          </div>
          {this.state.isVisible && (
            <AddItemForm
              handleSubmit={this.props.handleEditTask}
              buttonTitle="Edit item"
              id={item.id}
            />
          )}
        </Wrapper>
      </div>
    );
  }
}

export default Item;

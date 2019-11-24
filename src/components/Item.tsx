import React from "react";
import AddItemForm from "./AddItemForm";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 80rem;
  div {
    margin: 0 20px;
    padding: 5px 20px;
  }
`;

interface ItemProps {
  item: any;
  handleRemoveTask: (id: string) => void;
  handleEditTask: any;
  handleCompleteTask: any;
}

class Item extends React.PureComponent<ItemProps> {
  state = {
    isVisible: false
  };

  render() {
    console.log(this.state);
    const { handleRemoveTask, item } = this.props;
    return (
      <div>
        <Wrapper>
          <div>Description: {item.task}</div>
          <div>Category: {item.category}</div>
          <div>
            <button onClick={() => handleRemoveTask(item.id)}>
              Remove item
            </button>
          </div>
          <div>
            <button
              name="Edit button"
              onClick={() =>
                this.setState({ isVisible: !this.state.isVisible })
              }
            >
              Edit item
            </button>
          </div>
          <div>
            <button onClick={() => this.props.handleCompleteTask(item.id)}>
              Complete Task
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

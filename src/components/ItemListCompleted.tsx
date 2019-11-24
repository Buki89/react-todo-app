import React from "react";
import styled from "styled-components";

interface ItemListCompletedProsp {
  list: any;
}

class ItemListCompleted extends React.PureComponent<
  ItemListCompletedProsp,
  any
> {
  render() {
    const { list } = this.props;
    return (
      <div>
        <h3>Completed tasks</h3>
        {list &&
          list
            .filter(item => item.isCompleted)
            .map((item, index: number) => (
              <div key={index}>
                <div>
                  Description: {item.task} Category: {item.category}
                </div>
              </div>
            ))}
      </div>
    );
  }
}

export default ItemListCompleted;

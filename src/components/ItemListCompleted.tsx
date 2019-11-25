import React from "react";

interface ItemListCompletedProsp {
  list: any;
}

class ItemListCompleted extends React.PureComponent<
  ItemListCompletedProsp,
  any
> {
  state = {
    textFilter: ""
  };

  onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const textFilter = e.target.value;
    this.setState({ textFilter });
  };

  render() {
    const { list } = this.props;
    return (
      <div>
        <h3>Completed tasks</h3>
        <input
          name="filter"
          type="text"
          placeholder="filter"
          value={this.state.textFilter}
          onChange={this.onTextChange}
        />

        {list &&
          list
            .filter(
              item =>
                item.isCompleted &&
                item.task
                  .toLowerCase()
                  .includes(this.state.textFilter.toLocaleLowerCase())
            )
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

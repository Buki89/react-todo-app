import React from "react";

interface ItemProps {
  list: Array<string>;
}

const Item = ({ list }: ItemProps) => (
  <>
    <h1>To Do List of items</h1>
    {list.map((item, index) => (
      <div key={index}>{item}</div>
    ))}
  </>
);
export default Item;

import React from "react";
import { MdDone } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  div {
    margin: 0 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Filter = () => (
  <Menu>
    <div>
      <MdDone onClick={() => console.log("ahoj")} />
    </div>
    <div>
      <GiCancel onClick={() => console.log("ahoj")} />
    </div>
    <div onClick={() => console.log("ahoj")}>ALL</div>
  </Menu>
);

export default Filter;

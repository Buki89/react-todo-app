import React from "react";
import { MdDone } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import styled from "styled-components";

//TODO fsldghdiuhidf

const Menu = styled.div`
  display: flex;
  div {
    margin: 0 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;

interface FilterProps {
  handleChangeFilter: (filter: string) => void;
}

const Filter = ({ handleChangeFilter }: FilterProps) => (
  <Menu>
    <div>
      <MdDone onClick={() => handleChangeFilter("Completed")} />
    </div>
    <div>
      <GiCancel onClick={() => handleChangeFilter("InCompleted")} />
    </div>
    <div onClick={() => handleChangeFilter("Everything")}>ALL</div>
  </Menu>
);

export default Filter;

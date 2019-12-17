import React from "react";
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

interface FilterProps {
  handleChangeFilter: (filter: string) => void;
}

const Filter = ({ handleChangeFilter }: FilterProps) => (
  <>
    <div>
      <input
        type='radio'
        id='complete'
        name='filter'
        onChange={() => handleChangeFilter("Completed")}
      />
      <label htmlFor='complete'>Complete</label>
    </div>
    <div>
      <input
        type='radio'
        id='incomplete'
        name='filter'
        onChange={() => handleChangeFilter("InCompleted")}
      />
      <label htmlFor='incomplete'>Incomplete</label>
    </div>
    <div>
      <input
        type='radio'
        id='total'
        name='filter'
        onChange={() => handleChangeFilter("Everything")}
      />
      <label htmlFor='total'>Total</label>
    </div>
  </>
);

export default Filter;

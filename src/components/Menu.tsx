import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background: #ffbb33;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Menu = () => (
  <Wrapper>
    <div>Home</div>
    <div>ToDO</div>
    <div>Summary</div>
  </Wrapper>
);

export default Menu;

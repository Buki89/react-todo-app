import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  background: #ffbb33;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Menu = () => (
  <Wrapper>
    <Link to="/">Home</Link>
    <Link to="/todo">ToDo</Link>
    <Link to="/summary">Summary</Link>
  </Wrapper>
);

export default Menu;

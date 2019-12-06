import React from "react";
import styled from "styled-components";
import { Task } from "../types/types";
import { Link } from "react-router-dom";
import theme from "../themes/theme";

const Column = styled.div`
  margin: 0 20px;
  width: 100px;
  text-align: center;
  padding: 10px;
  font-size: 20px;
`;
const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #000;
`;

interface InProgressItemProps {
  item: Task;
}

const InProgressItem = ({ item }: InProgressItemProps) => (
  <StyledLink to={`/edit/${item.id}`}>
    <Column>{item.task}</Column>
    <Column>{item.category}</Column>
    <Column>{item.createdAt}</Column>
    <Column>{item.deadline}</Column>
  </StyledLink>
);

export default InProgressItem;

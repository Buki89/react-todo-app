import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px;
  text-align: center;
`;

interface InputProps {
  name: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = (props: InputProps) => (
  <StyledInput
    maxLength={20}
    name={props.name}
    type='text'
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
  />
);

export default Input;

import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  font-size: 18px;
  line-height: 24px;
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
    type="text"
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
  />
);

export default Input;

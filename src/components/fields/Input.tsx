import React from "react";
import { StyledInput, TextAlignment } from "../../themes/fields";

interface InputProps {
  name: string;
  placeholder?: string;
  textAlign?: TextAlignment;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  className?: string;
}

const Input = (props: InputProps) => (
  <StyledInput
    maxLength={20}
    name={props.name}
    textAlign={props.textAlign}
    type='text'
    placeholder={props.placeholder}
    value={props.value}
    onChange={props.onChange}
    className={props.className}
  />
);

export default Input;

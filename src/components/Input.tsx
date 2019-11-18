import React, { useState } from "react";

interface InputProps {
  type?: "text";
  name: string;
  placeholder: string;
}

const Input = ({ type = "text", name, placeholder }: InputProps) => {
  const [value, onChangeValue] = useState("");

  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={e => onChangeValue(e.target.value)}
    />
  );
};

export default Input;

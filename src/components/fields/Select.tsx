import React from "react";
import styled from "styled-components";
import { Text } from "../../themes/typography";
import { StyledSelect } from "../../themes/fields";

const Label = styled.label`
  align-items: center;
  display: flex;
`;

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Array<Option>;
  label?: string;
  onChange: (value: string) => void;
}

interface SelectState {
  value: string;
}

class Select extends React.PureComponent<SelectProps, SelectState> {
  state = {
    value: ""
  };

  handleChangeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    return (
      <Label>
        <Text color="#000"> {this.props.label}</Text>

        <StyledSelect
          value={this.state.value}
          onChange={this.handleChangeValue}
        >
          {this.props.options.map((option: Option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </StyledSelect>
      </Label>
    );
  }
}

export default Select;

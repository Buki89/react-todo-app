import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  padding: 3px;
  margin: 0 2.5px;
  text-align: center;
  padding: 5px 10px;
  font-size: 16px;
  line-height: 24px;
  color: #666666;
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
      <label>
        {this.props.label}
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
      </label>
    );
  }
}

export default Select;

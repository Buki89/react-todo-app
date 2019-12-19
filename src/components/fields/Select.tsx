import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Array<Option>;
  label: string;
}

interface SelectState {
  value: string;
}

class Select extends React.PureComponent<SelectProps, SelectState> {
  state = {
    value: ""
  };

  handleChangeValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <label>
        {this.props.label}
        <select value={this.state.value} onChange={this.handleChangeValue}>
          {this.props.options.map((option: Option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default Select;

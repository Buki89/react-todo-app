import React from "react";

interface Option {
  id: string;
  label: string;
  checked?: boolean;
}

interface RadioState {
  value: string;
}

interface RadioProps {
  options: Array<Option>;
  name: string;
  onChange?: (value: string) => void;
}

class Radio extends React.PureComponent<RadioProps, RadioState> {
  state = {
    value: ""
  };

  handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ value: e.target.value });
    if (this.props.onChange) {
      this.props.onChange(e.target.value);
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.props.options.map((item: Option, index) => (
          <div key={index}>
            <input
              type="radio"
              id={item.id}
              name={this.props.name}
              value={item.id}
              onChange={this.handleChangeValue}
              checked={item.checked}
            />
            <label htmlFor={item.id}>{item.label}</label>
          </div>
        ))}
      </div>
    );
  }
}
export default Radio;

import React from "react";
import styled from "styled-components";

interface CheckboxProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const checkboxSize = "23px";
const mobileSize = "21px";

const StyledCheckbox = styled.input`
  position: relative;
  -webkit-appearance: none;
  border: 0;
  outline: 0;
  width: ${checkboxSize};
  height: ${checkboxSize};
  background: transparent;
  z-index: 0;
  cursor: pointer;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: "10px";
    height: "10px";
  }

  &:checked:after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    position: absolute;
    top: 3px;
    left: 3px;
    z-index: 0;
    background: transparent no-repeat;
    background-image: url("/images/check.svg");
  }

  &:before {
    box-sizing: border-box;

    content: "";
    display: block;
    width: ${checkboxSize};
    height: ${checkboxSize};
    border: 1px solid
      ${({ checked, theme }) =>
        checked ? theme.colors.green : theme.colors.gray};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: ${mobileSize};
      height: ${mobileSize};
      top: 2px;
    }
  }
`;

class Checkbox extends React.PureComponent<CheckboxProps> {
  render() {
    return (
      <StyledCheckbox
        type='checkbox'
        checked={this.props.checked}
        onChange={e => this.props.onChange(e)}
      />
    );
  }
}

export default Checkbox;

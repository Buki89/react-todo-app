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
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      top: 2px;
      left: 4px;
    }
  }

  &:before {
    box-sizing: border-box;

    content: "";
    display: block;
    width: ${mobileSize};
    height: ${mobileSize};
    border: 1px solid
      ${({ checked, theme }) =>
        checked ? theme.colors.green : theme.colors.gray};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.white};
    position: absolute;
    top: 2px;
    left: 0;
    z-index: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: ${checkboxSize};
      height: ${checkboxSize};
      top: 0;
    }
  }
`;

class Checkbox extends React.PureComponent<CheckboxProps> {
  render() {
    return (
      <StyledCheckbox
        type="checkbox"
        checked={this.props.checked}
        onChange={e => this.props.onChange(e)}
      />
    );
  }
}

export default Checkbox;

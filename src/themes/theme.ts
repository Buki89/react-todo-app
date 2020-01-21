type Color = { [color: string]: string };
type Transition = string;
type Breakpoint = { [device: string]: string };

export interface Theme {
  colors: Color;
  transition: Transition;
  breakpoints: Breakpoint;
}

const colors: Color = {
  gray: "#C0C0C0",
  grayDark: "#666",
  grayLight: "#CCC",
  black: "#333",
  whiteDirty: "#F6F6F6",
  turquise: "#00ACC1",
  turquiseLight: "#00CBE6",
  white: "#FFF",
  yellow: "#f7E200",
  red: "#CC0000",
  redLight: "#d85d71",
  green: "#28e08d"
};

const transition: Transition = "all 0.2s ease-in-out";

const breakpoints: Breakpoint = {
  mobile: "425px"
};

const theme: Theme = {
  colors,
  transition,
  breakpoints
};

export default theme;

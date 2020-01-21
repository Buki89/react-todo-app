type Color = { [color: string]: string };
type Transition = string;
type Breakpoint = { [device: string]: string };
type Size = { [size: string]: string };

export interface Theme {
  colors: Color;
  transition: Transition;
  breakpoints: Breakpoint;
  sizes: Size;
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

const sizes: Size = {
  xs: "5px",
  s: "10px",
  m: "15px",
  l: "20px",
  xl: "25px",
  xxl: "30px",
  xxxl: "40px"
};

const transition: Transition = "all 0.2s ease-in-out";

const breakpoints: Breakpoint = {
  mobile: "425px"
};

const theme: Theme = {
  colors,
  transition,
  breakpoints,
  sizes
};

export default theme;

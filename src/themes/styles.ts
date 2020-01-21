import styled from "styled-components";

type FlexAlignment =
  | "flex-start"
  | "flex-end"
  | "space-between"
  | "center"
  | "space-around";

interface BoxProps {
  flexDirection?: "column" | "row";
  justifyContent?: FlexAlignment;
  alignItems?: FlexAlignment;
  width?: string;
  maxWidth?: string;
  display?: "flex" | "block";
  margin?: string;
}

export const Box = styled.div<BoxProps>`
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  ${({ width }) => width && `width: ${width}`};
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}`};
  ${({ margin }) => margin && `margin : ${margin}`};
`;

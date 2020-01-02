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
}

export const Box = styled.div<BoxProps>`
  display: ${({ display }) => display || "flex"};
  flex-direction: ${({ flexDirection }) => flexDirection || "row"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  align-items: ${({ alignItems }) => alignItems || "flex-start"};
  ${({ width }) => width && `width: ${width}`};
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}`};
`;

// TODO: unify styles and themes folders
// TODO: create typography file
// TODO: colors from theme

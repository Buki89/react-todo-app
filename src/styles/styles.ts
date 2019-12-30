import styled from "styled-components";
import theme from "../themes/theme";

export const BordedWrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
`;

export const BodyContainer = styled.div`
  background: ${theme.colors.color1};
  margin: 0 20px 20px 20px;
  padding: 40px;
  border: 1px solid ${theme.colors.color2};
  border-radius: 10px;
`;

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

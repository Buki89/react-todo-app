import styled, { css } from "styled-components";
import { H4Styles } from "./typography";

export enum TextAlignment {
  left = "left",
  center = "center",
  right = "right"
}

interface SharedStylesProps {
  textAlign?: TextAlignment;
}

export const SharedStyles = css<SharedStylesProps>`
  ${H4Styles};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  padding: 5px;
  text-align: ${({ textAlign }) => textAlign || "center"};
  outline: none;
  &:focus {
    border: 1px solid #00acc1;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 5px 10px;
  }
`;

export const StyledInput = styled.input`
  ${SharedStyles};
`;

export const StyledSelect = styled.select`
  ${SharedStyles};
  margin: 0 5px;
`;

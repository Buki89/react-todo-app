import styled, { css } from "styled-components";

const sizes = {
  H1: {
    size: "42px",
    height: "50px",
    sizeMobile: "28px",
    heightMobile: "32px"
  },
  Text: {
    size: "18px",
    height: "24px",
    sizeMobile: "16px",
    heightMobile: "22px"
  },
  TextSmall: {
    size: "14px",
    height: "18px",
    sizeMobile: "12px",
    heightMobile: "16px"
  }
};

const SharedStyles = css<{ fontWeight: number; color: string }>`
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  color: ${({ color, theme }) => color || theme.colors.gray};
  margin: 0;
`;

// H1
export const H1Styles = css`
  ${SharedStyles}
  font-size: ${sizes.H1.sizeMobile};
  line-height: ${sizes.H1.heightMobile};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${sizes.H1.size};
    line-height: ${sizes.H1.height};
  }
`;

export const H1 = styled.h1`
  ${H1Styles};
`;

// Text
export const TextStyles = css`
  ${SharedStyles}
  font-size: ${sizes.Text.size};
  line-height: ${sizes.Text.height};
`;

export const Text = styled.p`
  ${TextStyles};
`;

// TextSmall
export const TextSmallStyles = css`
  ${SharedStyles}
  font-size: ${sizes.TextSmall.size};
  line-height: ${sizes.TextSmall.height};
`;

export const TextSmall = styled.p`
  ${TextSmallStyles};
`;

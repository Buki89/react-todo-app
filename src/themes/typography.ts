import styled, { css } from "styled-components";

const sizes = {
  h1: {
    size: "42px",
    height: "50px",
    sizeMobile: "28px",
    heightMobile: "32px"
  },
  h4: {
    size: "18px",
    height: "24px",
    sizeMobile: "16px",
    heightMobile: "22px"
  },
  text: {
    size: "16px",
    height: "20px",
    sizeMobile: "14px",
    heightMobile: "18px"
  },
  textSmall: {
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
  font-size: ${sizes.h1.sizeMobile};
  line-height: ${sizes.h1.heightMobile};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${sizes.h1.size};
    line-height: ${sizes.h1.height};
  }
`;

export const H1 = styled.h1`
  ${H1Styles};
`;

// H4
export const H4Styles = css`
  ${SharedStyles}
  font-size: ${sizes.h4.sizeMobile};
  line-height: ${sizes.h4.heightMobile};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${sizes.h4.size};
    line-height: ${sizes.h4.height};
  }
`;

export const H4 = styled.h4`
  ${H4Styles};
`;

// Text
export const TextStyles = css`
  ${SharedStyles}
  font-size: ${sizes.text.sizeMobile};
  line-height: ${sizes.text.heightMobile};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${sizes.text.size};
    line-height: ${sizes.text.height};
  }
`;

export const Text = styled.p`
  ${TextStyles};
`;

// TextSmall
export const TextSmallStyles = css`
  ${SharedStyles}
  font-size: ${sizes.textSmall.sizeMobile};
  line-height: ${sizes.textSmall.heightMobile};
  @media (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${sizes.textSmall.size};
    line-height: ${sizes.textSmall.height};
  }
`;

export const TextSmall = styled.p`
  ${TextSmallStyles};
`;

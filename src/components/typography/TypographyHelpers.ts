import { css } from "styled-components/macro";

import { Theme } from "styles/theme";
import { mobile, tablet } from "styles/breakpoints";

import { TextType } from "./Typography";

export const applyTextType = (type: TextType, theme: Theme) => {
  switch (type) {
    case "h1":
      return css`
        font-weight: ${theme.typography.h1.fontWeight};
        font-size: ${theme.typography.h1.desktopFontSize};
        line-height: ${theme.typography.h1.desktopLineHeight};
        @media ${tablet} {
          font-size: ${theme.typography.h1.tabletFontSize};
          line-height: ${theme.typography.h1.tabletLineHeight};
        }
        @media ${mobile} {
          font-size: ${theme.typography.h1.mobibleFontSize};
          line-height: ${theme.typography.h1.mobileLineHeight};
        }
      `;
    case "h2":
      return css`
        font-weight: ${theme.typography.h2.fontWeight};
        font-size: ${theme.typography.h2.desktopFontSize};
        line-height: ${theme.typography.h2.desktopLineHeight};
        @media ${tablet} {
          font-size: ${theme.typography.h2.tabletFontSize};
          line-height: ${theme.typography.h2.tabletLineHeight};
        }
        @media ${mobile} {
          font-size: ${theme.typography.h2.mobibleFontSize};
          line-height: ${theme.typography.h2.mobileLineHeight};
        }
      `;
    case "h3":
      return css`
        font-weight: ${theme.typography.h3.fontWeight};
        font-size: ${theme.typography.h3.desktopFontSize};
        line-height: ${theme.typography.h3.desktopLineHeight};
        @media ${tablet} {
          font-size: ${theme.typography.h3.tabletFontSize};
          line-height: ${theme.typography.h3.tabletLineHeight};
        }
        @media ${mobile} {
          font-size: ${theme.typography.h3.mobibleFontSize};
          line-height: ${theme.typography.h3.mobileLineHeight};
        }
      `;
    case "h4":
      return css`
        font-weight: ${theme.typography.h4.fontWeight};
        font-size: ${theme.typography.h4.desktopFontSize};
        line-height: ${theme.typography.h4.desktopLineHeight};
        @media ${tablet} {
          font-size: ${theme.typography.h4.tabletFontSize};
          line-height: ${theme.typography.h4.tabletLineHeight};
        }
        @media ${mobile} {
          font-size: ${theme.typography.h4.mobibleFontSize};
          line-height: ${theme.typography.h4.mobileLineHeight};
        }
      `;
    case "h5":
      return css`
        font-weight: ${theme.typography.h5.fontWeight};
        font-size: ${theme.typography.h5.desktopFontSize};
        line-height: ${theme.typography.h5.desktopLineHeight};
        @media ${tablet} {
          font-size: ${theme.typography.h5.tabletFontSize};
          line-height: ${theme.typography.h5.tabletLineHeight};
        }
        @media ${mobile} {
          font-size: ${theme.typography.h5.mobibleFontSize};
          line-height: ${theme.typography.h5.mobileLineHeight};
        }
      `;
    case "h6":
      return css`
        font-weight: ${theme.typography.h6.fontWeight};
        font-size: ${theme.typography.h6.desktopFontSize};
        line-height: ${theme.typography.h6.desktopLineHeight};
        @media ${tablet} {
          font-size: ${theme.typography.h6.tabletFontSize};
          line-height: ${theme.typography.h6.tabletLineHeight};
        }
        @media ${mobile} {
          font-size: ${theme.typography.h6.mobileFontSize};
          line-height: ${theme.typography.h6.mobileLineHeight};
        }
      `;
    case "body16":
      return css`
        font-weight: ${theme.typography.body16.fontWeight};
        font-size: ${theme.typography.body16.fontSize};
        line-height: ${theme.typography.body16.desktopLineHeight};
        @media ${tablet} {
          line-height: ${theme.typography.body16.tabletLineheight};
        }
        @media ${mobile} {
          line-height: ${theme.typography.body16.mobileLineHeight};
        }
      `;
    case "caption14":
      return css`
        font-weight: ${theme.typography.caption14.fontWeight};
        font-size: ${theme.typography.caption14.fontSize};
        line-height: ${theme.typography.caption14.lineheight};
      `;
  }
};

import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    text-transform: ${theme.fonts.cases.uppercase};
    font-weight: bold;
    font-size: ${theme.fonts.sizes.md};
    padding: ${theme.spacings.md};
    color: ${theme.default.mainColor};
    position: relative;

    &::after{
      content: '';
      position: absolute;
      bottom: 6px;
      left: 0;
      right: 0;
      margin: auto;
      width: 0;
      height: 2.5px;
      background-color: ${theme.default.secondaryColor};
      transition: all .15s linear;
    }

    &:hover::after{
      width: 50%;
    }
  `}
`;

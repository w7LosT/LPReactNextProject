import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    bottom: 30px;
    right: 15px;
    width: 50px;
    height: 50px;
    font-size: ${theme.fonts.sizes.lg};
    color: ${theme.default.darkBG};
    background-color: ${theme.default.colorWhite};
    border-radius: 100%;
    border: 2px solid ${theme.default.darkBG};
    box-shadow: 0 3px 6px rgba(0, 0, 0, .4);
    z-index: 6;
    opacity: .7;
    transition: all .3s ease-in-out;

    &:hover{
      opacity: 1;
    }
  `}
`;

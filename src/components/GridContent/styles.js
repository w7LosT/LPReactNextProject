import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme, background }) => css`
    max-width: 580px;
    margin: 0 auto;
    text-align: center;

    & h1{
      background: none;
      color: ${ background ? theme.default.colorWhite : theme.default.primaryColor };
    }

    & a{
      color: ${ background ? theme.default.colorWhite : theme.default.primaryColor };
    }
  `}
`;

export const Html = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.lg} 0;
  `}
`;

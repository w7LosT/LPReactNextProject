import styled, { css } from "styled-components";

const containerBackgroundActivate = (theme) => css`
  background: ${theme.default.mainColor};
  color: ${theme.default.colorWhite};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background: ${theme.default.colorWhite};
    color: ${theme.default.mainColor};
    ${background && containerBackgroundActivate(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 15px;
  `}
`;

import styled, { css } from "styled-components";

export const Container = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-around;

    @media ${theme.medias.lteMedium} {
      flex-flow: column nowrap;
    }
  `}
`;

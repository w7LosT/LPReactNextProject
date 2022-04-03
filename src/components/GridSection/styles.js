import styled, { css } from "styled-components";
import { Title as  HeadingContainer } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 1140px;
    margin: 0 auto;
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.lg};
    padding: ${theme.spacings.xlg} 0;
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    ${HeadingContainer}{
      position: relative;
      left: 35px ;
      margin-bottom: 10px;
    }

    ${HeadingContainer}::before{
      counter-increment: grid-counter;
      content: counter(grid-counter);
      position: absolute;
      font-size: ${theme.fonts.sizes.xlg};
      top: -1rem;
      left: -3rem;
      transform: rotate(5deg);
    }
  `}
`;

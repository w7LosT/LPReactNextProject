import styled, { css } from "styled-components";
import { Title as  HeadingContainer } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 10px;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${theme.spacings.lg};
    padding: ${theme.spacings.xlg} 0;
  `}
`;

export const GridElement = styled.div`
  ${({ theme }) => css`
    overflow: hidden;
    transition: all .3s ease;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .5);

    &:hover{
      transform: scale(1.1);
      box-shadow: 0 6px 8px rgba(0, 0, 0, .5);

    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;

  `}
`;

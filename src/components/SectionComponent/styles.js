import styled, { css } from "styled-components";
import { Title as Heading } from '../Heading/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 1200px;
    margin: 0 auto;
    padding: ${theme.spacings.lg};
  `}
`;

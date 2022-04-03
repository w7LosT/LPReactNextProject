import styled, { css } from "styled-components";
import {Text} from '../TextComponent/styles';
import {Container as SectionComponent} from '../SectionComponent/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, .3);

    & a{
      color: inherit;
      text-decoration: none;
    }

    & ${Text}{
      font-size: ${theme.fonts.sizes.sm};
    }
  `}
`;

import styled, { css } from "styled-components";
import {Title} from '../Heading/styles';

export const Container = styled.div`
  ${({ theme, background }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: ${theme.spacings.lg};
    align-items: center;
    padding: 25px;

    ${Title}{
      margin-bottom: ${theme.spacings.lg};
      text-align: center;
      background: none !important;
      color: ${background ? theme.default.colorWhite : theme.default.mainColor};
    }

    @media ${theme.medias.lteMedium}{
      grid-template-columns: 1fr;
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css``}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    text-align: center;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 600px;

    @media ${theme.medias.lteMedium}{
      max-width: 300px;
    }
  `}
`;

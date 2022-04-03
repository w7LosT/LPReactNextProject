import styled, { css } from "styled-components";
import { Container as SectionComponent } from '../SectionComponent/styles';

export const isMenuOpen = (theme) => css`
  visibility: visible;
  opacity: 1;
`;

export const Container = styled.div`
  ${({ theme, visible }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid ${theme.default.mainBG};
    background-color: ${theme.default.colorWhite};
    z-index: 5;
    transition: all .3s ease;

    & ${SectionComponent}{
      min-width: 800px;
      padding-top: 12px;
      padding-bottom: 12px;
    }

    @media ${theme.medias.lteMedium}{
      height: 100vh;
      visibility: hidden;
      opacity: 0;
      ${visible && isMenuOpen(theme)};

      & ${SectionComponent}{
        min-width: 100%;
        overflow-y: auto;
      }
    }
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: space-between;

    @media ${theme.medias.lteMedium}{
        flex-flow: column wrap;
        justify-content: center;
        height: 100%;
    }
  `}
`;

export const BurgerButton = styled.button`
  ${({ theme, visible }) => css`
    z-index: 6;
    position: fixed;
    top: 0;
    right: 0;
    padding: 5px;
    background-color: ${theme.default.darkBG};
    color: ${theme.default.colorWhite};
    border: none;
    cursor: pointer;
    display: none;
    pointer-events: ${visible ? 'none' : 'all'};

    > svg{
      width: 35px;
      height: 35px;
    }

    @media ${theme.medias.lteMedium}{
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

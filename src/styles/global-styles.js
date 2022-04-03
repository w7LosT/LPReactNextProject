import { createGlobalStyle, css } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    /*
      usado para representar px em rem
      Ex.: 10px = 1.0rem
           15px = 1.5rem
            5px = 0.5rem
    */
    font-size: 62.5%;
    font-family: ${ theme.fonts.families.montserrat };
    scroll-behavior: smooth;
  }

  p{
    margin: ${({theme}) => theme.spacings.lg};
  }

  ul, ol{
    margin: ${({theme}) => theme.spacings.md};
    padding: ${({theme}) => theme.spacings.md};
  }
`;

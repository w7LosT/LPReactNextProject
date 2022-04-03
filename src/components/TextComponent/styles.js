import styled, { css } from "styled-components";

export const Text = styled.div`
  ${
    ({ theme }) => css`
      font-size: ${theme.fonts.sizes.md};
    `
  }
`;

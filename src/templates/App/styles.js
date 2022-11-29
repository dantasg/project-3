import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  // Também é possível passar props para o css
  /* ${({ theme }) => css`
    background: ${theme.colors.secondaryBg};
  `} */
`;

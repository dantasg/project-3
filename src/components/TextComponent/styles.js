import styled, { css } from 'styled-components';
// import { theme } from '../../styles/theme';

export const Container = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;

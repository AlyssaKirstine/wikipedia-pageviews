import { css } from '@emotion/react';
import { COLORS } from '../../styles/colors';

export const layoutStyles = css`
  margin: 0 auto;
`;

export const headerStyles = css`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;

  h1 {
    color: ${COLORS.primary};
  }
`;

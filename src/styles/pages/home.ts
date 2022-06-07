import { css } from '@emotion/react';
import { COLORS } from '../colors';

export const userInputSectionStyles = css`
  display: flex;
  margin: 8px;
  gap: 8px;
  justify-content: center;

  .react-datepicker-wrapper {
    width: unset;
  }
`;

export const labelStyles = css`
  color: ${COLORS.secondary};
  font-weight: bold;
`;

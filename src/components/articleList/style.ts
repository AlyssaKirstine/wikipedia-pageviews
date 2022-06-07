import { css } from '@emotion/react';
import { COLORS } from '../../styles/colors';
import { MEDIA_QUERIES } from '../../styles/mediaQueries';

export const cardContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA_QUERIES.tabletUp} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const cardStyles = css`
  background-color: ${COLORS.lightbrown};
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow-wrap: break-word;
  padding: 8px;
  margin: 8px 0;

  ${MEDIA_QUERIES.tabletUp} {
    width: 300px;
    margin: 8px;
  }
`;

export const rankStyles = css`
  color: ${COLORS.white};
`;

export const nameStyles = css`
  a {
    text-decoration: none;
    color: ${COLORS.black};

    :hover {
      text-decoration: underline;
    }
  }
`;

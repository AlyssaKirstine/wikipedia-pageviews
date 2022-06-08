import { css } from '@emotion/react';
import { COLORS } from '../../styles/colors';
import { MEDIA_QUERIES } from '../../styles/mediaQueries';

export const pinnedArticlesStyles = css`
  text-align: center;
  margin: 0 auto;
  color: ${COLORS.brown};

  ul {
    list-style: none;
    padding: unset;
  }

  a {
    text-decoration: none;
    color: black;

    :hover {
      text-decoration: underline;
    }
  }
`;

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

export const pinIconStyles = css`
  transition: transform 0.5s ease-in-out;
  padding: 12px;
  width: fit-content;
  margin: 0 auto;

  :hover {
    transform: rotate(300deg);
  }

  // The following code removes the default button styles.
  // For a larger project this would best be applied globally,
  // but this is the only button I need it done for.
  background-color: unset;
  color: ${COLORS.black};
  font-weight: unset;
  font-size: unset;
  text-transform: unset;
  border: unset;
  border-radius: unset;
  width: unset;
  box-shadow: unset;
  cursor: pointer;
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

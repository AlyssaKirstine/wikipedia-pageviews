import axios from 'axios';
import React, { useEffect, useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import {
  cardContainerStyles,
  cardStyles,
  nameStyles,
  rankStyles,
} from './style';

interface ArticleType {
  article: string;
  views: number;
  rank: number;
}

const ArticleList = ({
  date,
  numberOfResults,
}: {
  date: Date;
  numberOfResults: number;
}) => {
  const [articles, setArticles] = useState<Array<ArticleType>>();

  useEffect(() => {
    const fetchData = async () => {
      const formattedDate = date
        .toISOString()
        .slice(0, 10)
        .replaceAll('-', '/');

      const response = await axios.get(
        `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/${formattedDate}`,
      );

      setArticles(response.data.items[0].articles.slice(0, numberOfResults));
    };

    fetchData().catch(console.error);
  }, [date, numberOfResults]);

  return (
    <div css={cardContainerStyles}>
      {!articles ? (
        <p>loading article list</p>
      ) : (
        articles.map(({ article: name, rank, views }) => {
          return (
            <div key={name} css={cardStyles}>
              <p css={rankStyles}>
                <strong>#{rank}</strong>
              </p>
              <h2 css={nameStyles}>
                <a href={`https://en.wikipedia.org/wiki/${name}`}>{name}</a>
              </h2>
              <p>{views} views</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ArticleList;

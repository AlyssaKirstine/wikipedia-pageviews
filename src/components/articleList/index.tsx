import axios from 'axios';
import React, { useEffect, useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';
import { formatArticleName, getArticleUrl } from '../../utils/article';
import {
  cardContainerStyles,
  cardStyles,
  nameStyles,
  pinIconStyles,
  pinnedArticlesStyles,
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
  const [pinnedArticles, setPinnedArticles] = useState<Array<string>>();

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

  useEffect(() => {
    const storedArticles = localStorage.getItem('articles');
    if (storedArticles) setPinnedArticles(JSON.parse(storedArticles));
  }, []);

  const handlePinClick = (name: string) => {
    addArticlePin(name);
  };

  const addArticlePin = (name: string) => {
    let newArticlesArray: Array<string> = [];
    const storedArticles = localStorage.getItem('articles');

    if (storedArticles) {
      newArticlesArray = JSON.parse(storedArticles);
      if (newArticlesArray.find((element) => element === name))
        alert(
          `You've already pinned this article. Why don't you explore something new?`,
        );
      else newArticlesArray.push(name);
    }
    setPinnedArticles(newArticlesArray);
    localStorage.setItem('articles', JSON.stringify(newArticlesArray));
  };

  const removeArticlePin = (name: string) => {
    let newArticlesArray: Array<string> = [];
    const storedArticles = localStorage.getItem('articles');

    if (storedArticles) {
      newArticlesArray = JSON.parse(storedArticles);
      newArticlesArray = newArticlesArray.filter((value) => value !== name);
      setPinnedArticles(newArticlesArray);
      localStorage.setItem('articles', JSON.stringify(newArticlesArray));
    }
  };

  return (
    <div>
      <div css={pinnedArticlesStyles}>
        <p>
          <strong>Pins:</strong>
        </p>
        <p>Click the 📌 icon to save an article here.</p>
        <ul>
          {pinnedArticles?.map((article) => (
            <li key={article}>
              <a href={getArticleUrl(article)}>{formatArticleName(article)}</a>{' '}
              <button onClick={() => removeArticlePin(article)}>delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div css={cardContainerStyles}>
        {!articles ? (
          <p>loading article list</p>
        ) : (
          articles.map(({ article: name, rank, views }) => {
            return (
              <div key={name} css={cardStyles}>
                <button
                  onClick={() => handlePinClick(name)}
                  css={pinIconStyles}
                >
                  📌
                </button>
                <p css={rankStyles}>
                  <strong>#{rank}</strong>
                </p>
                <h2 css={nameStyles}>
                  <a href={getArticleUrl(name)}>{formatArticleName(name)}</a>
                </h2>
                <p>{views} views</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ArticleList;

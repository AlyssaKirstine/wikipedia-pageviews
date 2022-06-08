import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import ArticleList from '../components/articleList';
import Layout from '../components/layout';
import { labelStyles, userInputSectionStyles } from '../styles/pages/home';

const HomePage = () => {
  const getYesterdaysDate = () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
  };

  const [date, setDate] = useState<Date>(getYesterdaysDate());
  const [numberOfResults, setNumberOfResults] = useState(100);

  useEffect(() => {
    setDate(getYesterdaysDate());
  }, []);

  const handleNumberOfResultsChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setNumberOfResults(Number(event.target.value));
  };

  const handleStartDateChange = (date: Date) => {
    if (date > getYesterdaysDate()) alert('Please enter a date before today.');
    else setDate(date);
  };

  return (
    <Layout
      pageTitle="Wikipedia Pageviews 👀"
      pageDescription="Have you ever wondered which Wikipedia pages are viewed the most on a
    particular day? Use this tool to easily find out! ✨"
    >
      <div>
        <div css={userInputSectionStyles}>
          <label css={labelStyles}>Date:</label>
          <DatePicker selected={date} onChange={handleStartDateChange} />
        </div>
        <div css={userInputSectionStyles}>
          <label css={labelStyles}>Number of results:</label>
          {/* Todo: pull out into own component? */}
          <select
            value={numberOfResults}
            onChange={handleNumberOfResultsChange}
          >
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={75}>75</option>
            <option value={100}>100</option>
            <option value={200}>200</option>
          </select>
        </div>
      </div>
      <br />
      <ArticleList date={date} numberOfResults={numberOfResults} />
    </Layout>
  );
};

export default HomePage;

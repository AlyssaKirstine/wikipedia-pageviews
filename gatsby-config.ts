import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Wikipedia Pageviews`,
    siteUrl: `https://wikipedia-pageviews.netlify.app/`,
  },
  plugins: ['gatsby-plugin-emotion'],
};

export default config;

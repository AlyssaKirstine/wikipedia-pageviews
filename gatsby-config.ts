import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Wikipedia Pageviews`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ['gatsby-plugin-emotion'],
};

export default config;

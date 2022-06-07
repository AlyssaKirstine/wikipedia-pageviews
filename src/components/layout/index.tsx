import React from 'react';
import { headerStyles, layoutStyles } from './style';

const Layout = ({
  pageTitle,
  pageDescription,
  children,
}: {
  pageTitle: string;
  pageDescription?: string;
  children: React.ReactNode;
}) => {
  return (
    <div css={layoutStyles}>
      {/* TODO - add seo component here */}
      <div css={headerStyles}>
        <title>{pageTitle}</title>
        <h1>{pageTitle}</h1>
        {pageDescription && <p>{pageDescription}</p>}
      </div>
      <main>{children}</main>
      <footer>
        Made with 💜 by <a href="https://alyssakirstine.com">Alyssa Melendez</a>
      </footer>
    </div>
  );
};

export default Layout;

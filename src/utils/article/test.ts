import { formatArticleName, getArticleUrl } from '.';

describe('utils/article', () => {
  describe('formatArticleName()', () => {
    const expectedResults: Record<string, string> = {
      Main_Page: 'Main Page',
      'Dr._Seuss': 'Dr. Seuss',
      'The_Martian_(film)': 'The Martian (film)',
    };

    it('formats the article names correctly', () => {
      const articles = Object.keys(expectedResults);

      articles.forEach((article) => {
        const formattedName = formatArticleName(article);

        expect(formattedName).toEqual(expectedResults[article]);
      });
    });
  });

  describe('getArticleUrl()', () => {
    const expectedResults: Record<string, string> = {
      Main_Page: 'https://en.wikipedia.org/wiki/Main_Page',
      'Dr._Seuss': 'https://en.wikipedia.org/wiki/Dr._Seuss',
      'The_Martian_(film)': 'https://en.wikipedia.org/wiki/The_Martian_(film)',
    };

    it('returns a valid article url', () => {
      const articles = Object.keys(expectedResults);

      articles.forEach((article) => {
        const articleUrl = getArticleUrl(article);

        expect(articleUrl).toEqual(expectedResults[article]);
      });
    });
  });
});

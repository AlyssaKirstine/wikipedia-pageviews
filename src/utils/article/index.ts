export const formatArticleName = (name: string) => {
  return name.replaceAll('_', ` `);
};

export const getArticleUrl = (name: string) => {
  return `https://en.wikipedia.org/wiki/${name}`;
};

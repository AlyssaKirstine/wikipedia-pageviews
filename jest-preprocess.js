const babelOptions = {
  presets: ['babel-preset-gatsby', '@emotion/babel-preset-css-prop'],
  env: {
    test: {
      presets: ['@babel/preset-typescript', '@emotion/babel-preset-css-prop'],
    },
  },
};

module.exports = require('babel-jest').default.createTransformer(babelOptions);

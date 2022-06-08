<div align="center">
<h1>
  Wikipedia Pageviews 👀
</h1>
  <p>Wikipedia Pageviews is a single-page application that allows users to pick and date and see which Wikipedia pages were viewed the most that day. They can also save articles they want to come back to as pins.</p>
      <p>Created by <a href="https://github.com/AlyssaKirstine">@AlyssaKirstine</a></p>
  </div>

## 🕵️ Technical Details

Wikipedia Pageviews was built using the [Gatsby](https://www.gatsbyjs.com/) framework and deployed using [Netlify](https://www.netlify.com/).

See it live 😍 https://wikipedia-pageviews.netlify.app/

- The homepage is setup in [`src/pages/index.tsx`](https://github.com/AlyssaKirstine/wikipedia-pageviews/blob/main/src/pages/index.tsx).
- Testing
  - This repo is setup to support [Jest tests](https://jestjs.io/). Check out an example test in [`src/utils/article/`](https://github.com/AlyssaKirstine/wikipedia-pageviews/tree/main/src/utils/article/test.ts).
- Code formatting
  - This repo uses ESLint and Prettier to format the code automatically before any commits are made.

## 🚀 Build Instructions

1.  **Setup your local copy of this repo.**

    Use `git clone` to clone this repo to your local computer.

    Using HTTPS:

    ```shell
    git clone https://github.com/AlyssaKirstine/wikipedia-pageviews.git
    ```

    Using SSH:

    ```shell
    git clone git@github.com:AlyssaKirstine/wikipedia-pageviews.git
    ```

2.  **Install node modules.**

    Navigate to the project directory and install node modules.

    ```shell
    cd wikipedia-pageviews/
    yarn install
    ```

3.  **Build site**

    To start a development build, run `yarn start`.

    ```shell
    yarn start
    ```

    To start a production build, run `yarn build`. This will generate bundle files via webpack in your `public` root folder.
    Then run `yarn serve` to serve.

    ```shell
    yarn build
    yarn serve
    ```

4.  **Check it out!**

    Visit the applicable URL in your browser of choice.

    Development build: [`http://localhost:8000`](http://localhost:8000)

    Production build: [`http://localhost:9000`](http://localhost:9000)

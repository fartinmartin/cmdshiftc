module.exports = {
  siteMetadata: {
    title: `⌘⇧C`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve("./src/components/layouts/post.js"),
          default: require.resolve("./src/components/layouts/page.js"),
        },
        remarkPlugins: [require("remark-slug"), require("remark-kbd")],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-style-guide`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-images`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
  ],
}

module.exports = {
  pathPrefix: `/lawrnce.github.io`,
  siteMetadata: {
    title: `Lawrence Tran`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
}

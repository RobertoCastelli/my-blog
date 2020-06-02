module.exports = {
  siteMetadata: {
    title: "Diary of an impostor",
    author: "Roberto Castelli",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
    },
  ],
}

const path = require("path")

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    // Create slug from Node JS basename
    const slug = path.basename(node.fileAbsolutePath, ".md")
    // Create node field --> Assign slug
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const templates = {
    blogTemplate: path.resolve("src/templates/blogTemplate.js"),
    filterTagTemplate: path.resolve("src/templates/filterTagTemplate.js"),
  }
  const res = await graphql(`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
        totalCount
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  const posts = res.data.allMarkdownRemark.edges
  posts.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.fields.slug}`,
      component: templates.blogTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })

  const tags = res.data.allMarkdownRemark.group
  tags.forEach(tag => {
    createPage({
      path: `/tags/${tag.fieldValue}`,
      component: templates.filterTagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}

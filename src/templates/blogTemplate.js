import React from "react"
import Layout from "../components/Layout"
import Helm from "../components/Helm"
import { graphql } from "gatsby"
import blogStyle from "../pages/blog.module.css"

const BlogTemplate = ({ data }) => {
  return (
    <div>
      <Layout>
        <Helm title="Post" />
        <div
          className={blogStyle.blogMarkdown}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></div>
      </Layout>
    </div>
  )
}

export default BlogTemplate

export const postQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
  }
`

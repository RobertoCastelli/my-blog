import React from "react"
import Layout from "../components/Layout"
import Helm from "../components/Helm"
import { graphql } from "gatsby"

const BlogTemplate = ({ data }) => {
  return (
    <div>
      <Layout>
        <Helm title="Post" />
        <div
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

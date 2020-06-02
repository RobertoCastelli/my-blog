import React from "react"
import Helm from "../components/Helm"
import Layout from "../components/Layout"
import { graphql, useStaticQuery } from "gatsby"

const Tags = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        totalCount
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <div>
      <Helm title="tags" />
      <Layout>
        <h1>TAGS</h1>
        <p>total posts: {data.allMarkdownRemark.totalCount}</p>
        <ul>
          {data.allMarkdownRemark.group.map(tag => {
            return (
              <li key={tag.fieldValue}>
                {tag.fieldValue} <span>{tag.totalCount}</span>
              </li>
            )
          })}
        </ul>
      </Layout>
    </div>
  )
}

export default Tags

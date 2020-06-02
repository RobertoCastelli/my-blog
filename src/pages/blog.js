import React from "react"
import Layout from "../components/Layout"
import Helm from "../components/Helm"
import Post from "../components/Post"
import { graphql, useStaticQuery, Link } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Helm title="Blog" />
        <div>
          <h1>POSTS</h1>
          <ul>
            {data.allMarkdownRemark.edges.map(({ node }) => {
              return (
                <li key={node.id}>
                  <Link to={`/blog/${node.fields.slug}`}>
                    <Post
                      title={node.frontmatter.title}
                      date={node.frontmatter.date}
                    />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default Blog

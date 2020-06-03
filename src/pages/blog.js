import React from "react"
import Layout from "../components/Layout"
import Helm from "../components/Helm"
import Post from "../components/Post"
import blogStyle from "./blog.module.css"
import { graphql, useStaticQuery, Link } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            fields {
              slug
            }
            timeToRead
            frontmatter {
              title
              date
              tags
              intro
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

        <h1>POSTS</h1>
        <ul className={blogStyle.blogList}>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <li key={node.id} className={blogStyle.blogItem}>
                <Link to={`/blog/${node.fields.slug}`}>
                  <Post
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    intro={node.frontmatter.intro}
                    timeToRead={node.timeToRead}
                  />
                </Link>
                <ul className={blogStyle.tagList}>
                  {node.frontmatter.tags.map((tag, index) => {
                    return (
                      <Link to={`/tags/${tag}`}>
                        <li key={index} className={blogStyle.tagItem}>
                          {tag}
                        </li>
                      </Link>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </Layout>
    </div>
  )
}

export default Blog

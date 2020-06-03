import React from "react"
import Layout from "../components/Layout"
import Helm from "../components/Helm"
import Post from "../components/Post"
import blogStyle from "../pages/blog.module.css"
import { graphql, Link } from "gatsby"

const FilterTagTemplate = ({ data }) => {
  return (
    <div>
      <Layout>
        <Helm title="Tag filter" />
        <div>
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
        </div>
      </Layout>
    </div>
  )
}

export default FilterTagTemplate

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
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
`

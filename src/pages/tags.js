import React from "react"
import Helm from "../components/Helm"
import Layout from "../components/Layout"
import tagsStyle from "./tags.module.css"

import { graphql, useStaticQuery, Link } from "gatsby"

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
      <Helm title="Tags" />
      <Layout>
        <h1>TAGS</h1>
        <p className={tagsStyle.tagCounter}>
          total posts: {data.allMarkdownRemark.totalCount}
        </p>
        <ul className={tagsStyle.tagList}>
          {data.allMarkdownRemark.group.map((tag, index) => {
            return (
              <Link key={index} to={`/tags/${tag.fieldValue}`}>
                <li className={tagsStyle.tagItem}>
                  {tag.fieldValue}{" "}
                  <span className={tagsStyle.tagBadge}>{tag.totalCount}</span>
                </li>
              </Link>
            )
          })}
        </ul>
      </Layout>
    </div>
  )
}

export default Tags

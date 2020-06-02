import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

const Helm = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <div>
      <Helmet
        title={`${title} | ${data.site.siteMetadata.title}`}
        defer={false}
      />
    </div>
  )
}

export default Helm

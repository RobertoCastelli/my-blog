import React from "react"
import "./index.css"
import Layout from "../components/Layout"
import Helm from "../components/Helm"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "impostor.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <Helm title="Home" />
        <h1>DIARY OF AN IMPOSTOR</h1>
        <Img
          className="index-image"
          fluid={data.file.childImageSharp.fluid}
          alt="impostor"
        />
        <p className="index-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eum
          voluptas eaque necessitatibus nulla? Cum voluptatem, quod deleniti
          saepe expedita numquam, dolorem facilis asperiores distinctio ipsam,
          delectus libero reiciendis eum.
        </p>
      </Layout>
    </div>
  )
}

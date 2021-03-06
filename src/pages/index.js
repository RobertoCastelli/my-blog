import React from "react"
import "./index.css"
import Layout from "../components/Layout"
import Helm from "../components/Helm"
import { graphql, useStaticQuery, Link } from "gatsby"
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
        <Link to="/blog">
          <Img
            className="index-image"
            fluid={data.file.childImageSharp.fluid}
            alt="impostor"
          />
        </Link>

        <div className="index-content">
          <i>
            "Impostor syndrome is a psychological pattern in which an individual
            doubts their accomplishments despite external evidence of their
            competence"
          </i>
          <p>
            Hi, my name is Roberto and I'm a 42 y.o. Project Manager. Since I
            was a youngster I had a passion for programming languages. I
            recently asked myself: why not bring into fruition my avid interest
            in this field to enhance my career?
          </p>
          <p>
            I began putting every possible effort to achieve this goal (and
            still continuing to do so) once I decided to pursue this path. This
            blog is a story in continuous evolution to keep track of my
            progress, paths, errors, achievements in the hopes of helping other
            people to share this adventure.
          </p>
          <p>
            Special thanks to Daniele Di Lucido & Jaga Santagostino, my mentor.
          </p>
        </div>
      </Layout>
    </div>
  )
}

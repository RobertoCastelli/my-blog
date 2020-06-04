import React from "react"
import navStyle from "./navbar.module.css"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
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
    <nav>
      <a
        href="https://robertocastelli.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Img
          className={navStyle.navImage}
          fluid={data.file.childImageSharp.fluid}
          alt="dune"
        />
      </a>
      <ul className={navStyle.navList}>
        <Link to="/">
          <li className={navStyle.navItem}>home</li>
        </Link>
        <Link to="/blog">
          <li className={navStyle.navItem}>blog</li>
        </Link>
        <Link to="/tags">
          <li className={navStyle.navItem}>tags</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar

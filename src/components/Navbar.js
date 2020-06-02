import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <nav>
        <p>LOGO</p>
        <ul>
          <Link to="/">
            <li>home</li>
          </Link>
          <Link to="/blog">
            <li>blog</li>
          </Link>
          <Link to="/tags">
            <li>tags</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar

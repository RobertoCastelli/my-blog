import React from "react"
import navStyle from "./navbar.module.css"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div>
      <nav>
        <p className={navStyle.navBrand}>LOGO</p>
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
    </div>
  )
}

export default Navbar

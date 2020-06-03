import React from "react"
import layoutStyle from "./layout.module.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyle.container}>
      <div className={layoutStyle.content}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout

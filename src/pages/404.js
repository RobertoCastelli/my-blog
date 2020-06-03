import React from "react"
import errorStyle from "./error.module.css"
import Layout from "../components/Layout"
import Helm from "../components/Helm"

const PageNotFound = props => {
  return (
    <Layout>
      <Helm title="404 page" />
      <div className={errorStyle.container}>
        <h1>ERROR 404</h1>
        <p>
          page not found at{" "}
          <span className={errorStyle.path}>{props.location.pathname}</span>
        </p>
      </div>
    </Layout>
  )
}

export default PageNotFound

import React from "react"

const PageNotFound = props => {
  console.log(props)
  return (
    <div>
      <h1>ERROR 404</h1>
      <p>page not found at {props.location.pathname}</p>
    </div>
  )
}

export default PageNotFound

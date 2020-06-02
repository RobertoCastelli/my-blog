import React from "react"

const Post = ({ title, date }) => {
  return (
    <div>
      <p>{title}</p>
      <p>{date}</p>
    </div>
  )
}

export default Post

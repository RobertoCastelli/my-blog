import React from "react"
import postStyle from "./post.module.css"

const Post = ({ title, date, intro, timeToRead }) => {
  return (
    <div>
      <div className={postStyle.postInfo}>
        <div className={postStyle.postDate}>{date} </div>
        <div className={postStyle.postRead}>{timeToRead} min read</div>
      </div>
      <div className={postStyle.postTitle}>{title}</div>
      <div className={postStyle.postIntro}>{intro}</div>
    </div>
  )
}

export default Post

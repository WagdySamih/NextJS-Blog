import ReactMarkdown from "react-markdown"
import PostHeader from "./PostHeader"

import classes from "./PostContent.module.css"
const PostContent = ({ post }) => {

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={post.image} />
      <ReactMarkdown>
        {post.content}
      </ReactMarkdown>
    </article>
  )
}
export default PostContent
import PostItem from "./PostItem"
import classes from "./PostsGrid.module.css"
const PostsGrid = ({ posts }) => {

  return (
    <ul className={classes.grid}>
      {posts.map((post) => <PostItem key={post.id} post={post} />)}
    </ul>
  )
}

export default PostsGrid
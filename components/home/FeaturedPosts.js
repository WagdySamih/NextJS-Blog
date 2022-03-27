import PostsGrid from "../posts/PostsGrid"
import classes from "./FeaturedPosts.module.css"

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h1>Featured Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  )
}

export default FeaturedPosts

import AllPosts from "../../components/posts/AllPosts"
import { getAllPosts } from "../../utils/postsHelper"

const PostsPage = ({ posts }) => {
  return <AllPosts posts={posts} />
}

export const getStaticProps = () => {
  const posts = getAllPosts()
  return {
    props: { posts }
  }
}

export default PostsPage
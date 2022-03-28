import Main from "../components/home/Main"
import FeaturedPosts from "../components/home/FeaturedPosts"

import { getFeaturedPosts } from "../utils/postsHelper"
const HomePage = ({ posts }) => {

  return (
    <>
      <Main />
      <FeaturedPosts posts={posts} />
    </>
  )
}


export const getStaticProps = () => {
  const posts = getFeaturedPosts()
  return {
    props: { posts }
  }
}

export default HomePage

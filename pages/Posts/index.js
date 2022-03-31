import { Fragment } from "react"
import Head from "next/head"
import AllPosts from "../../components/posts/AllPosts"
import { getAllPosts } from "../../utils/postsHelper"

const PostsPage = ({ posts }) => {
  return (
    <Fragment>
      <Head>
        <title>NextJS Blog | All Posts</title>
        <meta name="description" content="NextJS Blog | All Posts" />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  )
}


export const getStaticProps = () => {
  const posts = getAllPosts()
  return {
    props: { posts }
  }
}

export default PostsPage
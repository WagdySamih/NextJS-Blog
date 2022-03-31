import { Fragment } from "react"
import Head from "next/head"
import Main from "../components/home/Main"
import FeaturedPosts from "../components/home/FeaturedPosts"

import { getFeaturedPosts } from "../utils/postsHelper"
const HomePage = ({ posts }) => {

  return (
    <Fragment>
      <Head>
        <title>NextJS Blog</title>
        <meta name="description" content="Programming articles website" />
      </Head>
      <Main />
      <FeaturedPosts posts={posts} />
    </Fragment>
  )
}


export const getStaticProps = () => {
  const posts = getFeaturedPosts()
  return {
    props: { posts }
  }
}

export default HomePage

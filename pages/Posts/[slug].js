
import { Fragment } from "react"
import Head from "next/head"
import PostContent from "../../components/postsDetails/PostContent"
import { getPostDetails, getPostsFilesPaths } from "../../utils/postsHelper"

const PostDetailsPage = ({ post }) => {
  return <Fragment>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
    </Head>
    <PostContent post={post} />
  </Fragment>
}

export const getStaticProps = (context) => {
  const { params } = context;
  const { slug } = params
  const post = getPostDetails(slug);
  return {
    props: { post }
  }
}

export const getStaticPaths = () => {
  const paths = getPostsFilesPaths();
  const slugs = paths.map((p) => p.replace(".md", ""))
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false
  }
}

export default PostDetailsPage

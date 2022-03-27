import PostHeader from "./PostHeader"

import classes from "./PostContent.module.css"
const PostContent = () => {
  const DUMMY_POST = {
    slug: "Getting-started-with-Next.js",
    title: "Getting started with Next.js",
    image: "next.png",
    content: "#This is just dummy text"
  }
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={DUMMY_POST.image} />
    </article>
  )
}
export default PostContent
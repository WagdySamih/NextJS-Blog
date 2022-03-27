
import AllPosts from "../../components/posts/AllPosts"
const DUMMY_POSTS = [
  {
    slug: "Getting-started-with-Next.js",
    title: "Getting started with Next.js",
    image: "next.png",
    date: "12-4-2020",
    excerpt: " This is just dummy text because i don;t know what to right here, how are you? are you fine? good This is just dummy text because i don;t know what to right here, how are you? are you fine? good This is just dummy text because i don;t know what to right here, how are you? are you fine? good This is just dummy text because i don;t know what to right here, how are you? are you fine? good "
  }, {
    slug: "Getting-started-with-Node.js",
    title: "Getting started with Node.js",
    image: "node.png",
    date: "12-4-2020",
    excerpt: " This is just dummy text because i don;t know what to right here, how are you? are you fine? good"
  }, {
    slug: "Getting-started-with-React.js",
    title: "Getting started with React.js",
    image: "react.png",
    date: "12-7-2020",
    excerpt: " This is just dummy text because i don;t know what to right here, how are you? are you fine? good"
  }
]

const PostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />
}

export default PostsPage
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark, a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

import PostHeader from "./PostHeader"

import { constructImagePath } from "../../utils/helpers"
import classes from "./PostContent.module.css"
const PostContent = ({ post }) => {

  const customRenderers = {

    p({ node, children }) {
      if (children[0].type == "img") {
        const img = node.children[0].properties
        return (
          <div className={classes.image}>
            <Image src={constructImagePath(img.src)} alt={img.alt} width={600} height={300} />
          </div>
        )
      } else return <p>{children}</p>
    },

    code({ className, children }) {
      // extract language from className 
      const match = /language-(\w+)/.exec(className || '')
      const language = match[1]
      return (
        <SyntaxHighlighter language={language} style={atomDark}>
          {children}
        </SyntaxHighlighter>
      )
    }

  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={post.image} />
      <ReactMarkdown components={customRenderers}>
        {post.content}
      </ReactMarkdown>
    </article>
  )
}
export default PostContent
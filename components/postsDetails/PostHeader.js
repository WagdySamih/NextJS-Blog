import Image from "next/image"
import { constructImagePath } from "../../utils/helpers"
import classes from "./PostHeader.module.css"

const PostHeader = ({ title, image }) => {
  const imagePath = constructImagePath(image)
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={imagePath} alt={title} width={200} height={150} />
    </header>
  )
}

export default PostHeader
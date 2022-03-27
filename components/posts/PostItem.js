import Link from "next/link"
import Image from "next/image"

import classes from "./PostItem.module.css"
import { formatDate, constructImagePath } from "../../utils/helpers"

const PostItem = ({ post }) => {

  const { title, image, date, excerpt, slug } = post
  const formattedDate = formatDate(date)
  const imagePath = constructImagePath(image)


  return (
    <li className={classes.post}>
      <Link href={`/Posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image src={imagePath} alt={`${title}-Image`} width={300} height={200} layout="responsive" />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem
import Link from "next/link"
import Logo from "./Logo"

import classes from "./NavigationBar.module.css"
const NavigationBar = () => {
  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <a>
          <Logo />
        </a>
      </Link>
      <ul>
        <li><Link href={"/Posts"}> All Posts </Link></li>
        <li><Link href={"/ContactUs"}>Contact Us</Link></li>
      </ul>
    </header>
  )
}

export default NavigationBar
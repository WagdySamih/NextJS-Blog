import Image from "next/image"

import classes from "./Main.module.css"

const Main = () => {
  return (
    <main className={classes.hero}>
      <div className={classes.image}>
        {/* <Image src={ }/> */}
      </div>
      <h1>Hello I am wagdy!</h1>
      <p>I am miserable as fuck and I want to die!</p>
    </main>
  )
}

export default Main
import { useRef } from "react"
import classes from "./ContactForm.module.css"

const ContactForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value
    const name = nameRef.current.value
    const message = messageRef.current.value

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        body:
          JSON.stringify({
            email,
            name,
            message
          })
        ,
        headers: {
          "Content-Type": "application/json"
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={classes.contact}>
      <h1>Hello!</h1>
      <form onSubmit={onSubmitHandler} className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control} >
            <label htmlFor="email">Email</label>
            <input ref={emailRef} type="email" id="email" required />
          </div>
          <div className={classes.control} >
            <label htmlFor="name">Name</label>
            <input ref={nameRef} type="text" id="name" required />
          </div>
        </div>
        <div className={classes.control} >
          <label htmlFor="message"></label>
          <textarea ref={messageRef} id="message" rows="5" />
        </div>
        <div className={classes.actions}>
          <button>Send</button>
        </div>
      </form>
    </section>
  )
}

export default ContactForm
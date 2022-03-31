import { useRef, useEffect, useState } from "react"
import Notification from "../ui/Notification"
import classes from "./ContactForm.module.css"
import { SendContactUsMessage } from "../../utils/contactClient"

const ContactForm = () => {
  const [notification, setNotification] = useState();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    if (notification && notification.status !="pending") {
      setTimeout(() => {
        setNotification(null)
      }, 5000);
    }
  }, [notification])

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value
    const name = nameRef.current.value
    const message = messageRef.current.value
    setNotification({
      status: "pending",
      title: "Pending",
      message: "Your message is being sent",
    })
    try {
      await SendContactUsMessage({
        email, name, message
      })
      setNotification({
        status: "success",
        title: "Success",
        message: "Your message is sent successfully",
      })
    } catch (error) {
      console.error(error)
      setNotification({
        status: "error",
        title: "Error",
        message: error?.message || "Something went wrong",
      })
    }
  }

  return (
    <section className={classes.contact}>
      <h1>Send Feedback</h1>
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
      {notification &&
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />}
    </section>
  )
}

export default ContactForm
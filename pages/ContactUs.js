import { Fragment } from "react"
import Head from "next/head"
import ContactForm from "../components/contact/ContactForm"

const ContactUsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>NextJS Blog | Contact Us</title>
        <meta name="description" content="sending feedback" />
      </Head>
      <ContactForm />
    </Fragment>
  )
}

export default ContactUsPage
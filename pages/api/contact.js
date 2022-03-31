const handler = (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;
    if (!_isEmailValid(email)) return res.status(422).send({ message: "email is not valid" })
    if (!_isMessageValid(message)) return res.status(422).send({ message: "message is not valid" })
    if (!_isNameValid(name)) return res.status(422).send({ message: "name is not valid" })

    const newMessage = {
      name,
      email,
      message
    }

    res.status(201).send({ message: "message is sent successfully" })
  }
}

const _isEmailValid = (email) => {
  return email && email.trim() && email.includes("@") && email.includes(".")
}
const _isMessageValid = (message) => message && message.trim() != ""
const _isNameValid = (name) => name && name.trim() != ""


export default handler
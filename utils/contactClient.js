export const SendContactUsMessage = async (messageData) => {
  const res = await fetch("api/contact", {
    method: "POST",
    body:
      JSON.stringify(messageData)
    ,
    headers: {
      "Content-Type": "application/json"
    }
  })
  await res.json()
  if (!res.ok) {
    throw (res || "something went wrong!")
  }
}
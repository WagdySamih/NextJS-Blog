
export const formatDate = (date) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  })

  return formattedDate
}

export const constructImagePath = (image) => {
  return `/assets/images/posts/${image}`
}
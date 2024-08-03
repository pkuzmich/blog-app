export const getPosts = async (queryParam) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/v1/posts` + new URLSearchParams(queryParam),
  )
  return res.json()
}

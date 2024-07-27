import { Post } from '../db/models/post'

export async function createPost({ title, author, content, tags }) {
  const post = new Post({ title, author, content, tags })
  return await post.save()
}

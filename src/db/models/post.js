import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema({
  title: { type: String, required: true },
  author: String,
  content: String,
  tags: [String],
})

export const Post = mongoose.model('post', postSchema)

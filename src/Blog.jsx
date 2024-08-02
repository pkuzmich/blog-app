import { Fragment } from 'react'
import { PostList } from './components/PostList'
import { CreatePost } from './components/CreatePost'
import { PostFilter } from './components/PostFilter'
import { PostSorting } from './components/PostSorting'

const posts = [
  {
    title: 'Learning Redux',
    contents: 'This is a sample blog post.',
    author: 'John Smith',
    tags: ['redux'],
  },
  {
    title: 'Learn React Hooks',
    contents: "Let's become full-stack developers!",
    author: 'John Smith',
    tags: ['react'],
  },
  {
    title: 'Full-Stack React Projects',
    author: 'John Smith',
    tags: ['react', 'nodejs'],
  },
  { title: 'Guide to TypeScript' },
]

export function Blog() {
  return (
    <Fragment style={{ padding: 8 }}>
      <CreatePost />
      <hr />
      Filter by:
      <PostFilter field='author' />
      <br />
      <PostSorting fields={['createdAt', 'updatedAt']} />
      <hr />
      <PostList posts={posts} />
    </Fragment>
  )
}

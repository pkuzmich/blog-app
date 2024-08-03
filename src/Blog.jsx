import { Fragment } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PostList } from './components/PostList'
import { CreatePost } from './components/CreatePost'
import { PostFilter } from './components/PostFilter'
import { PostSorting } from './components/PostSorting'
import { getPosts } from './api/posts.js'

export function Blog() {
  const postsQuery = useQuery({
    queryKey: ['posts'],
    queryFn: () => getPosts(),
  })

  const posts = postsQuery.data ?? []

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

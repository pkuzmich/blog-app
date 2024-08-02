import { PostList } from './components/PostList'

const posts = [
  {
    title: 'Learning Redux',
    author: 'John Smith',
    tags: ['redux'],
  },
  {
    title: 'Learn React Hooks',
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

export function App() {
  return <PostList posts={posts} />
}

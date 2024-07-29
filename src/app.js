import express from 'express'
import { postsRoutes } from './routes/posts.js'

const app = express()
postsRoutes(app)

app.get('/', (req, res) => {
  res.send('hello from Express')
})

export { app }

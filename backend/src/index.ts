import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'

export const app = new Hono()

app.get('/api/v1/books', (c) => {
  return c.json([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  ])
})

export const handler = handle(app)

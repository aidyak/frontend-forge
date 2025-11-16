import { expect, test } from 'vitest'
import { app } from './index'

test('GET /api/v1/books returns seed list', async () => {
  const res = await app.request('/api/v1/books')
  expect(res.ok).toBe(true)

  const data = await res.json()
  expect(Array.isArray(data)).toBe(true)
  expect(data).toHaveLength(2)
  expect(data[0]).toMatchObject({ id: 1, title: 'The Great Gatsby' })
})

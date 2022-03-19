const { get } = require('http')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('notes are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('notes have id property', async () => {
  blogList = await api
    .get("/api/blogs")
    .expect(200)
  console.log(blogList.body[0])
  expect(blogList.body[0].id).toBeDefined()
  
})

afterAll(() => {
  mongoose.connection.close()
})

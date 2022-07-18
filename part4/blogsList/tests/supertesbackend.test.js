const { get } = require('http')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const api = supertest(app)

test('Blogs are returned as json', async () => {
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('Blogs have id property', async () => {
  blogList = await api
    .get("/api/blogs")
    .expect(200)
  expect(blogList.body[0].id).toBeDefined()

})

test('add new note to backend', async () => {
  const initialBlogs = await api.get("/api/blogs").expect(200)
  const newBlog = {
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    likes: 5,
    url: ''
  }

  await api
    .post("/api/blogs")
    .send(newBlog)

  const finalBlogs = await api.get("/api/blogs").expect(200)

  expect(finalBlogs.body).toHaveLength(initialBlogs.body.length + 1)
})

test('check if no likes adds likes:0', async () => {
  const initialBlogs = await api.get("/api/blogs").expect(200)
  const newBlog = {
    title: 'Go To Statement ',
    author: 'Edsger W. Dijkstra',
    url: ''

  }

  await api
    .post("/api/blogs")
    .send(newBlog)

  const finalBlogs = await api.get("/api/blogs").expect(200)

  expect(finalBlogs.body).toHaveLength(initialBlogs.body.length + 1)
  expect(finalBlogs.body[finalBlogs.body.length - 1].likes).toBe(0)
})

test('not accept blogs with no title or url', async () => {
  const newBlogWithoutTitle = {
    author: 'Edsger W. Dijkstra',
    url: ''
  }

  const newBlogWithoutURL = {
    title: 'Go To Statement ',
    author: 'Edsger W. Dijkstra',

  }

  await api
    .post("/api/blogs")
    .send(newBlogWithoutTitle)
    .expect(400)

  await api
    .post("/api/blogs")
    .send(newBlogWithoutURL)
    .expect(400)
})

afterAll(() => {
  mongoose.connection.close()
})

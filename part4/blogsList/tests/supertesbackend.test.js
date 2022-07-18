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


// test('delete blog', async () => {
//   const initialBlogs = await api.get("/api/blogs").expect(200)

//   const idToRemove = initialBlogs.body[0].id
//   await api
//     .delete(`/api/blogs/${idToRemove}`)
//     .expect(204)

//   const finalBlogs = await api.get("/api/blogs").expect(200)
//   expect(finalBlogs.body.length).toBe(initialBlogs.body.length - 1)
// })

test("update blog", async () => {
  const initialBlogs = await api.get("/api/blogs/62d522e5584f3368a1af43a9").expect(200)

  const initialBlog = initialBlogs.body
  const idToUpdate = "62d522e5584f3368a1af43a9"

  console.log(`INIITAAAL ${JSON.stringify(initialBlog)}`)

  const updatedBlog = { ...initialBlog, likes: initialBlog.likes + 1 }

  const responseBlog = await api
    .put(`/api/blogs/${idToUpdate}`)
    .send(updatedBlog)

  console.log(responseBlog.body)
  expect(responseBlog.body.likes).toBe(initialBlog.likes + 1)

})

afterAll(() => {
  mongoose.connection.close()
})

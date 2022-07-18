const BlogRouter = require('express').Router()
const Blog = require('../models/bloglist')

BlogRouter.get('/', async (request, response) => {

  try {
    const blogs = await Blog.find({})
    if (blogs) {
      response.json(blogs)
    }
  } catch (error) {
    console.log(error)
  }
})

BlogRouter.post('/', async (request, response) => {
  const sentBlog = request.body
  if (!sentBlog.hasOwnProperty('url')) {
    response.status(400).end()
    return
  }

  if (!sentBlog.hasOwnProperty('title')) {
    response.status(400).end()
    return
  }

  let blog = undefined;
  console.log(sentBlog)
  if (sentBlog.hasOwnProperty("likes")) {
    blog = new Blog(sentBlog)
    console.log("SDFADFSAFDSfs")
  } else {
    blog = new Blog({ ...sentBlog, likes: 0 })
  }


  try {
    const result = await blog.save()
    if (result)
      response.json(result).status(201).end()
  } catch (error) {
    console.log(error)
  }

})

BlogRouter.delete('/:id', async (request, response) => {
  try {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (error) {
    console.log(error)
  }
})

BlogRouter.put("/:id", async (request, response) => {
  const receivedBlog = request.body
  console.log("asdfjksdflasjklf")
  console.log(receivedBlog)
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, receivedBlog, { new: true })
    response.json(updatedBlog)
  } catch (error) {
    console.log(error)
  }
})

BlogRouter.get("/:id", async (request, response) => {

  try {
    const foundBlog = await Blog.findById(request.params.id)
    console.log(foundBlog)
    response.json(foundBlog)
  } catch (error) {
    console.log(error)
  }
})



module.exports = BlogRouter
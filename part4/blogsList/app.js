const logger = require('./utils/logger')
const BlogRouter = require('./controllers/bloglist')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')

const app = express()


logger.info('connecting to', config.MONGODB_URI)


mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

  app.use(cors())
  app.use(express.json())

  app.use('/api/blogs', BlogRouter)

  module.exports = app

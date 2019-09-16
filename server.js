const express = require('express')

const CoursesRouter = require('./courses/course-router.js')

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.send('Api running...')
})

server.use('/api/courses', CoursesRouter)

module.exports = server
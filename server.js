const express = require('express')

const CoursesRouter = require('./courses/courses-router.js')

const server = express()

server.use(express.json())

server.use('/api/courses', CoursesRouter)

module.exports = server
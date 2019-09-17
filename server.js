const express = require('express')

const CoursesRouter = require('./courses/course-router.js')

const server = express()

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });

server.use(express.json())

server.get('/', (req, res) => {
  res.send('Api running...')
})

server.use('/api/courses', CoursesRouter)

module.exports = server
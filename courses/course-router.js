const express = require('express')

const Courses = require('./course-model.js')

const router = express.Router()

router.get('/', (req, res) => {
  Courses.getCourses()
  .then(courses => {
    res.status(200).json(courses)
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get courses' })
  })
})

module.exports = router
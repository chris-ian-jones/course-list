const db = require('../data/db-config.js')

module.exports = {
  getCourses,
}

function getCourses(){
  return db('courses')
}
exports.up = function(knex) {
  return knex.schema
  .createTable('courses', tbl => {
    tbl.increments()
    tbl.string('name', 255).notNullable()
    tbl.string('teacher', 255).notNullable()
    tbl.string('description', 4000).notNullable()
    tbl.integer('length').notNullable()
    tbl.string('date', 255).notNullable()
    tbl.string('course_code', 255).notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('courses')
}

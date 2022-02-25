/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("note", function (table) {
    table.increments("id");
    table.string("title").notNullable();
    table.string("details").notNullable();
    table.string("category").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("note");
};

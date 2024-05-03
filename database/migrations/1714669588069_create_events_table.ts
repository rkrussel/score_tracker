import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'events'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('location').notNullable()
      table.string('venue').nullable()
      table.timestamp('start_date').notNullable()
      table.timestamp('end_date').notNullable()
      table.string('poster_url').nullable()
      table.string('flyer_url').nullable()
      table.boolean('sanctioned').defaultTo(false)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

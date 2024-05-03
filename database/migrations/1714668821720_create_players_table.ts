import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'players'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').nullable().unsigned().references('users.id')
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.integer('team_id').notNullable().unsigned().references('teams.id')
      table.integer('number').notNullable().unsigned()
      table.enu('gender', ['M', 'F'], {
        useNative: true,
        enumName: 'gender',
        existingType: true,
      })
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

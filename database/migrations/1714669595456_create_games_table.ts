import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'games'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('event_id').unsigned().notNullable().references('events.id')
      table.integer('umpire_id').unsigned().notNullable().references('umpires.id')
      table.integer('score_keeper_1_id').unsigned().notNullable().references('score_keepers.id')
      table.integer('score_keeper_2_id').unsigned().nullable().references('score_keepers.id')
      table.integer('score_keeper_3_id').unsigned().nullable().references('score_keepers.id')
      table.integer('score_keeper_4_id').unsigned().nullable().references('score_keepers.id')
      table.integer('home_team_id').unsigned().notNullable().references('teams.id')
      table.integer('away_team_id').unsigned().notNullable().references('teams.id')
      table.integer('home_final').unsigned().nullable()
      table.integer('away_final').unsigned().nullable()
      table.enu('game_status', ['PENDING', 'COMPLETE', 'DELAYED', 'POSTPONED', 'INCOMPLETE'], {
        useNative: true,
        enumName: 'game_status',
        existingType: true,
      })
      table.string('stream_url').nullable()
      table.timestamp('game_start').nullable()
      table.timestamp('game_end').nullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}

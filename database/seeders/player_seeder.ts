import { PlayerFactory } from '#database/factories/player_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    // PlayerFactory.createMany(50)
  }
}

import { PlayerFactory } from '#database/factories/player_factory'
import { TeamFactory } from '#database/factories/team_factory'
import { UserFactory } from '#database/factories/user_factory'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  environment = ['development']

  async run() {
    // Write your database queries inside the run method
    await UserFactory.createMany(50)
    await TeamFactory.createMany(6)
    await PlayerFactory.createMany(50)
  }
}

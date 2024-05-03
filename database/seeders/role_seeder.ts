import Role from '#models/role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Roles from '../../app/enums/roles.js'

export default class extends BaseSeeder {
  async run() {
    Role.createMany([
      { id: Roles.ADMIN, name: 'admin' },
      { id: Roles.PLAYER, name: 'player' },
      { id: Roles.SCORE_KEEPER, name: 'score_keeper' },
      { id: Roles.UMPIRE, name: 'umpire' },
      { id: Roles.GUEST, name: 'guest' },
    ])
  }
}

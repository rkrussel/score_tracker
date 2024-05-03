import GameStatus from '#models/game_status'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Status from '../../app/enums/game_status.js'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    GameStatus.createMany([
      { id: Status.PENDING, name: 'pending' },
      { id: Status.COMPLETE, name: 'complete' },
      { id: Status.DELAYED, name: 'delayed' },
      { id: Status.INCOMPLETE, name: 'incomplete' },
      { id: Status.POSTPONED, name: 'postponed' },
    ])
  }
}

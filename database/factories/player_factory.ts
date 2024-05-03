import factory from '@adonisjs/lucid/factories'
import Player from '#models/player'
import { TeamFactory } from './team_factory.js'

export const PlayerFactory = factory
  .define(Player, async ({ faker }) => {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      gender: 'M',
      number: faker.number.int({ min: 1, max: 99 }),
      teamId: faker.number.int({ min: 1, max: 6 }),
    }
  })
  .relation('team', () => TeamFactory)
  .build()

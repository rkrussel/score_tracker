import factory from '@adonisjs/lucid/factories'
import Team from '#models/team'
import { PlayerFactory } from './player_factory.js'

export const TeamFactory = factory
  .define(Team, async ({ faker }) => {
    return {
      name: faker.vehicle.color(),
      location: faker.location.city(),
      logoUrl: faker.image.urlPlaceholder(),
    }
  })
  .relation('players', () => PlayerFactory)
  .build()

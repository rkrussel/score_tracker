import factory from '@adonisjs/lucid/factories'
import Event from '#models/event'
import { DateTime } from 'luxon'

export const EventFactory = factory
  .define(Event, async ({ faker }) => {
    return {
      startDate: DateTime.fromFormat(faker.date.past().toISOString(), 'mm/dd/yyyy'),
      endDate: DateTime.fromFormat(faker.date.past().toISOString(), 'mm/dd/yyyy'),
      location: faker.location.city(),
      venue: faker.location.streetAddress(),
      sanctioned: false,
    }
  })
  .build()

import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasOne } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasOne } from '@adonisjs/lucid/types/relations'
import Event from './event.js'

export default class Game extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare eventId: number

  @column()
  declare umpireId: number

  @column()
  declare scoreKeeper1Id: number

  @column()
  declare scoreKeeper2Id: number | null

  @column()
  declare scoreKeeper3Id: number | null

  @column()
  declare scoreKeeper4Id: number | null

  @column()
  declare homeTeamId: number

  @column()
  declare awayTeamId: number

  @column()
  declare homeFinal: number | null

  @column()
  declare awayFinal: number | null

  @column()
  declare streamUrl: string | null

  @column()
  declare gameStatus: number

  @column.dateTime()
  declare gameStart: DateTime

  @column.dateTime()
  declare gameEnd: DateTime

  @column()
  declare notes: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Event)
  declare event: BelongsTo<typeof Event>
}

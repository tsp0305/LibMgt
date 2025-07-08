import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Member from '../Models/Member'
import Book from './Book'

export default class Record extends BaseModel {
  @column({ isPrimary: true, columnName: 'r_id' })
  public id: number

  @column({ columnName: 'Book_id' })
  public bid: number

  @column({ columnName: 'mem_id' })
  public memId: number

  @column.dateTime({ autoCreate: true })
  public borrowDate: DateTime

  @column.dateTime()
  public returnDate: DateTime | null

  @column()
  public status: string

  @belongsTo(() => Member, {
    foreignKey: 'memId',
  })
  public member: BelongsTo<typeof Member>

  @belongsTo(() => Book, {
    foreignKey: 'bid',
  })
  public book: BelongsTo<typeof Book>
}

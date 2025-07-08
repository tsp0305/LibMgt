import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Book extends BaseModel {
  public static table = 'books'
  @column({ isPrimary: true, columnName: 'Book_id' })
  public bid: number

  @column()
  public title: string

  @column()
  public author: string

  @column({ columnName: 'copies_total' })
  public copiesTotal: number

  @column({ columnName: 'copies_available' })
  public copiesAvailable: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}

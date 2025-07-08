import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Record from 'App/Models/Record'
import { DateTime } from 'luxon'

export default class RecordSeeder extends BaseSeeder {
  public async run() {
    await Record.createMany([
      {
        bookId: 1,
        memberId: 2,
        borrowDate: DateTime.now(),
        returnDate: null,

      },
      {
        bookId: 2,
        memberId: 2,
        borrowDate: DateTime.now(),
        returnDate: DateTime.now(),
        status: 'Returned'
      },

    ])
  }
}

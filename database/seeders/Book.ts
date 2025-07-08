import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Book from 'App/Models/Book'

export default class extends BaseSeeder {
  public async run() {

    await Book.createMany([
      {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        copies_total: 5,
        copies_available: 3
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        copies_total: 8,
        copies_available: 6
      },
    ])
    // Write your database queries inside the run method
  }
}

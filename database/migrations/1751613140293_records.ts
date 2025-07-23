import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'records'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('r_id')

      table.integer('Book_id').unsigned()

      table.integer('mem_id').unsigned()

      table.dateTime('borrow_date').notNullable().defaultTo(this.now())

      table.dateTime('return_date')

      table.enu('status', ['Borrowed', 'Returned', 'Late']).defaultTo('Borrowed')

      table
        .foreign('mem_id')
        .references('id')
        .inTable('members')
        .onDelete('SET NULL')

      table
        .foreign('Book_id')
        .references('Book_id')
        .inTable('books')
        .onDelete('SET NULL')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}

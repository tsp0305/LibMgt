import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BookValidateId {
    constructor(protected ctx: HttpContextContract) { }


    public schema = schema.create({
        bid: schema.number.optional([
            rules.unsigned(),
            rules.exists({
                table: 'books',
                column: 'Book_id'
            })
        ])

    })


    public messages: CustomMessages = {
        'id.exists': 'No record found'
    }

    public data = {
        bid: this.ctx.params.bid,
    }
}

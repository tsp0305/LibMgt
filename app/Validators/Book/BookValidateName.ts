import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BookValidateName {
    constructor(protected ctx: HttpContextContract) { }


    public schema = schema.create({

        name: schema.string.optional([
            rules.exists({
                table: 'books',
                column: 'title'
            })
        ])
    })

    public messages: CustomMessages = {
        'id.exists': 'No record found'
    }

    public data = {

        name: this.ctx.request.qs().name,


    }
}

import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BookValidate {
    constructor(protected ctx: HttpContextContract) { }


    public schema = schema.create({

        title: schema.string([
            rules.maxLength(100),
        ]),
        author: schema.string([
            rules.maxLength(100)
        ]),
        copies_total: schema.number([
            rules.unsigned()
        ]),
        copies_available: schema.number([
            rules.unsigned()
        ]),

    })

    public messages: CustomMessages = {

    }


}

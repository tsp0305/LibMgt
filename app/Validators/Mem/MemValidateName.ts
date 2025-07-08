import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MemValidatorName {
    constructor(protected ctx: HttpContextContract) { }


    public schema = schema.create({
        name: schema.string.optional([
            rules.maxLength(100),
            rules.exists({
                table: 'members',
                column: 'name'
            })
        ])

    })


    public messages: CustomMessages = {
        'name.exist': 'does not exist'

    }
    public name = this.ctx.request.qs().name

}

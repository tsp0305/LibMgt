import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MemValidateId {
    constructor(protected ctx: HttpContextContract) { }


    public schema = schema.create({
        mid: schema.number([
            rules.unsigned(),
            rules.exists({
                table: 'members',
                column: 'mem_id'
            })
        ])


    })


    public messages: CustomMessages = {
        'mid.exists': 'No record found'
    }

    public data = {
        mid: this.ctx.params.mid,
    }
}

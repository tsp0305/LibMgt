import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class MemValidator {
    constructor(protected ctx: HttpContextContract) { }


    public schema = schema.create({
        name: schema.string([
            rules.maxLength(100),
        ]),
        email: schema.string([
            rules.email()
        ]),
        phone: schema.string([
            rules.mobile({
                locale: ['en-IN']
            })
        ]),
        role: schema.enum.optional(
            ['Student', 'Staff', 'Admin'] as const
        )
    })


    public messages: CustomMessages = {
        'name.required': 'Name is required',
        'email.required': 'email is required',
        'phone.required': 'phone no. is required'
    }
}

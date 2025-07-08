import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


const singleMemberCreateSchema = schema.object().members({
    name: schema.string([rules.maxLength(100)]),
    email: schema.string([rules.email()]),
    phone: schema.string([
        rules.mobile({ locale: ['en-IN'] }),
    ]),
    role: schema.enum.optional(['Student', 'Staff', 'Admin'] as const),
})

const singleMemberUpdateSchema = schema.object().members({
    mid: schema.number([
        rules.exists({ table: 'members', column: 'mem_id' })
    ]),
    name: schema.string.optional([rules.maxLength(100)]),
    email: schema.string.optional([rules.email()]),
    phone: schema.string.optional([
        rules.mobile({ locale: ['en-IN'] }),
    ]),
    role: schema.enum.optional(['Student', 'Staff', 'Admin'] as const),
})

export class MemCreateManyValidator {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({
        members: schema.array().members(singleMemberCreateSchema),
    })

    public messages: CustomMessages = {
        'members.*.name.required': 'Name is required',
        'members.*.email.required': 'Email is required',
        'members.*.phone.required': 'Phone is required',
    }
}

export class MemUpdateManyValidator {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({
        members: schema.array().members(singleMemberUpdateSchema),
    })

    public messages: CustomMessages = {
        'members.*.mid.required': 'Member ID is required',
        'members.*.mid.exists': 'Member ID does not exist',
    }
}

export class MemDeleteManyValidator {
    constructor(protected ctx: HttpContextContract) { }

    public schema = schema.create({
        ids: schema.array().members(
            schema.number([
                rules.exists({ table: 'members', column: 'mem_id' }),
            ])
        ),
    })

    public messages: CustomMessages = {
        'ids.*.exists': 'Some member IDs are invalid',
    }
}

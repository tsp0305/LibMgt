import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BookValidator {
  constructor(protected ctx: HttpContextContract) { }


  public schema = schema.create({
    title: schema.string.optional([
      rules.maxLength(100),
    ]),
    author: schema.string.optional([
      rules.maxLength(100)
    ]),
    copies_total: schema.number.optional([
      rules.unsigned()
    ]),
    copies_available: schema.number.optional([
      rules.unsigned()
    ])

  })


  public messages: CustomMessages = {

  }
}

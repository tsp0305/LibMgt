import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Member from 'App/Models/Member'

export default class AuthRole {
  public async handle({ params, response }: HttpContextContract, next: () => Promise<void>) {

    const { mid } = params
    const member = await Member.find(mid)
    if (!member) {
      return response.notFound({ message: 'Member not found' })
    }
    if (member.role !== 'Admin') {
      return response.unauthorized({ message: 'Unauthorized access' })
    }

    await next()
  }
}

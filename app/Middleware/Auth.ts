import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Auth {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    const key = request.header('key')

    const auth_key = process.env.APP_KEY
    if (!key || key !== auth_key) {
      return response.unauthorized("Unauthorized access")
    }
    await next()
  }


}


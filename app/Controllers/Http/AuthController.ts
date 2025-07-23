// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import AuthRepository from "App/repositories/auth_repo"

export default class AuthController {
    private repo = new AuthRepository()

    public async signUp(ctx) {
        try {

            const data = ctx.request.only(['name', 'email', 'password', 'phone', 'role'])
            console.log(data)
            const res = await this.repo.signUp(data)
            return { success: true, data: res }
        }
        catch (err) {
            throw err
        }


    }

    public async login(ctx) {

        try {
            const data = ctx.request.only(['email', 'password'])
            console.log(data)
            const res = await this.repo.login(data, ctx.auth)
            return { success: true, data: res }
        }
        catch (err) {
            throw err
        }
    }

    public async me(ctx) {
        try {
            const user = ctx.auth.user
            return { success: true, user }
        }
        catch (err) {
            throw err
        }

    }

    public async logout(ctx) {

        try {
            await ctx.auth.logout()
            return { success: true, message: 'Logged out' }
        }
        catch (err) {
            throw err
        }

    }

}






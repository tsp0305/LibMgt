import Member from "App/Models/Member";

export default class AuthRepository {

    public async signUp(payload) {
        console.log(payload)
        const mem = await Member.create(payload)
        return mem
    }

    public async login(data, auth) {

        const token = await auth.use('api').attempt(data.email, data.password, {
            expiresIn: '30mins'
        })
        const member = await Member.findBy('email', data.email)
        const res = { token: token.token, member }
        console.log(res)
        return res

    }
}
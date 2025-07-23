// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import recordRepository from "App/repositories/record_repo"

export default class RecordsController {

    private repo = new recordRepository()

    public async borrow(ctx) {
        try {

            const { bid, mid } = ctx.params
            const res = await this.repo.borrow(bid, mid)
            return { success: true, data: res }
        }
        catch (err) {
            throw err
        }


    }

    public async returnBook(ctx) {

        try {
            const { bid, mid } = ctx.params
            const res = await this.repo.returnBook(bid, mid)
            return { success: true, data: res }
        }
        catch (err) {
            throw err
        }

    }
    public async showRecord() {
        try {
            const res = await this.repo.show()
            return { success: true, data: res }
        }
        catch (err) {
            throw err;
        }
    }

    public async showByMember({ params }) {
        try {
            const { mid } = params
            const res = await this.repo.showByMember(mid)
            return { success: true, data: res }
        } catch (err) {
            throw err
        }
    }
}

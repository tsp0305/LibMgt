// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import recordRepository from "App/repositories/record_repo"
import BookValidateId from "App/Validators/Book/BookValidateId"
import MemValidateId from "App/Validators/Mem/MemValidateId"

export default class RecordsController {

    private repo = new recordRepository()

    public async borrow(ctx) {
        try {
            const { bid } = await ctx.request.validate(BookValidateId)
            const { mid } = await ctx.request.validate(MemValidateId)


            const res = await this.repo.borrow(bid, mid)
            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }


    }

    public async returnBook(ctx) {

        try {
            const { bid } = await ctx.request.validate(BookValidateId)
            const { mid } = await ctx.request.validate(MemValidateId)
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
            //return { success: false, message: err }
            throw err;
        }
    }
}

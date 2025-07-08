// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import BookRepository from "App/repositories/book_repo"
import BookValidate from "App/Validators/Book/BookValidate"
import BookValidateId from "App/Validators/Book/BookValidateId"
import BookValidateName from "App/Validators/Book/BookValidateName"
import BookValidator from "App/Validators/Book/BookValidateUpdate"

export default class BooksController {

    private repo = new BookRepository()

    public async showAll(ctx) {

        try {

            const { name } = await ctx.request.validate(BookValidateName)
            if (name) {
                const res = await this.repo.showBookByName(name)
                return { success: true, data: res }
            }

            const res = await this.repo.showBook()
            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    }

    public async showById(ctx) {
        try {

            const { bid } = await ctx.request.validate(BookValidateId)

            const res = await this.repo.showBookById(bid)
            return { success: true, data: res }
        }
        catch (err) {

            return { success: false, message: err }

        }

    }

    public async postBook(ctx) {
        try {

            const payload = await ctx.request.validate(BookValidate)

            const res = await this.repo.postNewBook(payload)

            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    }

    public async updateBook(ctx) {
        try {

            const payload = await ctx.request.validate(BookValidator)

            const { bid } = await ctx.request.validate(BookValidateId)
            const res = await this.repo.updateBook(payload, bid)
            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    }
    public async putBook(ctx) {
        try {

            const payload = await ctx.request.validate(BookValidator)

            const { bid } = await ctx.request.validate(BookValidateId)
            const res = await this.repo.updateBook(payload, bid)
            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    }

    public async deleteBook(ctx) {

        try {

            const { bid } = await ctx.request.validate(BookValidateId)

            const res = await this.repo.deleteBook(bid)

            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    }

    public async createMany(ctx) {
        try {
            const payload = ctx.request.body()
            console.log(payload)
            const res = await this.repo.createMany(payload)
            return { success: true, data: res }
        } catch (err) {
            return { success: false, message: err }
        }
    }
    /*
        public async updateMany(ctx) {
            try {
                const payload = ctx.request.body()
                const res = await this.repo.updateMany(payload)
                return { success: true, data: res }
            } catch (err) {
                return { success: false, message: err }
            }
        }
    */

    public async deleteMany(ctx) {
        try {
            const { ids } = ctx.request.body()
            const res = await this.repo.deleteMany(ids)
            return { success: true, data: res }
        } catch (err) {
            return { success: false, message: err }
        }
    }

}

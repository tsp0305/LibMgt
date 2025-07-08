// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MemRepository from 'App/repositories/Mem_repo'
import MemUpdateValidator from 'App/Validators/Mem/MemUpdateValidator'
import MemValidateId from 'App/Validators/Mem/MemValidateId'
import MemValidatorName from 'App/Validators/Mem/MemValidateName'
import MemValidator from 'App/Validators/Mem/MemValidator'
import { MemCreateManyValidator, MemDeleteManyValidator, MemUpdateManyValidator } from 'App/Validators/Mem/MemValidators'


export default class MembersController {

    private repo = new MemRepository()

    public async showAll(ctx) {

        try {
            const { name } = await ctx.request.validate(MemValidatorName)
            if (name) {
                const res = await this.repo.showMemByName(name)
                return res

            }

            const res = await this.repo.showMem()
            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    }

    public async showById(ctx) {
        try {

            const payload = await ctx.request.validate(MemValidateId)

            const { mid } = payload

            const res = await this.repo.showMemById(mid)
            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    }

    public async postMem(ctx) {
        try {

            const payload = await ctx.request.validate(MemValidator)

            const res = await this.repo.postNewMem(payload)

            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    }

    public async updateMem(ctx) {
        try {

            const payload = await ctx.request.validate(MemUpdateValidator)
            const id = await ctx.request.validate(MemValidateId)

            const { mid } = id

            const res = await this.repo.updateMem(payload, mid)
            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    }

    public async deleteMem(ctx) {

        try {

            const payload = await ctx.request.validate(MemValidateId)

            const { mid } = payload

            const res = await this.repo.deleteMem(mid)
            return { success: true, data: res }
        }
        catch (err) {
            return { success: false, message: err }
        }

    }

    public async postManyMem(ctx) {
        try {
            const { members } = await ctx.request.validate(MemCreateManyValidator)
            const res = await this.repo.createMany(members)
            return { success: true, data: res }
        } catch (err) {
            return { success: false, message: err }
        }
    }
    /*
        public async updateManyMem(ctx) {
            try {
                const { members } = await ctx.request.validate(MemUpdateManyValidator)
                const res = await this.repo.updateMany(members)
                return { success: true, data: res }
            } catch (err) {
                return { success: false, message: err }
            }
        }
    */
    public async deleteManyMem(ctx) {
        try {
            const { ids } = await ctx.request.validate(MemDeleteManyValidator)
            const res = await this.repo.deleteMany(ids)
            return { success: true, data: res }
        } catch (err) {
            return { success: false, message: err }
        }
    }

}

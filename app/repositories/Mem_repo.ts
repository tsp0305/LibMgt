import Member from 'App/Models/Member'

export default class MemRepository {

    public async showMem() {
        const mem = await Member.all()
        return mem
    }

    public async showMemById(id) {
        const mem = await Member.findOrFail(id)
        return mem
    }

    public async showMemByName(name) {
        const mem = await Member.findByOrFail('name', name)
        return mem
    }

    public async postNewMem(payload) {
        const mem = await Member.create(payload)
        return mem
    }

    public async updateMem(payload, id) {
        const mem = await Member.findOrFail(id)
        mem.merge(payload)
        await mem.save()
        return mem
    }

    public async deleteMem(id) {
        const mem = await Member.findOrFail(id)
        await mem.delete()
        return `deleted id : ${id}`
    }

    public async createMany(members) {
        const mem = await Member.createMany(members)
        return mem
    }

    public async updateMany(members) {
        const updated: Member[] = []

        for (const data of members) {
            console.log(typeof data.mid, data)
            const mem = await Member.find(data.mid)

            if (mem) {
                mem.merge(data)
                await mem.save()
                updated.push(mem)
            }

        }

        return updated


    }

    public async deleteMany(ids) {
        const deleted: Member[] = []
        for (const id of ids) {
            const mem = await Member.findOrFail(id)
            await mem.delete()
            deleted.push(id)
        }
        return `Deleted IDs: ${deleted.join(', ')}`
    }

}




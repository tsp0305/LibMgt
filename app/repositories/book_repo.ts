import Book from 'App/Models/Book'

export default class BookRepository {

    public async showBook() {
        const book = await Book.all()
        return book
    }

    public async showBookById(bid) {
        const book = await Book.findOrFail(bid)
        return book
    }

    public async showBookByName(bname) {
        const book = await Book.findByOrFail('title', bname)
        return book
    }

    public async postNewBook(payload) {
        const { title } = payload
        const dup = await Book.findBy('title', title)
        if (dup) {

            dup.merge({
                copiesTotal: dup.copiesTotal + 1,
                copiesAvailable: dup.copiesAvailable + 1
            })
            await dup.save()
            return dup

        }
        const book = await Book.create(payload)
        return book
    }

    public async updateBook(payload, id) {
        const book = await Book.findOrFail(id)
        book.merge(payload)
        await book.save()
        return book
    }

    public async deleteBook(id) {
        const book = await Book.findOrFail(id)
        await book.delete()
        return `deleted id : ${id}`
    }

    public async createMany(payloadArray) {
        const results: Book[] = []
        for (const payload of payloadArray) {
            const existing = await Book.findBy('title', payload.title)
            if (existing) {
                existing.merge({
                    copiesTotal: existing.copiesTotal + 1,
                    copiesAvailable: existing.copiesAvailable + 1
                })
                await existing.save()
                results.push(existing)
            } else {
                const newBook = await Book.create(payload)
                results.push(newBook)
            }
        }
        return results
    }

    public async updateMany(updateList) {
        const results = []
        for (const item of updateList) {
            const book = await Book.findOrFail(item.id)
            book.merge(item)
            await book.save()
            results.push(book)
        }
        return results
    }

    public async deleteMany(ids: number[]) {
        const results = []
        for (const id of ids) {
            const book = await Book.findOrFail(id)
            await book.delete()
            results.push(id)
        }
        return `Deleted IDs: ${results.join(', ')}`
    }


}
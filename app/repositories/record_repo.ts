import Book from 'App/Models/Book'
import Record from 'App/Models/Record'
import { DateTime } from 'luxon'

export default class recordRepository {

    public async borrow(bid, mid) {
        const book = await Book.find(bid)

        if (book.copiesAvailable === 0) {
            return { message: 'Book not available' }
        }
        const record = new Record()
        record.bookId = bid
        record.memberId = mid
        record.borrowDate = DateTime.now()
        record.returnDate = DateTime.now().plus({ days: 7 })
        record.status = 'Borrowed'
        await record.save()

        book.copiesAvailable -= 1
        await book.save()
        return { message: 'Book borrowed successfully', record }

    }

    public async returnBook(bid, mid) {
        const record = await Record.query()
            .where('Book_id', bid)
            .andWhere('mem_id', mid)
            .andWhere('status', 'Borrowed')
            .first()

        const now = DateTime.now()
        const dueDate = record.returnDate
        if (now > dueDate) {
            record.status = 'Late'
        } else {
            record.status = 'Returned'
        }
        record.returnDate = now
        await record.save()

        const book = await Book.find(bid)

        book.copiesAvailable += 1
        await book.save()
        return { message: `Book ${record.status}`, record }

    }


    public async show() {
        const records = await Record.query().preload('book').preload('member')

        return records

    }

}
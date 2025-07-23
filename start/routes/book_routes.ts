
import Route from '@ioc:Adonis/Core/Route'
import AuthRole from 'App/Middleware/AuthRole'

Route.group(() => {

    Route.get('/', 'BooksController.showAll')

    Route.post('/many', 'BooksController.createMany')

    Route.patch('/many', 'BooksController.updateMany')

    Route.delete('/many', 'BooksController.deleteMany')

    Route.get('/:bid', 'BooksController.showById')

    Route.post('/', 'BooksController.postBook')//.middleware('AuthRole')

    // Route.put('/', 'BooksController.putBook')

    Route.patch('/:bid', 'BooksController.updateBook')

    Route.delete('/:bid', 'BooksController.deleteBook')


}).prefix('/book').middleware('auth')







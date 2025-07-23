import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
    Route.post('/borrow/:bid/:mid', 'RecordsController.borrow')

    Route.patch('/return/:bid/:mid', 'RecordsController.returnBook')

    Route.get('/record', 'RecordsController.showRecord')

    Route.get('/record/:mid', 'RecordsController.showByMember')

}).prefix('/rec').middleware('auth')


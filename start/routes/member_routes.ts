import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get('/', 'MembersController.showAll')
    Route.get('/:mid', 'MembersController.showById')

    Route.post('/', 'MembersController.postMem')
    Route.post('/many', 'MembersController.postManyMem')

    // Route.patch('/many', 'MembersController.updateManyMem')
    Route.patch('/:mid', 'MembersController.updateMem')

    Route.delete('/many', 'MembersController.deleteManyMem')
    Route.delete('/:mid', 'MembersController.deleteMem')
}).prefix('/mem').middleware('auth')



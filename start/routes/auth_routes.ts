import Route from '@ioc:Adonis/Core/Route'


Route.post('/auth/signup', 'AuthController.signUp')
Route.post('/auth/login', 'AuthController.login')
Route.get('/auth/me', 'AuthController.me').middleware('auth')
Route.post('/auth/logout', 'AuthController.logout').middleware('auth')

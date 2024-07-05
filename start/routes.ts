/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const AuthController = () => import('#controllers/auth_controller')
const BookController = () => import('#controllers/books_controller')

router.on('/').render('pages/home')
router.get('/login', [AuthController, 'login'])
router.get('/register', [AuthController, 'register'])

router.resource('/books', BookController)
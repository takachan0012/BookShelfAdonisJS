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
const HomeController = () => import('#controllers/home_controller')

router.get('/', [HomeController, 'index'])
router.get('/login', [AuthController, 'login'])
router.get('/register', [AuthController, 'register'])
router.resource('/books', BookController)

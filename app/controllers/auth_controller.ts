import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    async login({ inertia }: HttpContext) {
        return inertia.render('auth/login', { title: 'Login' })
    }
    async logout(ctx: HttpContext) {
        ctx.session.forget('user')
        return ctx.response.redirect('/')
    }
    async register({ inertia }: HttpContext) {
        return inertia.render('auth/register', { title: 'Register' })
    }
}
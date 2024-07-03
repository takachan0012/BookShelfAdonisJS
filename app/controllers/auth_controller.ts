import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    async login(ctx: HttpContext) {
        return [{
            'status': 'login'
        }]
    }
    async logout(ctx: HttpContext) {
        ctx.session.forget('user')
        return ctx.response.redirect('/')
    }
    async register(ctx: HttpContext) {
        return [{
            'status': 'register'
        }]
    }
}
import { Request, Response } from 'express'
import { injectable } from 'inversify'

import UserService from '../services/user'

@injectable()
export default class UserController {
    private userService: UserService

    constructor (userService: UserService) {
      this.userService = userService
    }

    async signUp (request: Request, response: Response): Promise<Response> {
      const { id } = request.params

      const user = await this.userService.getUserById(Number(id))

      return response.json(user)
    }
}

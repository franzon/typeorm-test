import { Request, Response } from 'express'
import { injectable } from 'inversify'

import UserService from '../services/user'

@injectable()
export default class UserController {
  constructor (private userService: UserService) {
  }

  async signUp (request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const user = await this.userService.getUserById(Number(id))

    return response.json(user)
  }
}

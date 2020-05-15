import { Router } from 'express'

import UserController from '../controllers/user'
import { container } from '../utils/di/inversify.config'

export default class UserRouter {
  router: Router

  constructor () {
    this.router = Router()

    const userController = container.resolve(UserController)

    this.router.get('/:id', (req, res) => userController.signUp(req, res))
  }

  get instance (): Router {
    return this.router
  }
}

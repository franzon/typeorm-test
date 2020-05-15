import { Router } from 'express'
import UserController from '../controllers/user'
import UserService from '../services/user'
import UserRepository from '../repositories/user'

export default class UserRouter {
  router: Router

  constructor () {
    this.router = Router()

    const userController = new UserController(
      new UserService(
        new UserRepository()
      )
    )

    this.router.get('/:id', (req, res) => userController.signUp(req, res))
  }

  get instance (): Router {
    return this.router
  }
}

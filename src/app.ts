import express, { Application } from 'express'
import UserRouter from './routes/user'

export interface App {
    listen(port: number): void;
}

export default class ExpressApp implements App {
    application: Application

    constructor () {
      this.application = express()

      this.setupMiddlewares()
      this.setupRoutes()
    }

    private setupMiddlewares (): void {
      this.application.use(express.json())
    }

    private setupRoutes (): void {
      const userRouter = new UserRouter()
      this.application.use('/user', userRouter.instance)
    }

    listen (port: number): void {
      this.application.listen(port)
    }
}

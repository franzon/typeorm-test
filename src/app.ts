import express, { Application } from 'express'

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
      this.application.get('/', (req, res) => res.send('helo workd'))
    }

    listen (port: number): void {
      this.application.listen(port)
    }
}

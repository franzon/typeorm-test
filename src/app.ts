import express, {Application} from 'express'

export default class App {

    application: Application

    constructor() {
        this.application = express()

        this.setupMiddlewares()
        this.setupRoutes()
    }

    private setupMiddlewares() {
        this.application.use(express.json())
    }

    private setupRoutes() {
        this.application.get('/', (req, res) => res.send('hello'))
    }

    listen(port: Number) {
        this.application.listen(port)
    }
}
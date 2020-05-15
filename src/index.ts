import 'reflect-metadata'
import Server from './server'
import ExpressApp from './app'

const app = new ExpressApp()
const server = new Server(app)

server.start(Number(process.env.PORT) || 3000)

import 'reflect-metadata'

import ExpressApp from './app'
import Server from './server'

const app = new ExpressApp()
const server = new Server(app)

server.start(Number(process.env.PORT) || 3000)

import "reflect-metadata";
import Server from "./server"
import App from './app'

const app = new App()
const server = new Server(app)

server.start(Number(process.env.PORT) || 3000)
import App from './app'

export default class Server {
    application: App

    constructor(application: App) {
        this.application = application
    }

    start(port: Number) {
        console.log('Starting server at port ' + port)
        this.application.listen(port)
    }
}
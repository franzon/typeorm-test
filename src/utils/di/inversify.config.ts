import { Container } from 'inversify'

import UserRepository from '../../repositories/user'
import UserService from '../../services/user'

const container = new Container()
container.bind<UserService>(UserService).toSelf()
container.bind<UserRepository>(UserRepository).toSelf()

export { container }

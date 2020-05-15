import { injectable } from 'inversify'

import UserRepository from '../repositories/user'

@injectable()
export default class UserService {
    private userRepository: UserRepository

    constructor (userRepository: UserRepository) {
      this.userRepository = userRepository
    }

    async getUserById (id: number): Promise<object> {
      return await this.userRepository.getUserById(id)
    }
}

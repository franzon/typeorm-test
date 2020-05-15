import { injectable } from 'inversify'

import UserRepository from '../repositories/user'

@injectable()
export default class UserService {
  constructor (private userRepository: UserRepository) {
  }

  async getUserById (id: number): Promise<object> {
    return await this.userRepository.getUserById(id)
  }
}

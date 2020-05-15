export default class UserRepository {
  async getUserById (id: number): Promise<object> {
    return {
      id,
      firstName: 'John',
      lastName: 'Doe',
      age: 20
    }
  }
}

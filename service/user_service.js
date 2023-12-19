const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserRepository = require('./UserRepository');

class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getAllUsers() {
    return this.userRepository.getAllUsers();
  }

  async registerUser({ email, name, password }) {
    return this.userRepository.createUser({ email, name, password });
  }

  async loginUser({ email, password }) {
    const user = await this.userRepository.getUserByEmail(email);

    if (!user) {
      throw { name: 'InvalidCredential' };
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw { name: 'InvalidCredential' };
    }

    const token = jwt.sign({ id: user.id, email: user.email }, 'secret');
    return { token };
  }
}

module.exports = UserService;
const { User } = require('./models');
const bcrypt = require('bcrypt');

class UserRepository {
  async getAllUsers() {
    return User.findAll();
  }

  async createUser({ email, name, password }) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return User.create({ email, name, password: hashedPassword });
  }

  async getUserByEmail(email) {
    return User.findOne({ where: { email } });
  }
}

module.exports = UserRepository;
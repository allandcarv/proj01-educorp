import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nomeUsr: Sequelize.STRING,
        emailUsr: Sequelize.STRING,
        loginUsr: Sequelize.STRING,
        senhaUsr: Sequelize.STRING,
      },
      { sequelize }
    );
  }
}

export default User;

import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        idUsr: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        nomeUsr: Sequelize.STRING,
        emailUsr: Sequelize.STRING,
        loginUsr: Sequelize.STRING,
        senhaUsr: Sequelize.STRING,
      },
      { sequelize, tableName: 'usuarios' }
    );
  }
}

export default User;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuarios', {
      idUsr: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nomeUsr: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      emailUsr: {
        type: Sequelize.STRING(40),
        allowNull: false,
        unique: true,
      },
      loginUsr: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true,
      },
      senhaUsr: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};

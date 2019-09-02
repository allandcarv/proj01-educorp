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
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('NOW()'),
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuarios');
  },
};

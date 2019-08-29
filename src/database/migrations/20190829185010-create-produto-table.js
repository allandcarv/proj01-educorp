module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produto', {
      idProd: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      descProd: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      idCatProd: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categoriaproduto',
          key: 'idCatProd',
        },
      },
      valorProd: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};

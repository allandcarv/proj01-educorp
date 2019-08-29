module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categoriaproduto', {
      idCatProd: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      descCatProd: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  },
};

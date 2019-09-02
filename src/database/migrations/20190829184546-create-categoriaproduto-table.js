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
    return queryInterface.dropTable('categoriaproduto');
  },
};

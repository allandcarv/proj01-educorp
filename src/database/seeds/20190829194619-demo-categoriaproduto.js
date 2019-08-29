module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'categoriaproduto',
      [
        {
          descCatProd: 'Bebidas',
        },
        {
          descCatProd: 'Comidas',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categoriaproduto', null, {});
  },
};

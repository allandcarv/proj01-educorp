module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'produto',
      [
        {
          descProd: 'Refrigerante Pepsi',
          idCatProd: 1,
          valorProd: 6.99,
        },
        {
          descProd: 'Hamburguer',
          idCatProd: 2,
          valorProd: 8.99,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('produto', null, {});
  },
};

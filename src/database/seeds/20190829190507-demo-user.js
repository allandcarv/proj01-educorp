module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'usuarios',
      [
        {
          nomeUsr: 'João da Silva',
          emailUsr: 'joao@gmail.com',
          loginUsr: 'joao',
          senhaUsr: '123456',
        },
        {
          nomeUsr: 'Maria Soares',
          emailUsr: 'maria@gmail.com',
          loginUsr: 'maria',
          senhaUsr: '123456',
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuarios', null, {});
  },
};

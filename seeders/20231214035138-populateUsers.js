'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Users', [{
    email: 'janedoe@gmail.com',
    password: 'janedoe1',
    name: 'jane doe',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    email: 'johndoe@gmail.com',
    password: 'johndoe2',
    name: 'john doe',
    createdAt: new Date(),
    updatedAt: new Date()
   }
  ])
  },
  

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

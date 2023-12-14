'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Movies', [{
      title: 'Oppenheimer',
      category: 'Sci-fi',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Mr.Bean',
      category: 'Comedy',
      createdAt: new Date(),
      updatedAt: new Date()
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};

'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Indira Gandhi International Airport',
        address: 'New Delhi, India',
        city_id: 5,
        id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chhatrapati Shivaji Maharaj International Airport',
        address: 'Mumbai, India',
        city_id: 6,
        id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Kempegowda International Airport',
        address: 'Bengaluru, Karnataka, India',
        city_id: 7,
        id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rajiv Gandhi International Airport',
        address: 'Hyderabad, Telangana, India',
        city_id: 8,
        id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Netaji Subhas Chandra Bose International Airport',
        address: 'Kolkata, West Bengal, India',
        city_id: 9,
        id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }],
      {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

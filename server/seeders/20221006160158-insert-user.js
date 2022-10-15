"use strict";
/** @type {import('sequelize-cli').Migration} */

const generateUser = (key) => ({
  name: `Name${key}`,
  login: `login${key}`,
  password_hash: `pass${key}`,
  created_at:new Date(),
  updated_at:new Date(),
});
const generateUsers = (amount) => {
  return new Array(amount > 500 ? 500 : amount)
    .fill(null)
    .map((e, i) => generateUser(i));
};
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", generateUsers(60), {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};

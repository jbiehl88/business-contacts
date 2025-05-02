const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('business_contacts', 'postgres', 'postgres', {
  host: 'db',
  dialect: 'postgres',
});

module.exports = sequelize;
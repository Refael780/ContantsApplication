const Sequelize = require('sequelize');

const sequelize = require('../utils/database/database');

const Contracts = sequelize.define('contracts', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(30)
  },
  phone: {
    type: Sequelize.STRING(15)
  },
  title: {
    type: Sequelize.STRING(10)
  },
  avatar: {
    type: Sequelize.STRING(50)
  },
  created_at: {
    type: Sequelize.DATE
  },
  update_at: {
    type: Sequelize.DATE
  }
});
module.exports = Contracts;

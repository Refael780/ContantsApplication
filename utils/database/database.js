const Sequelize = require('sequelize');

const sequelize = new Sequelize('contracts', 'root', '14782356', {
  dialect: 'mysql',
  host: 'localhost'
});
module.exports = sequelize;

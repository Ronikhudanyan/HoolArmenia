const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

module.exports =  new Sequelize('express_auth_dev','postgres','Maddog686', {
  host: 'localhost',
  dialect: 'postgres',
 
});
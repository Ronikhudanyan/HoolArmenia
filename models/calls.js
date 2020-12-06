'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class calls extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  

calls.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_phone: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'calls',
});
// module.exports = Calls
return calls

}

// const Sequelize = require('sequelize');
// const dBase = require('./config/database');

// const calls = dBase.define('call', {
//   title: {
//     type: Sequelize.STRING
//   },
//   description: {
//     type: Sequelize.STRING
//   },
//   contact_email: {
//     type: Sequelize.STRING
//   },
//   contact_phone: {
//     type: Sequelize.STRING
//   },
// });

// // // calls.sync().then(() => {
// // //   console.log('table created');
// // // });
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
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    contact_email: DataTypes.STRING,
    contact_phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'calls',
  });
  return calls;
};
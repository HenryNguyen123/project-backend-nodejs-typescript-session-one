'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSetting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserSetting.init({
    user_id: DataTypes.BIGINT,
    allow_messages_from: DataTypes.STRING,
    allow_comments: DataTypes.STRING,
    push_notifications: DataTypes.BOOLEAN,
    privacy_profile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserSetting',
  });
  return UserSetting;
};
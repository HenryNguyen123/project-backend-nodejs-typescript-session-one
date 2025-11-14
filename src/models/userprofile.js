'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserProfile.init({
    user_id: DataTypes.BIGINT,
    bio: DataTypes.TEXT,
    cover_path: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    website: DataTypes.STRING,
    followers_count: DataTypes.INTEGER,
    following_count: DataTypes.INTEGER,
    videos_count: DataTypes.INTEGER,
    products_count: DataTypes.INTEGER,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};
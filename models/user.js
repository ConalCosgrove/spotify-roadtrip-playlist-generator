'use strict';
module.exports = (sequelize, DataTypes, Deferrable) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
      allowNull: false
    },
    spotifyId: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
      allowNull: false
    }
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Group, {
      through: models.Membership,
      as: 'groups',
      foreignKey: 'userId'
    })
  };

  return User;
};
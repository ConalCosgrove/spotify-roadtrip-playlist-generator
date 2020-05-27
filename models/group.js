'use strict';
module.exports = (sequelize, DataTypes, Deferrable) => {
  const Group = sequelize.define('Group', {
    name: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false
    },
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
    Group.belongsToMany(models.User, {through: models.Membership, as: 'users', foreignKey: 'groupId'});
  };
  return Group;
};
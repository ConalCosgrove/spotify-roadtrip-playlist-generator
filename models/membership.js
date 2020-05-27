'use strict';
module.exports = (sequelize, DataTypes, Deferrable) => {
  const Membership = sequelize.define('Membership', {
    userId: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.INTEGER,
      required: true,
      allowNull: false,
    }
  }, {});
  Membership.associate = function(models) {
    // associations can be defined here
  };
  return Membership;
};
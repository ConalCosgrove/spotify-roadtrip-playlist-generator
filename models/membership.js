module.exports = (sequelize, DataTypes) => {
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
    },
  }, {});
  Membership.associate = (models) => {
    // associations can be defined here
  };
  return Membership;
};

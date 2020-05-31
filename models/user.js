
module.exports = (sequelize, DataTypes) => {
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
      allowNull: false,
    },
    accessToken: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
      allowNull: false,
    },
    spotifyId: {
      type: DataTypes.STRING,
      unique: true,
      required: true,
      allowNull: false,
    },
  }, {});
  User.associate = (models) => {
    User.belongsToMany(models.Group, {
      through: models.Membership,
      as: 'groups',
      foreignKey: 'userId',
    });
  };

  return User;
};

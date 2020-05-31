
module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.addColumn('Users', 'refreshToken', {
        type: Sequelize.TEXT,
        allowNull: false,
      });

      await queryInterface.addColumn('Users', 'accessToken', {
        type: Sequelize.TEXT,
        allowNull: false,
      });
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
  down: async (queryInterface) => {
    try {
      queryInterface.removeColumn('Users', 'accessToken');
      queryInterface.removeColumn('Users', 'refreshToken');
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  },
};

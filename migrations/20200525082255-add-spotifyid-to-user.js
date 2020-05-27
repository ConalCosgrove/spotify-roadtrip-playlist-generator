'user strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'spotifyId', {
      type: Sequelize.TEXT,
      allowNull: false
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'spotifyId');
  }
}
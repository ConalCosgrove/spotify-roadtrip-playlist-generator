module.exports = {
  development: {
    username: process.env.DB_USERNAME_DEVELOPMENT,
    password: process.env.DB_PASSWORD_DEVELOPMENT,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: process.env.DB_USERNAME_TEST,
    password: process.env.DB_PASSWORD_TEST,
    database: process.env.DB_NAME_TEST,
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    username: process.env.DB_USERNAME_PRODUCTION,
    password: process.env.DB_PASSWORD_PRODUCTION,
    database: process.env.DB_NAME_PRODUCTION,
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
};

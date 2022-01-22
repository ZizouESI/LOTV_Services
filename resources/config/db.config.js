module.exports = {
    HOST: "db",
    PORT: "5432",
    USER: "lotva",
    PASSWORD: "test",
    DB: "resources",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};
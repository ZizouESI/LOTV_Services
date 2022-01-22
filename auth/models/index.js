const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
//configuration de sequelize et de la base de données
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    port: config.PORT,
    dialect: config.dialect,
    operatorsAliases: false,
    
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
//création des tables (migrations)
db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);

//ajout des contraintes d'intégrité
//un utilisateur peut avoir plusieurs roles et un role peut être pris par plusieurs utilisateurs (Many-to-Many)
db.role.belongsToMany(db.user, { 
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

//les roles sont : utilisateur simple (client) , moderator (Employe) et Admin 
db.ROLES = ["user", "admin", "moderator"];



module.exports = db;

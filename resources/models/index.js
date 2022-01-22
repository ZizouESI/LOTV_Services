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
db.product = require("./product.model.js")(sequelize, Sequelize);
db.command = require('./command.model.js')(sequelize,Sequelize);
db.command_product = require('./command_product.model.js')(sequelize,Sequelize);
db.fleur = require('./fleur.model.js')(sequelize,Sequelize);
db.product_flower = require('./product_flower.model.js')(sequelize,Sequelize);
//ajout des contraintes d'intégrité


/*Many to Many entre produits et les commandes*/

db.command.belongsToMany(db.product,{
  through: db.command_product
  
});

db.product.belongsToMany(db.command,{
  through: db.command_product
});

/*One to Many entre l'utilisateur et les commandes 
db.user.hasMany(db.command , {as : "commands"});

db.command.belongsTo(db.user,{
  foreignKey : "userId",
  as :"user"
});
*/

/*Many to Many entre le produit et les fleurs */
db.product.belongsToMany(db.fleur,{through : db.product_flower});
db.fleur.belongsToMany(db.product,{through : db.product_flower});

module.exports = db;

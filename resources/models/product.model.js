module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("products", {
      nom: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      components: {
        type: Sequelize.STRING
      },
      prix : {
        type: Sequelize.INTEGER
      },
      nomCollection: {
        type: Sequelize.STRING
      },
      type: { //0 pour prédéfinis , 1 pour personalisé
        type: Sequelize.INTEGER
      }
    });
    
    return Product;
};
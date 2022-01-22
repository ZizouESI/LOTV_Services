module.exports = (sequelize, Sequelize) => {
    const Product_Flower = sequelize.define("product_flowers", {
      qty: { //quantité de la fleur dans le produit , c'est utile pour les bouquets personnalisés 

        type: Sequelize.INTEGER
      }
    }, { timestamps: false });
    
    return Product_Flower;
};

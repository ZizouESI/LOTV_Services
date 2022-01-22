module.exports = (sequelize, Sequelize) => {
    const Command_Product = sequelize.define("command_products", {
      qty: {
        type: Sequelize.INTEGER
      },
      status : { //0 pour préparation , 1 terminé , si le produit est personnalisé
        type: Sequelize.INTEGER
      }
    }, { timestamps: false });
    
    return Command_Product;
};

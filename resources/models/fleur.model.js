module.exports = (sequelize, Sequelize) => {
    const Fleur = sequelize.define("fleurs", {
      nom: {
        type: Sequelize.STRING
      },
      image : {
        type : Sequelize.STRING
      },
      prix : {
        type : Sequelize.INTEGER
      }
    });
    
    return Fleur;
};
module.exports = (sequelize, Sequelize) => {
    const Command = sequelize.define("commands", {
      description: {
        type: Sequelize.STRING
      },
      prix : {
        type : Sequelize.INTEGER
      },
      userId: {
      	type: Sequelize.INTEGER
      }
    });
    
    return Command;
};

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
      },
      username: {
        type: Sequelize.STRING
      }
    });
    
    return Command;
};

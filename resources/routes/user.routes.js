const { resourcesJWT } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  

  app.get(
    "/user/:id",
    [resourcesJWT.verifyToken],
    controller.userBoard
  );

  app.post(
    "/command/validate",
    [resourcesJWT.verifyToken, resourcesJWT.isModerator],
    controller.validateCommand
  )
  
  app.post(
    "/command/:id",
    [resourcesJWT.verifyToken],
    controller.createCommand
  );
  

  app.get(
    "/command/:id",
    [resourcesJWT.verifyToken],
    controller.getCommand
  );

  app.get(
    "/mod/:id",
    [resourcesJWT.verifyToken, resourcesJWT.isModerator],
    controller.moderatorBoard
  );

 
  app.get(
    "/admin/:id",
    [resourcesJWT.verifyToken, resourcesJWT.isAdmin],
    controller.adminBoard
  );
};

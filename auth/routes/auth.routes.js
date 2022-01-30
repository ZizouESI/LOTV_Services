const { authJwt,verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
    next();
  });

  app.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/signin", controller.signin);


  /** Implémentation basique du Message Broker 
   * Envoi de messages entre le service auth et le service resources
   * en utilisant le protocole HTTP
  */

  app.post("/verifyToken",(req,res,next)=>{

    let token = req.body.token;

    if (!token) {
      return res.status(403).send({
        message: "Aucun token fourni!"
      });
    }

    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: "Non autorisé!"
        });
      }
      
    });
    
    return res.status(200).send({
      message: "OK"
    });

  });

  app.post("/isAdmin",(req,res,next)=>{
      let userId = req.body.userId;
      User.findByPk(req.userId).then(user => {
        user.getRoles().then(roles => {
          for (let i = 0; i < roles.length; i++) {
            if (roles[i].name === "admin") {
              next();
              return;
            }
          }
    
          res.status(403).send({
            message: "Exige un rôle d'administrateur!"
          });
          return;
        });
      }).catch(err => {
        res.status(403).send({
          message: "Failed! is Not Admin"
        });
      });
  });

  app.post("/isModerator",(req,res,next)=>{
    let userId = req.body.userId;
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "moderator") {
            next();
            return;
          }
        }
  
        res.status(403).send({
          message: "Exige un rôle de modérateur!"
        });
        return;
      });
    }).catch(err => {
      res.status(403).send({
        message: "Failed! is Not Moderator"
      });
    });
});
};

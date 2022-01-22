const  axios  = require("axios");




//vérification de token
verifyToken = (req,res,next) => {
  
  //perform axios request to auth service 
  axios.post("http://gateway:8000/auth/verifyToken",{
    token:req.headers["x-access-token"],
  })
  .then( response => {
      if(response.data.message == 'OK'){
        next();
      }else{
        return res.status(401).send({
          message: "Non autorisé!"
        });
      }
      
  })
  .catch(err => {
    res.status(err.response.status).send({
      message: "Acces Non autorisé!"
    });
  });
};
//si le token est correcte (autorisé) , on vérifie si l'utilisateur est un admin
isAdmin = (req, res, next) => {
  
};
//on verifie si l'utilisateur est un moderateur
isModerator = (req, res, next) => {
  
};
//on vérifie si l'utilisateur est un moderateur ou admin
isModeratorOrAdmin = (req, res, next) => {
  
};

const resourcesJWT = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isModerator: isModerator,
  isModeratorOrAdmin: isModeratorOrAdmin
};
module.exports = resourcesJWT;
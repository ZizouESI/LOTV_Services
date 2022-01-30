const db = require("../models");
const Product = db.product;
const Command = db.command;
const Fleur = db.fleur;
const Command_Products = db.command_product;
const Op = db.Sequelize.Op;

exports.userBoard = async (req, res) => {
    p = null;
    f = null;
    await Product.findAll({
        where: {
            type: 0
        }
    }).then(
        products => {
            if (!products) {
                //console.log("err products");
            } else {
                //console.log(products);
                p = products;
            }

        }
    );
    await Fleur.findAll({

    }).then(
        fleurs => {
            if (!fleurs) {
                //console.log("err products");
            } else {
                // console.log(fleurs);
                f = fleurs;
            }

        }
    );
    
    res.status(200).send({
     "products":p,
     "flowers":f   
    });
};

exports.createCommand = (req, res) => {
    Command.create({
        description: req.body.description,
        prix: req.body.prix,
        userId: req.body.uid
    }).then(command => {
        //console.log(req.body.prodids);
        if (req.body.prodids) {
            Product.findAll({
                where: {
                    id: req.body.prodids
                }
            }).then(prodids => {
                var newgids = req.body.gids.filter(e => e[0] != 0);
                for (var i = 0; i < newgids.length; i++) {
                    command.addProduct(prodids[i], { through: { qty: newgids[i].length, status: 1 } });
                }
                for (var j = 0; j < req.body.prods.length; j++) {
                    if (req.body.prods[j].type == 1) {
                        var liof = req.body.prods[j].liof;
                        var unique= new Set(liof);
                        var gliof= req.body.prods[j].gliof;
                        //produit personnalisé
                        Product.create({
                            nom: req.body.prods[j].name,
                            image: "perso.jpg",
                            prix: req.body.prods[j].prix,
                            type: 1
                        }).then(p => {
                            //set flowers
                            unique.forEach(u => {
                                var uqty=gliof.find(elt => elt[0]== u).length;
                                p.addFleur(u,{through: { qty: uqty}});

                            });
                            //addProduct
                            command.addProduct(p, { through: { qty: 1, status: 0 } });

                        });
                    }
                }
                res.send({ message: "La commande a été enregistrée avec succès!" });

            });
        }

    }).catch(err => {
        res.status(500).send({ message: err.message });
    });
}
exports.getCommand = (req, res) => {
    var response = [];
    Command.findAll({
        where: {
            userId: req.params.id
        },
        include: Product
    }).then(cmds => {
        res.status(200).send(cmds);
    }).catch(err =>{
        res.status(403).send({
            message : "pas de commande pour cet utilisateur !!"
        });
    });
}

exports.adminBoard = (req, res) => {
    //a faire comme extension du projet
    res.status(200).send("Admin Content.");
};

exports.moderatorBoard = async (req, res) => {
    //rechercher les commandes qui sont personnalisées et les données des utilisateurs a qui elles 
    //appartienent
    
    var commands = [];
    var li=[];
    var fqty=[];
    
    await Command.findAll({
        include: [Product, 'user']
    }).then( async cmds => {
    
        for (var c = 0; c < cmds.length; c++) {
            for (var l = 0; l < cmds[c].products.length; l++) {

                //si c'est un p perso et status non terminé
                if (cmds[c].products[l].type == 1 && cmds[c].products[l].command_products.status == 0) {
                    
                    li=[];
                    var prod =  await Product.findOne({
                        where: {
                            id: cmds[c].products[l].id,
                        },
                        include: [Fleur]
                    });

                        
                    for (var k = 0; k < prod.fleurs.length; k++) {
                        li.push(prod.fleurs[k].image);
                        fqty.push({
                            fid:prod.fleurs[k].id,
                            qty:prod.fleurs[k].product_flowers.qty
                        });
                    }
                    //console.log(prod.fleurs);
                    
                    
                    commands.push({
                        username: cmds[c].user.username,
                        description: cmds[c].description,
                        command_product_id: cmds[c].products[l].id,
                        images:li.slice(),
                        flower_qty:fqty
                    });
                }
            };
        };
    });
    
    
    res.status(200).send({"commands":commands});
};

exports.validateCommand = (req, res) => {
    var my_id = req.body.id;
    //console.log(my_id);
    Product.findOne({
        where: {
            id: my_id,
        },
        include: [Command]
    }).then(p => {
        //console.log(p.commands);
        var cId = p.commands[0].command_products.dataValues.commandId;
        var pId = p.commands[0].command_products.dataValues.productId;
        //console.log(cId);
        //console.log(pId);
        Command_Products.findOne({
            where: {
                commandId: cId,
                productId: pId
            }
        }).then(c_p => {
            c_p.update({
                status: 1
            }).then(() => res.status(200).send({ message: "La commande est validée" }));
        });

    });
}
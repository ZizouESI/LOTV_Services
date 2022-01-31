
import axios from 'axios'
import { useHistory } from 'react-router-dom'

import NavbarLoged from "./NavbarLoged"
import ItemForModerator from "./ItemForModerator"
import { useState, useEffect } from 'react';

const ModeratorbBoard = (props) => {
    const [comands,setComands] = useState([]) 
    /*[
            {
                "username": "zizou",
                "description": "[Sweet Orange : 1,Water Petals : 1,Personalisé : 1,]",
                "command_product_id": 10,
                "images": [
                    "f2.jpg",
                    "f4.jpg"
                ],
                "flower_qty": [
                    {
                        "fid": 2,
                        "qty": 1
                    },
                    {
                        "fid": 3,
                        "qty": 3
                    }
                ]
            },
            {
                "username": "zizou",
                "description": "[Sweet Orange : 1,Water Petals : 1,Personalisé : 1,]",
                "command_product_id": 11,
                "images": [
                    "f5.jpg",
                    "f3.jpg"
                ],
                "flower_qty": [
                    {
                        "fid": 2,
                        "qty": 1
                    },
                    {
                        "fid": 3,
                        "qty": 3
                    }
                ]
            },
            {
                "username": "zizou",
                "description": "[Sweet Orange : 1,Water Petals : 1,Personalisé : 1,]",
                "command_product_id": 12,
                "images": [
                    "f2.jpg",
                    "f3.jpg"
                ],
                "flower_qty": [
                    {
                        "fid": 2,
                        "qty": 1
                    },
                    {
                        "fid": 3,
                        "qty": 3
                    }
                ]
            },{
                "username": "zizou",
                "description": "[Sweet Orange : 1,Water Petals : 1,Personalisé : 1,]",
                "command_product_id": 13,
                "images": [
                    "f2.jpg",
                    "f3.jpg"
                ],
                "flower_qty": [
                    {
                        "fid": 2,
                        "qty": 1
                    },
                    {
                        "fid": 3,
                        "qty": 3
                    }
                ]
            }
        ]*/
        let history = useHistory();

        useEffect(()=>{
            const role=localStorage.getItem("roles")
            if(role!=null){
                if( !role.includes("ROLE_MODERATOR")   ){
                    history.push("/userboard")
                }else{
                   
                    axios.get("http://localhost:8000/resources/mod/"+localStorage.getItem("userId"), 
                    {
                        headers:{
                            "x-access-token": localStorage.getItem("actualUser")
                        }
                    }
                    )      
                    .then((response) => {
                        setComands(response.data.commands)
                    })
                    .catch((error) => {
                        //redicrect to home page
                        history.push('/')
                    }) 
                }
            }else{
                history.push("/")
            }
        },[history]
        );
         
        const handleClickValidateCoamnd = (id_prod)=>{
            
            axios.post("http://localhost:8000/resources/command/validate/"+localStorage.getItem("userId"), 
                {
                    "id" :id_prod,
                },
                {
                    headers:{
                            "x-access-token": localStorage.getItem("actualUser")
                        }
                })      
                .then((response) => {
                })
                .catch((error) => {
                    console.log(error)
                        //redicrect to home page
                    history.push('/')
                }) 
        }
    return ( 
        <div>
            <NavbarLoged/>
            <section className="ftco-section testimony-section" style={{backgroundImage: `url("/assets/images/img35.jpg")` ,backgroundRepeat: "no-repeat",backgroundAttachment: "fixed"}}
                data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-2">
                        <div className="col-md-7 text-center heading-section heading-section-white ">
                            <span className="subheading">LOTV</span>
                            <h2 className="mb-4">Validation de Commandes personalisées</h2>
                        </div>
                    </div>
                    <div className="row  justify-content-center">
                        <div className="col-md-7">
                            <div className="carousel-testimony  ftco-owl">
                                {comands.length === 0 &&  <div style={{marginTop: "10px"}} className="alert alert-danger" role="alert">Pas de commandes personnalisées pour l'instant</div>
                                ||

                                comands.map((comand) =>(
                                    <ItemForModerator handleClickValidateCoamnd={handleClickValidateCoamnd} comand={comand} key={comand.command_product_id}/>
                                ))
                                }
                            
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        </div>
      );
 }
  
 export default ModeratorbBoard;

import { useState, useEffect } from 'react';
import axios from 'axios'
import "../App.css"

import NavbarLoged from "./NavbarLoged"
import img1 from "../images/img9.jpg"
import Item from "./Item"
import Panier from "./Panier"
import Composition from "./Composition"
import Comands from "./Comands"

import { useHistory } from 'react-router-dom'

const UserBoard = () => {
    let history = useHistory();

    useEffect(()=>{
      
    
        axios.get("http://gateway:8000/resources/user/"+localStorage.getItem("userId"), 
            {
                headers:{
                    "x-access-token": localStorage.getItem("actualUser")
                }
            }
        )      
        .then((response) => {
            console.log(response.data.products)
            setProducts_origin (response.data.products)
            setFlowers_origin( response.data.flowers)
            setProducts(response.data.products)
        })
        .catch((error) => {
            //redicrect to home page
            history.push('/')
        })
    },[history]
    );
    const [products_origin  ,setProducts_origin] = useState([])
    const [flowers_origin   ,setFlowers_origin ] = useState([])

    const [checkBoxVariable ,setCheckBoxVariable]    = useState(false)
    const [display_fleur    ,setDisplay_fleur]       = useState("none")
    const [display_others   ,setDisplay_others]      = useState("")

    const [display_panier   ,setDisplay_panier]         = useState("none")
    const [display_composition,setDisplay_composition]  = useState("none")
    const [display_comands  ,setDisplay_comands]        = useState("none")

    const [sliderValue  ,setSliderValue]  = useState(275)
    const [products     ,setProducts]     = useState(products_origin)

    const [comands_panier       ,setComands_panier]       = useState([])
    const [comands_composition  ,setComands_composition]  = useState([])
    const [myComands            ,setMyComands]            = useState([])

    const [prixTotal            ,setPrixTotal]            = useState(0)
    const [prixTotalCompo       ,setPrixTotalCompo]       = useState(0)
    const [nbItems              ,setNbItems]              = useState(0)

    const handleChangeCheckBox  = ()                => {
        let permutation_var = display_fleur
        setCheckBoxVariable(!checkBoxVariable)
        setDisplay_fleur(display_others)
        setDisplay_others(permutation_var)
    }
    const handleClickExit       = (setDisplay_var)  => {
        setDisplay_var("none")
    }
    const handleClickShow       = (setDisplay_var)  => {
        setDisplay_var("")
    }
    const handleChangeProduct   = (value)           => {
        setProducts(products_origin.filter(product => product.prix < value))
    }
    const handleAddToPanier     = (data)            => {
        const index = comands_panier.map(e=>{return e.id}).indexOf(data.id)
        if(index===-1){
            setComands_panier(comands_panier.concat({"id":data.id,"name":data.nom,"image":data.image,"prix":data.prix,"nb":1,"type": 0}))
            setPrixTotal(prixTotal+data.prix)
            setNbItems(nbItems+1)
        }else{
            const nb = comands_panier[index].nb
            comands_panier[index]={ "id"    :   data.id,
                                    "name"  :   data.nom,
                                    "image" :   data.image,
                                    "prix"  :   data.prix,
                                    "nb"    :   nb+1,
                                    "type"  :   0}
            setComands_panier(comands_panier)
            setPrixTotal(prixTotal+data.prix)
            setNbItems(nbItems+1)
        }
    }
    const handleDeleteItem  =  (itemId,itemPrix) =>{
        const index = comands_panier.map(e=>{return e.id}).indexOf(itemId)
        const nb    = comands_panier[index].nb
        const arr   = comands_panier
        arr.splice(index,1)
        setComands_panier( arr)
        setPrixTotal(prixTotal-itemPrix)
        setNbItems(nbItems-nb*1)
    }

    const handleAddToComposition= (data)           => {
        const index = comands_composition.map(e=>{return e.id}).indexOf(data.id)
        if(index===-1){
            setComands_composition(comands_composition.concat({"id":data.id,"name":data.nom,"image":data.image,"prix":data.prix,"nb":1}))
            setPrixTotalCompo(prixTotalCompo+data.prix)
        }else{
            const nb = comands_composition[index].nb
            comands_composition[index]={"id":data.id,
                                        "name":data.nom,
                                        "image":data.image,
                                        "prix":data.prix,
                                        "nb":nb+1,
                                        }
            setComands_composition(comands_composition)
            setPrixTotalCompo(prixTotalCompo+data.prix)
        }
    }

    const handleDeleteItemCompo  =  (itemId,itemPrix) =>{
        const index = comands_composition.map(e=>{return e.id}).indexOf(itemId)
        const arr   = comands_composition
        arr.splice(index,1)
        setComands_composition(arr)
        setPrixTotalCompo(prixTotalCompo-itemPrix)
    }

    const handleAddCompoToPanier =    ()            =>  {
        var description     = ""
        const liof          = []
        const gliof         = []
        var moreId          = []
        comands_composition.forEach(e => {
            description += e.name+" : "+e.nb+","
            liof.push(e.id)
            moreId = Array(e.nb).fill(e.id)
            gliof.push(moreId)
        });

        setComands_panier(comands_panier.concat({"id":0,"name":"Personalisé","description":description,"image":"perso.jpg","prix":prixTotalCompo,"gliof":gliof,"liof":liof,"nb":1,type: 1}))
        setPrixTotal(prixTotal+prixTotalCompo)
        setNbItems(nbItems+1)
        setPrixTotalCompo(0)
        setComands_composition([])
    }

    const handleClickAcheter     = ()=>{
        if (comands_panier.length>0){
            var description     = '['
            const prodIds       = []
            const gids          = []
            var moreId          = []
            comands_panier.forEach(e => {
                description += e.name+" : "+e.nb+","
                prodIds.push(e.id)
                moreId = Array(e.nb).fill(e.id)
                gids.push(moreId)
            });

            description += "]"

            axios.post("http://gateway:8000/resources/command/"+localStorage.getItem("userId"), 
            {
                "description" : description ,
                "prix" : prixTotal,
                "uid" : localStorage.getItem("userId"),
                "prodids" : prodIds,
                "prods" : comands_panier,
                "gids": gids
            },
            {
                headers:{
                    "x-access-token": localStorage.getItem("actualUser")
                },
                
            }
            
            )      
            .then((response) => {
                console.log(response.data.message)
                console.log("succeess")
                setComands_panier([])
                setPrixTotal(0)
                setNbItems(0)
            })
            .catch((error) => {
                console.log(error.response.data.message)
                console.log("error")
            })
        }else{

        }
    }

    const handleClickGetComands     = ()=>{
        axios.get("http://gateway:8000/resources/command/"+localStorage.getItem("userId"),
            {
                    headers:{
                        "x-access-token": localStorage.getItem("actualUser")
                    },
            })      
            .then((response) => {
                console.log(response.data)
                console.log("succeess")
                setMyComands(response.data)
                
            })
            .catch((error) => {
                //redicrect to home page
                //history.push('/')
                console.log(error.response.data.message)
                console.log("error")
            })
    }
 
    return ( 
        <div>
            <NavbarLoged nbItems={nbItems}handleClickShow={handleClickShow} setDisplay_panier = {setDisplay_panier} setDisplay_comands = {setDisplay_comands} handleClickGetComands={handleClickGetComands}></NavbarLoged>
            <section className="hero-wrap hero-wrap-2" style={{backgroundImage: `url(${img1})`}}
                data-stellar-background-ratio="0.5">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 text-center">
                            <h1 className="mb-2 bread">Séléctionez les meilleurs bouquets</h1>
                            <p className="breadcrumbs">
                                <span className="mr-2">
                                <a href="/">Home <i className="ion-ios-arrow-forward"></i></a></span>
                                <span>UserBoard <i className="ion-ios-arrow-forward"></i></span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="ftco-section ">
                <div className="container">
                    <div className="container">
                        <div className="row justify-content-center mb-5 pb-2">
                            <div className="col-md-7 text-center heading-section ">
                                <span className="subheading">Nos spécialités</span>
                                <h2 className="mb-4" id="ColFle">Collections</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center mb-5 pb-2">
                            <div className="col-md-7 text-center heading-section ">
                                <span className="subheading ppcsub">prédéfinis</span>
                                <form id="ppc">
                                    <label className="switch">
                                        <input type="checkbox"  onChange={handleChangeCheckBox} />
                                        <span className="mySlider round"></span>
                                    </label>
                                </form>
                            </div>   
                        </div>

                        <div className="row justify-content-center mb-5 pb-2 composerContainer" style={{display: display_fleur}}>
                            <div className="col-md-7 text-center heading-section ">
                                <span className="subheading">Composer</span>
                                <button className="composerBtn" onClick={(e) =>handleClickShow(setDisplay_composition)}>
                                    <span className="notification-perso">{comands_composition.length}</span><span> fleurs</span>
                                </button>
                            </div>   
                        </div>
                            
                        {!checkBoxVariable && <div className="row justify-content-center mb-5 pb-2 sliderContainer" style={{margin:"auto"}}>
                            <div className="col-md-7 text-center heading-section ">
                                <span className="subheading">Filtrer par prix</span>
                                <input type="range" min={1} max={275} value={sliderValue} onChange={(e)=>{setSliderValue(e.target.value);handleChangeProduct(sliderValue)}} className="slider" id="myRange"/>
                                <span id='slider-price'>{sliderValue}</span><span>€</span>
                            </div>   
                        </div>}
                        <div className="row predefinirow"  style={{display :display_others}}>
                            {products.map((product) =>(
                                
                                    <Item product={product} handleAddTo={handleAddToPanier} key={product.id}/>
                                
                            ))}
                            
                        </div>
                        <div className="row personnaliserow"  style={{display : display_fleur}}>
                            {flowers_origin.map((product) =>(
                                
                                    <Item product={product} handleAddTo={handleAddToComposition} key={product.id}/>
                                
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div style={{display: display_panier}}>
                <Panier handleDeleteItem={handleDeleteItem} handleClickExit={handleClickExit} setDisplay_panier = {setDisplay_panier} comands_panier = {comands_panier} handleClickAcheter={handleClickAcheter} prixTotal={prixTotal}/>
            </div>
            <div style={{display: display_composition}}>
                <Composition handleAddCompoToPanier ={handleAddCompoToPanier} handleDeleteItemCompo ={handleDeleteItemCompo} handleClickExit={handleClickExit} setDisplay_composition = {setDisplay_composition} comands_composition = {comands_composition} prixTotalCompo={prixTotalCompo}/>
            </div>
            <div style={{display: display_comands}}>
                <Comands  handleClickExit={handleClickExit} setDisplay_comands = {setDisplay_comands} myComands = {myComands}/>
            </div>
        </div>
     );
}
 
export default UserBoard;
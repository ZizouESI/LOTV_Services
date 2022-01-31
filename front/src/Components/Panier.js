import {useEffect,useState} from 'react'

const Panier = (props) => {
    const handleClickExit   = props.handleClickExit
    const setDisplay_panier = props.setDisplay_panier
    const comands_panier    = props.comands_panier
    const handleClickAcheter= props.handleClickAcheter
    const prixTotal         = props.prixTotal
    const handleDeleteItem  = props.handleDeleteItem
    const success           = props.success
    const message           = props.message
    
    return ( 
        <div className="modal " id="my-cart-modal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" style={{display: "block"}}>
                <div className="modal-dialog " role="document" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title" id="myModalLabel" ><span className="icon-shopping-cart"></span> Mon panier</h4>
                            <button type="button" className="close float-right close-panier" data-dismiss="modal" aria-label="Close" onClick={(e) =>handleClickExit(setDisplay_panier)}>
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body" style={{display:"block"}}>
                            {comands_panier.length == 0 && <div className="alert alert-danger" role="alert" id="my-cart-empty-message-perso" >Votre composition est vide</div>
                                ||
                            <table className="table table-hover table-responsive" id="my-cart-table">
                                
                                <tbody className="tbody">
                                {comands_panier.map((comand) =>(
                                    
                                        <tr title={"produit"+comand.id} data-id={comand.id} data-up={comand.prix} key={comand.id}>
                                            <td className="text-center" style={{width: "30px"}}><img src={'/assets/images/'+comand.image} width="30px" height="30px"/></td>
                                            <td>{comand.name}</td>
                                            <td title="Prix unitaire">{comand.prix}€</td>
                                            <td title="Quantité"><input type="text" min="1" style={{width: "70px"}} className="my-product-quantity" value={comand.nb} readOnly/></td>
                                            <td title="Total" className="my-product-total">{comand.prix*comand.nb}€</td>
                                            <td title="Supprimer du panier" className="text-center" style={{width: "30px"}} >
                                                <button	className="btn btn-xs btn-danger my-product-remove" onClick={(e)=>handleDeleteItem(comand.id,comand.prix*comand.nb)}>X</button></td>
                                        </tr>
                                    ))}
                                        <tr>
                                            <td></td>
                                            <td><strong>Total</strong></td>
                                            <td></td><td></td>
                                            <td><strong id="my-cart-grand-total">{prixTotal}€</strong></td>
                                            <td></td>
                                        </tr>
                                        
                                        <tr style={{color: "red"}}>
                                            <td></td>
                                            <td><strong>Total (avec remise)</strong></td>
                                            <td></td>
                                            <td></td>
                                            <td><strong id="my-cart-discount-price">{prixTotal}€</strong></td>
                                            <td></td>
                                        </tr>
                                    
                                    
                                </tbody>
                                
                            </table>
                            }
                            {success &&<div style={{marginTop: "10px"}} className="alert alert-success" role="alert">{message}</div>}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default close-panier" data-dismiss="modal" onClick={(e) =>handleClickExit(setDisplay_panier)}>Fermer</button>
                            <button type="button" className="btn btn-primary" id="checkout-my-cart" onClick={handleClickAcheter}>Acheter</button>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default Panier;
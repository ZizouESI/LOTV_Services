import moment from 'moment'
import {useState} from 'react'

const Comands = (props) => {
    const handleClickExit    = props.handleClickExit
    const setDisplay_comands = props.setDisplay_comands
    const myComands          = props.myComands
    moment.locale('fr', {
        months : 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembredécembre'.split(''),
        weekdays : 'dimanche_lundi_mardi_mercredi_jeudi_vendredisamedi'.split(''),
        relativeTime : {
            future : 'dans %s',
            past : 'il y a %s',
            s : 'quelques secondes',
            m : 'une minute',
            mm : '%d minutes',
            h : 'une heure',
            hh : '%d heures',
            d : 'un jour',
            dd : '%d jours',
            M : 'un mois',
            MM : '%d mois',
            y : 'un an',
            yy : '%d ans'
        }
    });
    var status  = '' 
    var qty     = 0

    const handleState = (cmd) => {
        var exist = 0
        var status_here = ''
        qty     = 0
        cmd.products.forEach(e => { qty=qty+e.command_products.qty});
        cmd.products.forEach(e => {
            if((e.type == 1)&&(e.command_products.status == 0)){
                exist=1;
                status_here=status_here+(e.nom+' ');
            }
            });
            if(exist){
                status='Bouquets de fleurs : ['+status_here+'] sont en préparation';
            }else{
                status="Terminé";
            }
    }
    

    return ( 
        <div className="modal bd-example-modal-lg" id="my-command-modal" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" style={{display:"block"}}>
            <div className="modal-dialog modal-lg" role="document" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="myModalLabelCommand"><span className="icon-shopping-cart"></span> Mes commandes</h4>
                        <button type="button" className="close float-right close-panier-command" data-dismiss="modal" aria-label="Close" onClick={(e) =>handleClickExit(setDisplay_comands)}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body" style={{display:"block"}}>
                    {myComands.length == 0 && <div className="alert alert-danger" role="alert" id="my-command-empty-message" >Vous n'avez pas de commandes</div>
                            ||
                        <table className="table table-hover table-responsive" id="my-command-table">
                            
                            <thead className="thead-command">
                                <tr>
                                    <th>Description</th>
                                    <th>Quantité</th>
                                    <th>Prix</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody className="tbody-command">
                            {myComands.map( (comand) =>(handleState(comand)||true)&&
                                (
                                <tr title="command '+cmd.id+'" key={comand.id}>
                                    <td>Bouquets de fleurs : {comand.description}</td>
                                    <td title="Quantité">{qty}</td>
                                    <td title="Total" className="my-product-total"> {comand.prix}</td>
                                    <td title="Status" > {status} </td>
                                    <td title="Date" >{moment(comand.createdAt).fromNow()}</td>
                                </tr>
                            ))}
                            </tbody>
                            
                            
                        </table>
                    }
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default close-panier-command" data-dismiss="modal" onClick={(e) =>handleClickExit(setDisplay_comands)}>Fermer</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Comands;
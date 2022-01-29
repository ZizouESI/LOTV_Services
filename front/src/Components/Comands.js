const Comands = (props) => {
    const handleClickExit    = props.handleClickExit
    const setDisplay_comands = props.setDisplay_comands
    const myComands          = props.myComands
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
                            {myComands.map((comand) =>(
                                <tr title="command '+cmd.id+'" data-id="'+cmd.id+'" data-up="'+cmd.prix+'" key={comand.id}>
                                    <td>Bouquets de fleurs : {comand.description}    </td>
                                    <td title="Quantité">1  </td>
                                    <td title="Total" className="my-product-total">{comand.prix}  </td>
                                    <td title="Status" >Terminé </td>
                                    <td title="Date" >il y a quelques secondes</td>
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
import {useState} from 'react'


const ItemForModerator = (props) => {
    const index  = []
    const comand = props.comand
    const handleClickValidateCoamnd = props.handleClickValidateCoamnd
    
    return ( 
        <div className="item">
            <div className="testimony-wrap text-center py-4 pb-5">
                                        
                <div className="text p-3 ">
                    {comand.images.map((image)=>((index.push(""))&& 
                        <div key={image} className="user-img mb-4 drawNumber" style={{backgroundImage: `url(/assets/images/${image})`, display: "inline-block"}}>
                            <span style={{fontSize:"60px", color: `#f5f5f5` }}>{comand.flower_qty[index.length-1].qty }</span>
                        </div>
                    ))
                    }

                    <p className="mb-4" style={{color: "black"}}>Bouquet de fleurs personnalisé par</p>
                    <p className="name prod-id" data-id="<%=commands[i].command_product_id%>"> {comand.username}</p>
                    <span className="position">Client</span>
                    <div className="col-md-12 mt-3">
                        <div className="form-group">
                            <input type="button" value="Valider le bouquet" className="btn btn-primary py-3 px-5 validation"  onClick={(e)=>handleClickValidateCoamnd(comand.command_product_id)}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ItemForModerator;
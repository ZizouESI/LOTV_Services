const Item = (props) => {
    const product           = props.product
    const handleAddTo = props.handleAddTo
    return ( 
        
     
            <div className="col-md-4  artic shadow-lg p-3 mb-5 bg-white rounded"  >
              <div className="blog-entry zoom">
                <a href="" className="block-20" >
                  <img  className="block-20" src={'/assets/images/'+product.image} alt="image"/>
                </a>

                <div className="text px-4 pt-3 pb-4">
                  <div className="meta">
                    <div>
                      {product.date}
                    </div>
                    <div className="float-right">
                       {product.prix}€
                    </div>
                  </div>

                  <h3 className="heading" data-id="<%=products[i].id%>" data-name="<%=products[i].nom%>"
                    data-image="images/<%=products[i].image%>" data-prix="<%=products[i].prix%>">
                    <a href="#">
                      {product.nom}
                    </a>
                  </h3>
                  
                  <div className="float-left read">
                    {product.nomCollection}
                  </div>
                  <button className="btn btn-sm float-right meta-chat add-to-cart" onClick={(e) =>handleAddTo ({id:product.id,nom:product.nom,image:product.image,prix:product.prix})}>Ajouter <span
                      className="icon-plus" ></span></button>
                  
                </div>
           
            </div>
           </div>
         
       
     );
}
 
export default Item;
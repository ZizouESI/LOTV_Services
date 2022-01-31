import '../css/myCss/home.css'
import NavBar from './Navbar.js'
import Helmet from  'react-helmet'

import Navbar from './Navbar.js'
import img7 from '../images/img7.jpg'

const Home = () => {
   
    return ( 
        <div>
            <section className="h-100 ">
            
            <div className="d-flex justify-content-end" style={{height:"100vh"}}>
            <div className="overlay"></div>
                <div className="align-self-center" style={{marginRight:"50px"}}>
                    <div className="text mt-md-5">
                        <h1 className="mb-4"><b>Artisan de luxe</b> </h1>
                        <h1 className="mb-4"><b>à paris</b></h1>
                        <p>C'est dans le quartier de Saint-Germain-des-pres que LOTV</p>
                        <p>compose les plus belles fleurs de Paris. ici le croeur des fleurs joue</p>
                        <p> et se confond avec les medaillons de la venerable tapisserie</p>
                        <p><a href="/login" className="btn btn-primary px-4 py-3 mt-3">Commandez vos bouquets</a></p>
                    </div>
                </div>
                
                <div className="h-100 d-inline-block " >
                
                    <img className="my_image" src={require('../images/img7.jpg')} style={{height:"100%"}}></img>
                </div>

                
            </div>
          </section>



          <section className=" h-100 ftco-section ftco-wrap-about ftco-no-pb ftco-no-pt">
			<div className="container">
				<div className="row no-gutters">
					<div className="col-sm-5 img img-2 d-flex align-items-center justify-content-center justify-content-md-end" style={{backgroundImage: `url("/assets/images/img14.jpg")`, position: "relative"}}></div>
					<div className="col-sm-7 wrap-about py-5 ">
	          <div className="heading-section mt-5 mb-4">
	          	<div className="pl-lg-5 ml-md-5">
		          	<span className="subheading">A propos de nous</span>
		            <h2 className="mb-4" ><b>LOTV un fleuriste à paris</b></h2>
	            </div>
	          </div>
	          <div className="pl-lg-5 ml-md-5">
							<p>C’est dans le quartier de Saint-Germain-des-Près que LOTV compose les</p>
                            <p>plus belles fleurs de Paris. Ici le cœur des fleurs joue et se confond avec</p>
                            <p>les médaillons de la vénérable tapisserie. Roses de jardin, « Prince</p>
                            <p>jardinier », « Yves Piaget », Savoureux lilas et dahlias oubliés, Limonium</p>
                            <p> vaporeux et anémones audacieuses, Clématite insensée, jasmin et </p>
                            <p>mimosa adorés, Renoncules remarquables et pivoines introuvables, </p>
                            <p>Eucalyptus d’automne, myrthe, lentisque et camélia, Framboisier, </p>
                            <p>arbousier et grevillea, tous les matins, les fleurs des producteurs attitrés</p> 
                            <p>de Flower font leur entrée dans la boutique et la quittent en somptueux </p>
                            <p>bouquets.</p>
							<h3 className="mt-5"><b>Offres spéciales</b></h3>
							<div className="thumb my-4 d-flex">
	            	<a href="#" className="thumb-menu pr-md-4 text-center">
	            		<div className="img" style={{backgroundImage: `url("/assets/images/img10.jpg")`}}></div>
	            		<h4>Purple Amnesia</h4>
	            	</a>
	            	<a href="#" className="thumb-menu pr-md-4 text-center">
	            		<div className="img" style={{backgroundImage: `url("/assets/images/img11.jpg")`}}></div>
	            		<h4><b>Rosy Pompadour</b></h4>
	            	</a>
	            	<a href="#" className="thumb-menu pr-md-4 text-center">
	            		<div className="img" style={{backgroundImage: `url("/assets/images/img12.jpg")`}}></div>
	            		<h4><b>Collection Vases</b></h4>
	            	</a>
	            </div>
						</div>
					</div>
				</div>
			</div>
		</section>

    <section className="ftco-section">
    	<div className="container">
    		<div className="row justify-content-center mb-5 pb-2">
          <div className="col-md-7 text-center heading-section ">
          	<span className="subheading">Nos spécialités</span>
            <h2 className="mb-4">Collection</h2>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-6 col-lg-4 menu-wrap">
        		<div className="heading-menu text-center ">
        			<h3>Nouvelle Collection</h3>
        		</div>
        		<div className="menus d-flex ">
              <div className="menu-img img" style={{backgroundImage: `url("/assets/images/img15.jpg")`}}></div>
              <div className="text">
              	<div className="d-flex">
	                <div className="one-half">
	                  <h3>Coral Pink</h3>
	                </div>
	                <div className="one-forth">
	                  <span className="price">75€</span>
	                </div>
	              </div>
	              <p><span>Anémones</span>, <span>Roses</span>, <span>Renoncules</span></p>
              </div>
            </div>
            <div className="menus d-flex ">
              <div className="menu-img img" style={{backgroundImage: `url("/assets/images/img16.jpg")`}}></div>
              <div className="text">
              	<div className="d-flex">
	                <div className="one-half">
	                  <h3>Sweet Orange</h3>
	                </div>
	                <div className="one-forth">
	                  <span className="price">95€</span>
	                </div>
	              </div>
	              <p><span>Roses orangées</span>, <span>Renoncules</span>, <span>Pois de senteurs oranges</span>, <span>Eucalyptus</span>,<span>Gloriosa</span></p>
              </div>
            </div>
            <div className="menus d-flex ">
              <div className="menu-img img" style={{backgroundImage: `url("/assets/images/img17.jpg")`}}></div>
              <div className="text">
              	<div className="d-flex">
	                <div className="one-half">
	                  <h3>Water Petals</h3>
	                </div>
	                <div className="one-forth">
	                  <span className="price">75€</span>
	                </div>
	              </div>
	              <p><span>Hortensias blancs</span>, <span>Branches de pommiers </span>, <span>Eucalyptus</span></p>
              </div>
            </div>
        	</div>

        	<div className="col-md-6 col-lg-4 menu-wrap">
        		<div className="heading-menu text-center ">
        			<h3>Collection Pompadour</h3>
        		</div>
        		<div className="menus d-flex ">
              <div className="menu-img img" style={{backgroundImage: `url("/assets/images/img18.jpg")`}}></div>
              <div className="text">
              	<div className="d-flex">
	                <div className="one-half">
	                  <h3>White Pompadour</h3>
	                </div>
	                <div className="one-forth">
	                  <span className="price">195€</span>
	                </div>
	              </div>
	              <p><span>Renoncules</span>, <span>Roses</span>, <span>Lisianthus</span></p>
              </div>
            </div>
            <div className="menus d-flex ">
              <div className="menu-img img" style={{backgroundImage: `url("/assets/images/img19.jpg")`}}></div>
              <div className="text">
              	<div className="d-flex">
	                <div className="one-half">
	                  <h3>Powdered Pompadour</h3>
	                </div>
	                <div className="one-forth">
	                  <span className="price">195€</span>
	                </div>
	              </div>
	              <p><span>Roses</span>, <span>Hortensias</span></p>
              </div>
            </div>
            <div className="menus d-flex ">
              <div className="menu-img img" style={{backgroundImage: `url("/assets/images/img22.jpg")`}}></div>
              <div className="text">
              	<div className="d-flex">
	                <div className="one-half">
	                  <h3>Coloured Pompadour</h3>
	                </div>
	                <div className="one-forth">
	                  <span className="price">275€</span>
	                </div>
	              </div>
	              <p><span>Tulipes</span>, <span>Roses</span>, <span>Hortensias</span>, <span>Iris</span></p>
              </div>
            </div>
        	</div>

        	<div className="col-md-6 col-lg-4 menu-wrap">
        		<div className="heading-menu text-center ">
        			<h3>Collection Orchidées</h3>
        		</div>
        		<div className="menus d-flex ">
              <div className="menu-img img" style={{backgroundImage: `url("/assets/images/img20.jpg")`}}></div>
              <div className="text">
              	<div className="d-flex">
	                <div className="one-half">
	                  <h3>Orchidée blanche </h3>
	                </div>
	                <div className="one-forth">
	                  <span className="price">55€</span>
	                </div>
	              </div>
	              <p><span>Orchidée blanche livrée dans un pot en céramique noir.</span></p>
              </div>
            </div>
            <div className="menus d-flex ">
              <div className="menu-img img" style={{backgroundImage: `url("/assets/images/img21.jpg")`}}></div>
              <div className="text">
              	<div className="d-flex">
	                <div className="one-half">
	                  <h3>Orchidée fushia </h3>
	                </div>
	                <div className="one-forth">
	                  <span className="price">55€</span>
	                </div>
	              </div>
	              <p><span>Orchidée fushia dans un pot en céramique noir.</span></p>
              </div>
            </div>
            <div className="menus d-flex ">
              <div className="menu-img img" style={{backgroundImage: `url("/assets/images/img23.jpg")`}}></div>
              <div className="text">
              	<div className="d-flex">
	                <div className="one-half">
	                  <h3>Orchidée blanche </h3>
	                </div>
	                <div className="one-forth">
	                  <span className="price">80€</span>
	                </div>
	              </div>
	              <p><span>Orchidée blanche dans un pot en céramique réalisé à la main.</span></p>
              </div>
            </div>
        	</div>
			
        </div>
		
    	</div>
		
    </section>


        </div>
        
     );
}
 
export default Home;
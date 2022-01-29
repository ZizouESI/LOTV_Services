import '../css/myCss/home.css'
import NavBar from './Navbar.js'
import Helmet from  'react-helmet'

import Navbar from './Navbar.js'
import img7 from '../images/img7.jpg'

const Home = () => {
   
    return ( 
        <div>
            
          <section className="h-100 ">
            <Navbar ></Navbar>
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

           
        </div>
     );
}
 
export default Home;
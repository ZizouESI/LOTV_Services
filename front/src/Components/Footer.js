import '../css/style.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return ( 
            
        <footer className="ftco-footer ftco-bg-dark ftco-section">
            <div className="container">
            <div className="row mb-5">
                <div className="col-md-6 col-lg-3 offset-lg-3">
                <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2"> Lily Of The Valley </h2>
                    <p> C’est dans le quartier de Saint</p>
                    <p>-Germain-des-Près que LOTV compose</p>
                    <p>les plus belles fleurs de Paris. Ici le</p>
                    <p>cœur des fleurs joue et se confond avec</p>
                    <p>les médaillons de la vénérable tapisserie.</p>
                    <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
                    <li className=""><a href="#"><span className="icon-twitter"></span></a></li>
                    <li className=""><a href="#"><span className="icon-facebook"></span></a></li>
                    <li className=""><a href="#"><span className="icon-instagram"></span></a></li>
                    
                    </ul>
                </div>
                </div>
                
                <div className="col-md-6 col-lg-3">
                <div className="ftco-footer-widget mb-4">
                    <h2 className="ftco-heading-2">Horaires</h2>
                    <ul className="list-unstyled open-hours">
                        <p>Lundi            8:00 - 17:00</p>
                        <p>Mardi            8:00 - 17:00</p>
                        <p>Mercredi        8:00 - 17:00</p>
                        <p>Jeudi           8:00 - 17:00</p>
                        <p>Vendredi        8:00 - 17:00</p>
                    </ul>
                </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 text-center">
                    
                </div>
            </div>
            </div>
        </footer>
     );
}
 
export default Footer;
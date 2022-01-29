import { useHistory } from 'react-router-dom'

const NavbarLoged = (props) => {
    let history = useHistory();

    const handleClickShow        = props.handleClickShow
    const setDisplay_comands     = props.setDisplay_comands
    const setDisplay_panier      = props.setDisplay_panier
    const handleClickGetComands  = props.handleClickGetComands
    const nbItems                = props.nbItems
    
    const handleLogout = () =>{
        localStorage.setItem('userId', "");
        localStorage.setItem('username', "");
        localStorage.setItem('actualUser', "");
        history.push("/")
    }
    return (  
        <div className="shadow-lg shadow-inset">
            <nav className="navbar fixed-top navbar-expand-lg  ftco_navbar ftco-navbar-light shadow-lg p-4 mb-10" id="ftco-navbar">
                <div className="container">
                <a className="navbar-brand" href="/">
                    <b>Lily Of the Valley</b>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                    aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="oi oi-menu"></span> Menu
                </button>

                <div className="collapse navbar-collapse" id="ftco-nav">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><span className="nav-link" id="helloUser">{localStorage.getItem("username")}</span></li>
                    <li className="nav-item" onClick={(e) => {handleClickShow(setDisplay_comands);handleClickGetComands()}} ><span className="nav-link" id="mesCmds"    >Mes commandes</span></li>
                    <li className="nav-item" onClick={handleLogout}><a href="/" className="nav-link" >Logout</a></li>
                    <li className="nav-item " onClick={(e) =>handleClickShow(setDisplay_panier)}><span className="nav-link "><span className="icon-shopping-cart shopping-cart">
                        <span className="notification"> {nbItems}</span></span></span></li>

                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}
 
export default NavbarLoged;
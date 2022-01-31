import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Loader from './Components/Loader';
import Home from "./Components/Home"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import UserBoard from "./Components/UserBoard"
import ModeratorBoard from "./Components/Moderatorboard"

import "./css/myCss/home.css"
import "./css/bootstrap/bootstrap-grid.css"
import "./css/bootstrap/bootstrap-reboot.css"
import "./css/css/bootstrap-reboot.css"

import "./css/animate.css"
import "./css/aos.css"
import "./css/bootstrap.min.css"
import "./css/composer.css"
import "./css/flaticon.css"
import "./css/icomoon.css"
import "./css/ionicons.min.css"
import "./css/magnific-popup.css"
import "./css/myFonts.css"
import "./css/open-iconic-bootstrap.min.css"
import "./css/owl.carousel.min.css"
import "./css/owl.theme.default.min.css"
import "./css/slider.css"
import "./css/style.css"
import "./css/toggle.css"

import moment from 'moment'
import {useEffect} from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import { Redirect } from 'react-router'
import { useHistory } from 'react-router-dom'

function App() {
    let history = useHistory();
    const handleOthersLink = () => {
        history.push("/")
    }
    return ( 
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path ="/">
                        <Navbar/>
                        <Home/>
                        <Footer/>
                    </Route>
                    <Route exact path ="/login">
                        <Navbar/>
                        <Login/>
                        <Footer></Footer>
                    </Route>
                    <Route exact path = "/register">
                        <Navbar/>
                        <Signup/>
                        <Footer></Footer>
                    </Route>
                    
                    <Route exact path = "/userboard">    
                        <UserBoard></UserBoard>
                        <Footer></Footer>
                    </Route>    
                    <Route exact path = "/Moderatorboard">    
                        <ModeratorBoard/>
                        <Footer></Footer>
                    </Route>  
                    <Route path="*" >
                        <Redirect to='/'/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
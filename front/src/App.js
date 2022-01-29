import './App.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Loader from './Components/Loader';
import Home from "./Components/Home"
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import NavbarLoged from "./Components/NavbarLoged"
import UserBoard from "./Components/UserBoard"
import Panier from "./Components/Panier"
import "./css/slider.css"
import "./css/style.css"
import "./css/toggle.css"
import "./css/myFonts.css"
import "./css/bootstrap.min.css"
import "./css/composer.css"
import "./css/magnific-popup.css"
import "./css/ionicons.min.css"
import "./css/icomoon.css"
import "./css/flaticon.css"
import "./css/aos.css"
import "./css/animate.css"
import "./css/myCss/home.css"

import {useEffect} from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
function App() {
    useEffect(() => {
        /*const list = [{id:1,"useeless":"qq"},{id:2,"useeless":"qqq"},{id:3,"useeless":"qqqq"},{id:4,"useeless":"qqqqq"}]
        const nom = []
        list.forEach(e => {
            nom.push(e.useeless)
            console.log(e.useeless)
        });
        console.log("hie you"+"nom")
        console.log(nom)
        console.log("bye bye")*/
    }, [])
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
                </Switch>
            </div>
        </Router>
    );
}

export default App;
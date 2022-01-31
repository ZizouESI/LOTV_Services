import img1 from '../images/img9.jpg'
import img2 from '../images/img28.jpg'
import {useState} from "react"
import axios from "axios"
import { useHistory } from 'react-router-dom'

const Login = () => {
    let history = useHistory();

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const [message,setMessage] = useState('')
    const [display_error,setDisplay_error] = useState('none')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/auth/signin", 
        
            {
                "username": username,
                "password": password
            }
        )      
        .then((response) => {
            const roles = response.data.roles
            localStorage.setItem('userId', response.data.id);
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('actualUser', response.data.accessToken);
            localStorage.setItem('roles',response.data.roles);
            if(  roles.some(v => v==="ROLE_MODERATOR") ){
                history.push("/moderatorBoard")
            }else{
                history.push("/userboard")
            }
        })
        .catch((error) => {
            setDisplay_error("")
            setMessage(error.response.data.message)
        })
    }

    const handleClickCreate = () => {
        history.push("/signup")

    }

    return(
    <div>
        <section className="hero-wrap hero-wrap-2" style={{backgroundImage: `url(${img1})`}} data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="overlay"></div>
                <div className="row no-gutters slider-text align-items-center justify-content-center">
                    <div className="col-md-9 text-center">
                        <h1 className="mb-2 bread">Commandez vos bouquets</h1>
                        <p className="breadcrumbs">
                            <span className="mr-2">
                                <a href="/">Home <i className="ion-ios-arrow-forward"></i></a>
                            </span> 
                            <span>SignIn <i className="ion-ios-arrow-forward"></i></span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
            <section className="ftco-section ftco-no-pt ftco-no-pb">
                <div className="container">
                    <div className="row d-flex">
                    <div className="col-md-5 img img-2" style={{backgroundImage: `url(${img2})`}}>
                    </div>
                    <div className="col-md-7 makereservation p-4 p-md-5">
                        <div className="heading-section mb-5">
                        <span className="subheading">Commandez vos bouquets</span>
                        <h2 className="mb-4">Se connecter à LOTV</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                        <div className="form-group">
                            <label >Nom d'utilisateur</label>
                            <input type="text" name="username" value={username} onChange={(e)=>setUsername(e.target.value)} id="username" className="form-control" placeholder="Votre Nom d'utilisateur" required></input>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                            <label >Mot de passe</label>
                            <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} id="password" className="form-control" placeholder="Votre Mot de passe" required></input>
                        </div>
                        </div>  
                    
                        <div className="col-md-12 mt-3">
                        <div className="form-group">
                            <button type="submit" id="Connexion" value="Connexion"  className="btn btn-primary py-3 px-5">Connexion</button>
                        </div>
                        </div>
                        <div style={{display:display_error  ,marginTop: "10px"}} className="alert alert-danger" role="alert">{message}</div>
                        <div style={{marginTop: '160px'}}   ></div>

                        <div className="col-md-6">
                        <div className="form-group">
                            <label >Créer un compte</label>
                        </div>
                        
                        </div>  
                        <div className="col-md-12 mt-3" >
                        <div className="form-group">
                            <p><a href="/register" className="btn btn-primary py-3 px-5" onClick={handleClickCreate}>Créer un compte</a></p>
                        </div>
                        </div>                  
                        <div style={{marginTop: '200px'}}></div>                     
                    </div>         
                    </form>
                </div>
                </div>
            </div>
        </section>
    </div>
    );
}
export default Login
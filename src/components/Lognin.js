import React from 'react';
import { Link } from 'react-router-dom';
import './style/Lognin.css';
import axios from 'axios';

class Lognin extends React.Component {
    
    validateLogin() {
        axios.get('') 
    }

    render() {
        return (
            <div className="container" id="divLogin">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <div className="card text-center bg-dark rounded">  
                            <div className="card-body">
                                <form className="box">
                                    <h1><i className="fa fa-lock fa-3x"></i></h1>
                                    <input type="text" name="user" placeholder="Usuario" required />
                                    <input type="password" name="password" placeholder="Contraseña" required/>
                                    <Link className="text-muted" to="/">Olvido su Contraseña?</Link>
                                    <input type="submit" name="" value="Acceso"/>
                                    <div className="col-md-12">
                                        <ul className="social-network social-circle">
                                            <li>
                                                <a href="/" className="icoFacebook" title="Facebook">
                                                    <i className="fa fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" className="icoTwitter" title="Twitter">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" className="icoWhatsapp" title="Whatsapp">
                                                    <i className="fa fa-whatsapp"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Lognin;
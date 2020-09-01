import React from 'react';
import './login.css'
//import logo from './images/logo_SF.png';

function login() {
    return (
        <div className="container">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Inicio</h3>
                        <div className="d-flex justify-content-end social_icon">
                            <span><i className="fab fa-whatsapp-square"></i></span>
                        </div>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="usuario"/>
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" className="form-control" placeholder="contraseña"/>
                            </div>
                            <div className="row align-items-center remember">
                                <input type="checkbox"/>Recordarme
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Aceptar" className="btn float-right login_btn"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default login;
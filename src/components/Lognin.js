import React from 'react';
import './style/Lognin.css';

class Lognin extends React.Component {
    render() {
        return (
            <div className="container" id="divLogin">
                <div className="row pt-5">
                    <div className="col-md-5 mx-auto">
                        <div className="card text-center bg-dark rounded">  
                            <div className="card-body">
                                <form className="box">
                                    <h1><i className="fa fa-lock fa-3x"></i></h1>
                                    <input type="text" name="user" placeholder="Username" required />
                                    <input type="password" name="password" placeholder="Password" required/>
                                    <a className="text-muted" href="/">Forgot password?</a>
                                    <input type="submit" name="" value="Login"/>
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
            </div> )
    }
}

export default Lognin;
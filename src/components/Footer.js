import React from 'react';
//import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer className="page-footer font-small bg-dark text-white">
                    <div className="bg-primary">
                        <div className="container">
                            <div className="row py-4 d-flex align-items-center">
                                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                    <h6 className="mb-0">¡Conéctate con nosotros en redes sociales!</h6>
                                </div>
                                <div className="col-md-6 col-lg-7 text-center text-md-right">
                                    <a href="/" className="fb-ic">
                                        <i className="fa fa-facebook-f text-white mr-4 fa-lg"> </i>
                                    </a>
                                    <a href="/" className="gplus-ic">
                                        <i className="fa fa-whatsapp text-white mr-4 fa-lg"></i>
                                    </a>
                                    {/* <a href="/" className="tw-ic">
                                        <i className="fa fa-twitter text-white mr-4"> </i>
                                    </a>
                                    <a href="/" className="li-ic">
                                        <i className="fa fa-linkedin-in text-white mr-4"> </i>
                                    </a>
                                    <a href="/" className="ins-ic">
                                        <i className="fa fa-instagram white-text"> </i>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container text-center text-md-left pt-4 pt-md-5">
                        <div className="row mt-1 mt-md-0 mb-4 mb-md-0">
                            <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
                                <h5>About me</h5>
                                <hr className="bg-primary mb-4 mt-0 d-inline-block mx-auto w-60" />
                                <p className="foot-desc mb-0">Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                            <hr className="clearfix w-100 d-md-none" />
                            <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
                                <h5>Productos</h5>
                                <hr className="bg-primary mb-4 mt-0 d-inline-block mx-auto w-60" />
                                <ul className="list-unstyled foot-desc">
                                    <li className="mb-2">
                                        <a href="/">MDBootstrap</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/">MDWordPress</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/">BrandFlow</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="/">Bootstrap Angular</a>
                                    </li>
                                </ul>
                            </div>
                            <hr className="clearfix w-100 d-md-none" />
                            <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
                                <h5>Useful links</h5>
                                <hr className="bg-primary mb-4 mt-0 d-inline-block mx-auto w-60" />
                                <ul className="list-unstyled foot-desc">
                                    <li className="mb-2">
                                        <a href="#!">Your Account</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!">Become an Affiliate</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!">Shipping Rates</a>
                                    </li>
                                    <li className="mb-2">
                                        <a href="#!">Help</a>
                                    </li>
                                </ul>
                            </div>

                            <hr className="clearfix w-100 d-md-none" />
                            <div className="col-md-3 mx-auto mt-3 mt-md-0 mb-0 mb-md-4">
                                <h5>Contactos</h5>
                                <hr className="bg-primary mb-4 mt-0 d-inline-block mx-auto w-60" />
                                <ul className="fa-ul foot-desc ml-4">
                                    <li className="mb-2">
                                        <span className="fa-li">
                                            <i className="fa fa-map"></i>
                                        </span>
                                        Callejon del Sapo altos 12, Col. Centro, Del. Cuauthemoc
                                    </li>
                                    <li className="mb-2">
                                        <span className="fa-li">
                                            <i className="fa fa-phone"></i>
                                        </span>
                                        55 5512 2465
                                    </li>
                                    <li className="mb-2">
                                        <span className="fa-li">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                        admon@aztektec.com.mx
                                    </li>
                                    <li>
                                        <span className="fa-li">
                                            <i className="fa fa-clock-o"></i>
                                        </span>
                                        Lunes - Viernes: 09 - 19
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-copyright text-center py-3">© 2021 Copyright:
                        <a href="http://aztektec.com.mx/" rel = "noopener noreferrer" target="_blank"> aztektec.com</a>
                    </div>
                </footer>
            </React.Fragment>
        )
    }
}

export default Footer;
import React from 'react';
import './style/Navigation.css';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="vertical-nav bg-white active" id="sidebar">
                    <div className="py-4 px-2 mb-3 bg-light">
                        <div className="media d-flex align-items-center">
                            <Link to="/">
                                <img src="./images/logo_aztek.png" width="250" alt="Logo Aztek"/>
                            </Link>
                        </div>
                    </div>
            
                    <p className="text-gray font-weight-bold px-3 pb-4 mb-0">MENU</p>
                
                    <ul className="nav flex-column bg-white mb-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark font-italic bg-light">
                                <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark font-italic bg-light">
                                <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark font-italic bg-light">
                                <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark font-italic bg-light">
                                <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>Gallery
                            </Link>
                        </li>
                    </ul>
                </div>
            </React.Fragment>
        )
    }
}

export default Navigation;
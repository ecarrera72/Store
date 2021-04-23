import React from 'react';
import './style/Navigation.css';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-md navbar-light navbar-transparent fixed-top scrolling-navbar">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src="./images/logo_aztek.png" height="80" width="180" alt="logo aztek" />
                        </Link>
                        <button className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>

                        <div className="collapse navbar-collapse" id="basicExampleNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link navbar-link-2 waves-effect">
                                        <span className="badge badge-pill red text-light">1</span>
                                        <i className="fa fa-shopping-cart pl-0 text-light"></i>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link waves-effect text-light">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/lognin" className="nav-link waves-effect text-light">Sign in</Link>
                                </li>
                                <li className="nav-item pl-2 mb-2 mb-md-0">
                                    <Link to="/" type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                
                <div className="container text-center text-white py-5">
                    <h1>Aztek Control y Automatizacion</h1>
                </div>
                {/* <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <Link className="navbar-brand" to="/">
                        <img src="./images/logo_aztek.png" height="80" width="180" alt="logo aztek" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav1" aria-controls="basicExampleNav1" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                    </button>

                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link className="waves-effect" to="/">Home</Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link className="waves-effect" to="/">Templates</Link>
                        </li>
                        <li className="breadcrumb-item active">
                            <Link className="waves-effect" to="/">E-commerce</Link>
                        </li>
                    </ol>
                
                    <div className="collapse navbar-collapse" id="basicExampleNav1">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                            <Link to="/" className="nav-link navbar-link-2 waves-effect">
                                <span className="badge badge-pill red">1</span>
                                <i className="fa fa-shopping-cart pl-0"></i>
                            </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link to="/" className="nav-link dropdown-toggle waves-effect" id="navbarDropdownMenuLink3" data-toggle="dropdown" aria-expanded="true">
                                    <i className="united kingdom flag m-0"></i>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to="/">Action</Link>
                                    <Link className="dropdown-item" to="/">Another action</Link>
                                    <Link className="dropdown-item" to="/">Something else here</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link waves-effect">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link waves-effect">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/lognin" className="nav-link waves-effect">Sign in</Link>
                            </li>
                            <li className="nav-item pl-2 mb-2 mb-md-0">
                                <Link to="#!" type="button" className="btn btn-outline-info btn-md btn-rounded btn-navbar waves-effect waves-light">Sign up</Link>
                            </li>
                        </ul>
                    </div>
                </nav> */}
            </React.Fragment>
        )
    }
}

export default Navigation;
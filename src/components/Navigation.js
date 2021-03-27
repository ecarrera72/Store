import React from 'react';
import './style/Navigation.css';

class Navigation extends React.Component {
    toggleChange = (e) => {
        const sidebar = document.getElementById('sidebar');
        const content = document.getElementById('content');

        sidebar.classList.toggle('active');
        content.classList.toggle('active');
    }

    render() {
        return <div>
            <div className="vertical-nav bg-white active" id="sidebar">
                <div className="py-4 px-2 mb-3 bg-light">
                    <div className="media d-flex align-items-center">
                        <img src="./logo_aztek.png" width="250" alt="Logo Aztek"/>
                    </div>
                </div>
        
                <p className="text-gray font-weight-bold px-3 pb-4 mb-0">MENU</p>
            
                <ul className="nav flex-column bg-white mb-0">
                    <li className="nav-item">
                        <a href="/" className="nav-link text-dark font-italic bg-light">
                            <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link text-dark font-italic bg-light">
                            <i className="fa fa-address-card mr-3 text-primary fa-fw"></i>About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link text-dark font-italic bg-light">
                            <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>Services
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link text-dark font-italic bg-light">
                            <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>Gallery
                        </a>
                    </li>
                </ul>
            </div>
            {/* <div className="page-content p-3 active" id="content">
                <button className="btn btn-light bg-white rounded-pill shadow-sm" onClick={ this.toggleChange }>
                    <i className="fa fa-bars"></i>
                </button>
            </div> */}
        </div>
    }
}

export default Navigation;
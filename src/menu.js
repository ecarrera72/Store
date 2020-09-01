import React from 'react';
import './menu.css'

function menu() {
    return (
        <div className="container h-100">
            <header>
                <h1>...De Lo Sano</h1>
                <div className="d-flex justify-content-center h-100">
                    <div className="searchbar">
                        <input className="search_input" type="text" name="" placeholder="Search..."/>
                        <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default menu;
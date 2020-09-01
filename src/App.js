import React from 'react';
//import logo from './images/logo_SF.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nota">
        <p>Nota # <b>5</b></p>
      </div>
      <header className="App-header">
        <button className="botonMenu">...De Lo Sano</button>
        <button className="botonMenu">...Del Antojo</button>
        <button className="botonMenu">...Del Cafe</button>
        <button className="botonMenu">...Del Otro</button>
        <div>
          <a
            className="App-link"
            href="http://aztektec.com.mx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aztek Control y Automatizacion
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <div className="quiz" id="quiz" data-toggle="buttons">
        <label className="animationGeneral element-animation1 btn btn-lg btn-primary btn-block"><span className="btn-label"></span>...De Lo Sano</label>
        <label className="animationGeneral element-animation2 btn btn-lg btn-primary btn-block"><span className="btn-label"></span>...Del Cafe / Te</label>
        <label className="animationGeneral element-animation3 btn btn-lg btn-primary btn-block"><span className="btn-label"></span>...Del Antojo</label>
        <label className="animationGeneral element-animation4 btn btn-lg btn-primary btn-block"><span className="btn-label"></span>...De La Variedad</label>
      </div>
    </div>
  );
}

export default App;

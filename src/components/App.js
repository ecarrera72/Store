import React from 'react';
import './style/App.css';
import Navigation from './Navigation';
import Lognin from './Lognin'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  toggleChange = (e) => {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('content').classList.toggle('active');
  }

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <div className="page-content p-3 active" id="content">
          <button className="btn btn-light bg-white rounded-pill shadow-sm" onClick={this.toggleChange}>
            <i className="fa fa-bars"></i>
          </button>
          <Switch>
            <Route exact path="/" component={ Lognin } />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
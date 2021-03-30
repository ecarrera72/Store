import React from 'react';
import './style/App.css';
import Navigation from './Navigation';
import Footer from './Footer';
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
        <Switch>
          <Route exact path="/lognin" component={ Lognin } />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    )
  }
}

export default App;
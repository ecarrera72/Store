//import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import task from './example/task.json'
//import Tasks from './components/Tasks';
//import TaskForm from './components/TaskForm';
import Navigation from './components/Navigation';
import Lognin from './components/Lognin'


class App extends Component {
  toggleChange = (e) => {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');

    sidebar.classList.toggle('active');
    content.classList.toggle('active');
  }

  state = {
    tasks: task
  }

  render() {
    return <div>
      <Navigation />
      
      <div className="page-content p-3 active" id="content">
        <button className="btn btn-light bg-white rounded-pill shadow-sm" onClick={ this.toggleChange }>
          <i className="fa fa-bars"></i>
        </button>
        <Lognin />
      </div>

    </div>
  }
}

export default App;

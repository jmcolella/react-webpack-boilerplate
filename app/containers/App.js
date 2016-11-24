import React, { Component } from 'react';
import '../assets/stylesheets/application.scss';

class App extends Component {
  render() {
    return (
      <div className='container center-text'>
        <div className='app-header'>
          <h1>React-Webpack Boilerplate</h1>
          <p className='app-text'>Basic set-up for running React with Webpack.</p>
          <p className='app-text'>Dev server and production build available.</p>
        </div>
      </div>
    )
  }
};

export default App;

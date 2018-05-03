import React, { Component } from 'react';

import Title from './components/Title'
import Blurb from './components/Blurb'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container app__page-headers">
          <Title/>
          <Blurb/>
        </div>
      </div>
    );
  }
}

export default App;

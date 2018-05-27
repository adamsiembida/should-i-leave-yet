import React, { Component } from 'react';

import Title from './components/Title'
import Blurb from './components/Blurb'
import ThresholdEntry from './components/ThresholdEntry'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hours: '0',
      minutes: '45'
    }
  }

  handleHoursChange(hours) {
    this.setState({hours});
  }

  handleMinutesChange(minutes) {
    this.setState({minutes});
  }

  render() {
    return (
      <div className="App">
        <div className="container app__page-headers">
          <Title />
          <Blurb />
        </div>

        <ThresholdEntry
          hours={this.state.hours}
          minutes={this.state.minutes}
          onHoursChange={(e) => this.handleHoursChange(e)}
          onMinutesChange={(e) => this.handleMinutesChange(e)} />

      </div>
    );
  }
}

export default App;

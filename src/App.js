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

  handleMinutesChange(e) {
    const regex = /^[0-5]?[0-9]$/;
    if (e.target.value === '') {
      this.setState({minutes: 0});
    }
    else if (regex.test(e.target.value)) {
      this.setState({minutes: e.target.value});
    }
  }

  handleHoursChange(e) {
    const regex = /^[0-9]?[0-9]$/;
    if (e.target.value === '') {
      this.setState({hours: 0});
    }
    else if (regex.test(e.target.value)) {
      this.setState({hours: e.target.value});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container app__page-headers">
          <Title/>
          <Blurb/>
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

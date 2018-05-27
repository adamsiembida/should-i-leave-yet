import React, { Component } from 'react';
import './../styles/ThresholdEntry.css'

export default class ThresholdEntry extends Component {

  handleHoursTyping(e) {
    const regex = /^$|^[0-9]?[0-9]$/;
    if (regex.test(e.target.value)) {
      this.props.onHoursChange(e.target.value);
    }
  }

  handleHoursEnterKey(e) {
    if ((e.key === 'Enter') && (e.target.value === '')) {
      this.props.onHoursChange(0);
    }
  }

  handleHoursBlur(e) {
    if (e.target.value === '') {
      this.props.onHoursChange(0);
    }
  }

  handleMinutesTyping(e) {
    const regex = /^$|^[0-9]?[0-9]$/;
    if (regex.test(e.target.value)) {
      this.props.onMinutesChange(value);
    }
  }

  handleMinutesEnterKey(e) {
    if ((e.key === 'Enter') && (e.target.value === '')) {
      this.props.onMinutesChange(0);
    }
  }

  handleMinutesBlur(e) {
    if (e.target.value === '') {
      this.props.onMinutesChange(0);
    }
  }

  render() {
    return (
      <div className="row justify-content-center no-gutters">

        {/*Hours*/}
        <div className="col threshold-entry__input-col">
          <input
            className="threshold-entry__input-hours"
            value={this.props.hours}
            onChange={(e) => this.handleHoursTyping(e)}
            onKeyPress={(e) => this.handleHoursEnterKey(e)}
            onBlur={(e) => this.handleHoursBlur(e)}
          />
        </div>
        <div className="col col-md-auto label-col">
          <label className="threshold-entry__label-hours">hours</label>
        </div>

        {/*Line break when smaller than md*/}
        <div className="w-100 d-md-none"></div>

        {/*Minutes*/}
        <div className="col col-md-auto threshold-entry__input-col">
          <input
            className="threshold-entry__input-minutes"
            value={this.props.minutes}
            onChange={(e) => this.handleMinutesTyping(e)}
            onKeyPress={(e) => this.handleMinutesEnterKey(e)}
            onBlur={(e) => this.handleMinutesBlur(e)}
          />
        </div>
        <div className="col threshold-entry__label-col">
          <label className="threshold-entry__label-minutes">minutes</label>
        </div>

      </div>
    );
  }
};
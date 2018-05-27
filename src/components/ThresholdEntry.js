import React, { Component } from 'react';
import './../styles/ThresholdEntry.css'

export default class ThresholdEntry extends Component {

  handleHoursTyping(e) {
    const regex = /^[0-9]?[0-9]$/;
    if (regex.test(e.target.value)) {
      this.props.onHoursChange(e.target.value);
    }
  }

    handleMinutesTyping(e) {
    const regex = /^[0-9]?[0-9]$/;
    if (regex.test(e.target.value)) {
      this.props.onMinutesChange(value);
    }
  }

  render() {
    return (
      <div className="row justify-content-center no-gutters">

        {/*Hours*/}
        <div className="col threshold-entry__input-col">
          <input className="threshold-entry__input-hours" value={this.props.hours} onChange={(e) => {this.props.onHoursChange(e)}}/>
        </div>
        <div className="col col-md-auto label-col">
          <label className="threshold-entry__label-hours">hours</label>
        </div>

        {/*Line break when smaller than md*/}
        <div className="w-100 d-md-none"></div>

        {/*Minutes*/}
        <div className="col col-md-auto threshold-entry__input-col">
          <input className="threshold-entry__input-minutes" value={this.props.minutes} onChange={(e) => {this.props.onMinutesChange(e)}}/>
        </div>
        <div className="col threshold-entry__label-col">
          <label className="threshold-entry__label-minutes">minutes</label>
        </div>

      </div>
    );
  }
};
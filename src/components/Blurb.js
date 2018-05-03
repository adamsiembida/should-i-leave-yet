import React, { Component } from 'react';
import './../styles/Blurb.css'

export default class Blurb extends Component {
  render() {
    return (
      <p className="lead text-muted">
        Avoid spending your life in traffic. Get notified once your

        {/*This ensures the subtitle breaks at a nice looking spot when there is a lot of space for it. Otherwise you can*/}
        {/*end up with a situation where only the stylized portion is on the second line, and that seems to break the*/}
        {/*aesthetic. When the screen is narrow (sm or less), break wherever.*/}
        <br className="w-100 d-none d-md-block"/>

        travel time is <span className="blurb__less-than">less than</span>
      </p>
    );
  }
};
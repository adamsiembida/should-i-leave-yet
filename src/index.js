import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from "jquery";

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })
//
// $(function () {
//   $('[data-toggle="popover"]').popover()
// })

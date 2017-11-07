
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CounterParent from './Components/CounterParent';
import registerServiceWorker from './registerServiceWorker';

var destination = document.getElementById('root');
ReactDOM.render(<CounterParent />, destination);

registerServiceWorker();

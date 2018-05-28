import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';

require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

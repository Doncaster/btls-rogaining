import React from 'react';
import ReactDOM from 'react-dom';
import Firebase from 'firebase/app';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import firebaseConfig from '../firebase-config.js';

Firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

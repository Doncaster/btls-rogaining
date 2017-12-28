import React from 'react';
import ReactDOM from 'react-dom';
import * as Firebase from 'firebase';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import firebaseConfig from './firebase-config';
import reducers from './reducers';
import sagas from './sagas';

let createLogger = null;

if (process.env.NODE_ENV !== 'production') {
  createLogger = require('redux-logger').createLogger;
}

const btlsRogainingApp = Firebase.initializeApp(firebaseConfig);
console.log("Starting " + btlsRogainingApp.name);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
}

middlewares.push(sagaMiddleware);

const store = createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas, store.getState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

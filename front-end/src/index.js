import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

// ---Redux---
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import palleteReducer from './store/reducers/pallete';
import userInputReducer from './store/reducers/userInput';
import inspectReducer from './store/reducers/inspect';
import ignoreReducer from './store/reducers/ignore';
import tutorialModal from './store/reducers/tutorial';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    pallete: palleteReducer,
    userInput: userInputReducer,
    inspect: inspectReducer,
    ignore: ignoreReducer,
    tutorial: tutorialModal
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

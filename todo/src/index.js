import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import rootReducers from './reducers/index';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let store = createStore(rootReducers);

const render = () => ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.register();
store.subscribe(render);

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import { Provider} from 'react-redux';
import rootReducers from './reducers/index';
import './index.css';
import Root from './Root';

let store = createStore(rootReducers, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
     <Provider store={store}>
        <Root />
     </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

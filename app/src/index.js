import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import AsyncApp from './containers/AsyncApp'
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <AsyncApp />
    </Provider>,

    document.getElementById('root'));
registerServiceWorker();

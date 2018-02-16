import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import './css/style.css';

import App from './containers/App';
import LoginView from './containers/LoginView';

ReactDOM.render(
    <Provider store={store}>
        <App>
            <LoginView />
        </App>
    </Provider>,
    document.getElementById('main')
);

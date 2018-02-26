import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxDialog from './redux/redux-dialog';

import Main from './Main.js';

import BeerDialog from './redux/BeerDialog'
import LoginDialog from './redux/LoginDialog'
import store from './redux/store';
import './css/style.css';

const DialogBeer = reduxDialog({
  name: 'Beer Dialog'
})(BeerDialog);

const DialogLogin = reduxDialog({
  name: 'Login Dialog'
})(LoginDialog);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Main />
            <DialogBeer/>
            <DialogLogin/>
        </div>
    </Provider>,
    document.getElementById('main')
);

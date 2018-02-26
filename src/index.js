import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxDialog from './redux/redux-dialog';

import Main from './Main.js';

import BeerDialog from './redux/BeerDialog'
import store from './redux/store';
import './css/style.css';

const Dialog = reduxDialog({
  name: 'Beer Dialog'
})(BeerDialog);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Main />
            <Dialog/>
        </div>
    </Provider>,
    document.getElementById('main')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxDialog from './redux-dialog';

import { openDialog, closeDialog, closeAllDialogs } from './actions';
import BasicDialog from './dialog'
import BeerDialog from './BeerDialog'
import store from './store';
import './css/style.css';
import App from './components/App';


const Dialog = reduxDialog({
  name: 'Sign up dialog'
})(BasicDialog);

const Dialog2 = reduxDialog({
  name: 'Beer Dialog'
})(BeerDialog);

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App />
            <Dialog2 onAfterOpen={ () => console.log('On After Open') } onRequestClose={ () => console.log('On Request Close') } />
            <Dialog onAfterOpen={ () => console.log('On After Open') } onRequestClose={ () => console.log('On Request Close') } />
        </div>
    </Provider>,
    document.getElementById('main')
);

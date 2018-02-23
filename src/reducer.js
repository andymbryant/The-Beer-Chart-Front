import * as c from './constants';
import {UPDATE_RATING} from './actions';

const initialState = {
  dialogs: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.OPEN_DIALOG:
      const dialogsAfterOpen = Object.assign({}, state.dialogs, {
        [action.name]: {
          isOpen: true,
          payload: action.payload
        }
      });

      return Object.assign({}, state, {
        dialogs: dialogsAfterOpen
      });
    break;

    case c.CLOSE_DIALOG:
      const dialogsAfterClose = Object.assign({}, state.dialogs, {
        [action.name]: {
          isOpen: false
        }
      });

      return Object.assign({}, state, {
        dialogs: dialogsAfterClose
      });

    case c.UPDATE_RATING:
      console.log('hello');
    break;

    default:
      return state;
  }
}

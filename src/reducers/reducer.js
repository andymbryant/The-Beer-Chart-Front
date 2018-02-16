import {LOAD_BEER} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
};

export default (state = initialState, action) => {

    if (action.type === LOAD_BEER) {
        alert(action.beer);
    }
};

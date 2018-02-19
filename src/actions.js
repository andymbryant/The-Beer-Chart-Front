import * as c from './constants';

export const LOAD_BEER = 'LOAD_BEER';
export const loadBeer = beer => ({
    type: LOAD_BEER,
    beer
});

export const openDialog = (name, payload) => dispatch => {
    return fetch('http://localhost:3000/beers/wheat')
        .then(res => res.json())
        .then(beer => dispatch({type: c.OPEN_DIALOG, name: name, payload: {
            name: beer.name,
            desc: beer.description,
            abv: beer.abv,
            ibu: beer.ibu,
            pair: beer.foodPairings,
        }
        }
    )
    )

}

export function closeDialog(name) {
    return {
        type: c.CLOSE_DIALOG,
        name: name
    }
}

export function closeAllDialogs() {
    return {
        type: c.CLOSE_ALL_DIALOGS
    }
}

import * as c from './constants';

export const LOAD_BEER = 'LOAD_BEER';
export const loadBeer = beer => ({
    type: LOAD_BEER,
    beer
});

export const openDialog = (name, payload) => dispatch => {
    return fetch(`http://localhost:3000/beerNode/`)
        .then(res => res.json())
        .then(beer => dispatch({type: c.OPEN_DIALOG, name: name, payload: {
            name: beer.name,
            shortName: beer.shortName,
            desc: beer.desc,
            pair: beer.pair,
            glass: beer.glass,
            ibuMin : beer.ibuMin,
            ibuMax : beer.ibuMax,
            abvMin : beer.abvMin,
            abvMax : beer.abvMax,
            srmMin : beer.srmMin,
            srmMax : beer.srmMax
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

import * as c from './constants';

export const updateRating = (payload) => {
    return {
        type: c.UPDATE_RATING,
        payload: payload,

    }
}

export const openDialog = (name, payload) => dispatch => {
    if (name === 'Beer Dialog') {
        return fetch(`http://localhost:3000/beerNode/${payload.id}`)
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
                srmMax : beer.srmMax,
                fName: beer.featuredName,
                fBrewery: beer.featuredBrewery,
                fLink: beer.featuredLink
            }
            }
        )
        )
    }

    else if (name === 'Login Dialog') {
        return dispatch(
            {
                type: c.OPEN_DIALOG,
                name: name,
                payload: 'this is the payload'
            }
        )
    }

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

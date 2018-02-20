import * as c from './constants';

export const LOAD_BEER = 'LOAD_BEER';
export const loadBeer = beer => ({
    type: LOAD_BEER,
    beer
});

export const openDialog = (name, payload) => dispatch => {
    console.log(payload.id);
    return fetch(`http://localhost:3000/beerId/${payload.id}`)
        .then(res => res.json())
        .then(beer => dispatch({type: c.OPEN_DIALOG, name: name, payload: {
            typeName: beer.style.name,
            typeDesc: beer.style.description,
            pair: beer.foodPairings,
            glass: beer.glass.name,
            abvMin: beer.style.abvMin,
            abvMax: beer.style.abvMax,
            ibuMin: beer.style.ibuMin,
            ibuMax: beer.style.ibuMax,
            tokenName: beer.name,
            tokenDesc: beer.description,
            ibu: beer.ibu,
            abv: beer.abv,
            img: beer.labels.large
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

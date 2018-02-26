import React from 'react';

import Auth from '../modules/Auth';

import Stars from '../components/Stars';
import Text from '../components/Text';

const BeerDialog = (props) => (
<div>

    {Auth.isUserAuthenticated() ? (
        <h1>Logged in</h1>
    ) : (
        <h1>Not logged in</h1>

    )}
    <div>
        <a className="close" href="#" onClick={ props.onRequestClose }>X</a>
        <div>
            <Stars rating={props.payload.rating}/>
        </div>

        <div className="name">
            <h1 className="beer-title">{ props.payload.name }</h1>
            <h3><em>{ props.payload.shortName }</em></h3>
        </div>

        <div className="beer-info">
            <p className="beer-detail"><strong>ABV:</strong> { props.payload.abvMin }-{ props.payload.abvMax }%</p>
            <p className="beer-detail"><strong>IBU:</strong> { props.payload.ibuMin }-{ props.payload.ibuMax }</p>
            <p className="beer-detail"><strong>SRM:</strong> { props.payload.srmMin }-{ props.payload.srmMax }</p>
        </div>
    </div>

        <p>{ props.payload.desc }</p>
        <p>Best served in a { props.payload.glass }.</p>
        <p><strong>Food pairings:</strong> { props.payload.pair }</p>
        <p>Check out this featured { props.payload.shortName } from { props.payload.fBrewery}: <a href={`${props.payload.fLink}`} target='_blank'>{  props.payload.fName}.</a></p>


    <div>
        {/* {props.payload.notes.map((note, index) => {
            return (
                <Text note={note} key={index} index={index}/>
            )
        })} */}
    </div>
</div>

);

export default BeerDialog;

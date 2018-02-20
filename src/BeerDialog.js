import React from 'react';

const BeerDialog = (props) => (
  <div>
    <div className="dlg--body">
      <a href="#" onClick={ props.onRequestClose }>X</a>
      <ul>
        <li>{ props.payload.typeName }</li>
        <li>{ props.payload.typeDesc }</li>
        <li>{ props.payload.abvMin }</li>
        <li>{ props.payload.abvMax }</li>
        <li>{ props.payload.ibuMin }</li>
        <li>{ props.payload.ibuMax }</li>
        <li>{ props.payload.glass }</li>
        <li>{ props.payload.pair }</li>

        <li>token below</li>
        <li>{ <props className="payload tokenName"></props> }</li>
        <li>{ props.payload.tokenDesc }</li>
        <li>{ props.payload.ibu }</li>
        <li>{ props.payload.abv }</li>
        <li>{ props.payload.ibu }</li>
        <li><img src={props.payload.img} alt=""/></li>


      </ul>
    </div>
  </div>
);

export default BeerDialog;

import React from 'react';

const BeerDialog = (props) => (
  <div>
    <div className="dlg--body">
      <a href="#" onClick={ props.onRequestClose }>X</a>
      <ul>
        <li>{ props.payload.name }</li>
        <li>{ props.payload.shortName }</li>
        <li>{ props.payload.desc }</li>
        <li>{ props.payload.glass }</li>
        <li>{ props.payload.pair }</li>
        <li>{ props.payload.abvMin }</li>
        <li>{ props.payload.abvMax }</li>
        <li>{ props.payload.ibuMin }</li>
        <li>{ props.payload.ibuMax }</li>
        <li>{ props.payload.srmMin }</li>
        <li>{ props.payload.srmMax }</li>


      </ul>
    </div>
  </div>
);

export default BeerDialog;

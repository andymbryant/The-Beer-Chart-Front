import React from 'react';

const BeerDialog = (props) => (
  <div>
    <div className="dlg--body">
      { props.payload.name } <a href="#" onClick={ props.onRequestClose }>X</a>
    </div>
  </div>
);

export default BeerDialog;

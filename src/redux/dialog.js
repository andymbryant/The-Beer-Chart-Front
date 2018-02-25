import React from 'react';

const BasicDialog = (props) => (
  <div>
    <div className="dlg--body">
      My awesome modalbox for "{ props.payload.contentId } "! <a href="https://www.google.com" onClick={ props.onRequestClose }>Close it</a>
    </div>
  </div>
);

export default BasicDialog;

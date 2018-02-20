import React from 'react';
import {connect} from 'react-redux';

import { loadBeer, openDialog, closeDialog, closeAllDialogs } from '../actions';

class Token extends React.Component {

    render() {
        const { beers, type, id } = this.props;

        return (
        <div>
            <ul>
                {beers.map((key, index) => {
                    return (
                        <li key={key} className={`token-${type}`} onClick={() => this.props.dispatch(openDialog('Beer Dialog', { beer: `${key}`, id: `${id}` }))}>{key}</li>
                    )
                })}
            </ul>
        </div>
    )
  }
}

export default connect()(Token);

import React from 'react';
import {connect} from 'react-redux';

import {loadBeer} from '../actions';

class Token extends React.Component {

    render() {
        const { beers, type } = this.props;

        return (
        <div>
            <ul>
                {beers.map((key, index) => {
                    return (
                        <li key={key} className={`token-${type}`} onClick={() => this.props.dispatch(loadBeer(key))}>{key}</li>
                    )
                })}
            </ul>
        </div>
    )
  }
}

export default connect()(Token);

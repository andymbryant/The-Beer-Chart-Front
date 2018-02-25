import React from 'react';
import {connect} from 'react-redux';

import { openDialog } from '../redux/actions';

class Token extends React.Component {

    render() {
        const { beers, type, id } = this.props;

        return (
        <div>
            <ul>
                {beers.map((key, index) => {
                    return (
                        <li key={key} className={`token-${type}`} onClick={() => this.props.dispatch(openDialog('Beer Dialog', { beer: `${key}`, id: `${id[index]}` }))}>{key}</li>
                    )
                })}
            </ul>
        </div>
    )
  }
}

export default connect()(Token);

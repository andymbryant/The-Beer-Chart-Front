import React from 'react';

import { Link }from 'react-router-dom';
import Auth from '../modules/Auth';

import LogoutFunction from '../containers/LogoutFunction'

class Nav extends React.Component {
    constructor(props) {
        super(props);

    this.logout = this.logout.bind(this);

}
    logout(e) {
        e.preventDefault();
    }

    render() {
            return (
                    <div className="nav-container">
                        <button onClick={this.logout}></button>
                    </div>

            )
        }
}

export default Nav;

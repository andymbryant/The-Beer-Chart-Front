import React from 'react';

import { Link }from 'react-router-dom';
import Auth from '../modules/Auth';

import LogoutFunction from '../containers/LogoutFunction'

class Nav extends React.Component {
    render() {
        const { button, message } = this.props;

            return (
                    <div className="nav-container">
                        <div >
                            <Link to={`/${button}`}>{button}</Link>
                        </div>
                    </div>

            )
        }
}
 
export default Nav;

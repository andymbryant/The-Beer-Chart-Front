import React from 'react';

import { Link }from 'react-router-dom';


class Nav extends React.Component {
    render() {
        const { button } = this.props;

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

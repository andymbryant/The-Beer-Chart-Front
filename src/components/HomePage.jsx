import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';

import Type from './Type';
import Nav from './Nav';
import NavBar from './NavBar';

import lagers from '../beers/lagers';
import ales from '../beers/ales';
import specialty from '../beers/specialty';
import ambers from '../beers/ambers';

import { Link }from 'react-router-dom';

class HomePage extends React.Component {

    componentDidMount() {
    // update authenticated state on logout
        this.props.toggleAuthenticateStatus()
    }

    render() {
        return (
            <main>
                {Auth.isUserAuthenticated() ? (
                    <NavBar logged={true} />
                ) : (
                    <NavBar logged={false} />

                )}
                <div className='ale-view'>
                    <Type beerData={ales} type='ale'/>
                </div>

                <div className='specialty-view'>
                    <Type beerData={ambers} type='amber'/>
                    <div className='beer-key'>
                        <div className='beer-key-ale'>
                            <div className='ale-title'>
                                <h1 className="top">&#8679;Ales&#8679;</h1>
                            </div>
                        </div>
                        <div className='main-title'><h1>Beer!</h1></div>
                        <div className='beer-key-lager'>
                            <div className='lager-title'>
                                <h1 className="bottom">&#8681;Lagers&#8681;</h1>
                            </div>
                        </div>
                    </div>
                    <Type beerData={specialty} type='specialty'/>
                </div>

                <div className='lager-view'>
                    <Type beerData={lagers} type='lager'/>
                </div>
            </main>

        )
    }
};

export default HomePage;

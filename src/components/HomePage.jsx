import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';

import Type from './Type';
import Nav from './Nav';

import lagers from '../beers/lagers';
import ales from '../beers/ales';
import specialty from '../beers/specialty'

class HomePage extends React.Component {

    componentDidMount() {
    // update authenticated state on logout
        this.props.toggleAuthenticateStatus()
    }

    render() {
        return (
            <main>
                {/* <Card className="container">
                <CardTitle title="React Application" subtitle="This is the home page." />
                  {Auth.isUserAuthenticated() ? (
                    <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
                  ) : (
                    <CardText style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardText>
                  )}
                </Card> */}

                {/* <div>
                    <Nav />
                </div> */}

                <div className='ale-view'>
                    <Type beerData={ales} type='ale'/>
                </div>

                <div className='specialty-view'>
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

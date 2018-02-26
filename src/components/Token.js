import React from 'react';
import Auth from '../modules/Auth';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Stars from './Stars';
import Text from './Text';

class Token extends React.Component {
    state = {
        open: false,
        beer: '',
        beerId: ''
    };

    handleOpen = () => {
        this.setState({open: true});
        fetch(`http://localhost:3000/beerNode/cQMfwv`)
            .then(res => res.json())
            .then(beer => this.setState({beer}));
        this.setState({beerId: this.state.beer.beerId})
        }

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        const actions = [
            <FlatButton
                label="Close"
                onClick={this.handleClose}
            />,
        ];

        const { beers, type, id } = this.props;

        return (
        <div>
            <ul>
                {beers.map((key, index) => {
                    return (
                        <li key={key} className={`token-${type}`} onClick={this.handleOpen}>{key}</li>
                    )
                })}
            </ul>

            <Dialog
                title={this.state.beer.name}
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >
                <div>

                    {Auth.isUserAuthenticated() ? (
                        <h1>Logged in</h1>
                        ) : (
                        <h1>Not logged in</h1>
                    )}
                        <div>
                            <h3><em>{ this.state.beer.shortName }</em></h3>
                        </div>

                        <div className="beer-info">
                            <p className="beer-detail"><strong>ABV:</strong> { this.state.beer.abvMin }-{ this.state.beer.abvMax }%</p>
                            <p className="beer-detail"><strong>IBU:</strong> { this.state.beer.ibuMin }-{ this.state.beer.ibuMax }</p>
                            <p className="beer-detail"><strong>SRM:</strong> { this.state.beer.srmMin }-{ this.state.beer.srmMax }</p>
                        </div>
                    </div>

                        <p>{ this.state.beer.desc }</p>
                        <p>Best served in a { this.state.beer.glass }.</p>
                        <p><strong>Food pairings:</strong> { this.state.beer.pair }</p>
                        <p>Check out this featured { this.state.beer.shortName } from { this.state.beer.featuredBrewery}: <a href={`${this.state.beer.featuredLink}`} target='_blank'>{this.state.beer.featuredName}.</a></p>
                      <div>
                          <Text beerId={this.state.beer.beerId}/>
                      </div>
              </Dialog>
        </div>
        )
    }
}

export default Token;

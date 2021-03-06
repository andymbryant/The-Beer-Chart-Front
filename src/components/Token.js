import React from 'react';
import Auth from '../modules/Auth';
import Dialog from 'material-ui/Dialog';
import RefreshIndicator from 'material-ui/RefreshIndicator';

import Note from './Note';

const style = {
  container: {
    position: 'relative',
  },
  refresh: {
    position: 'relative',
    margin: 'auto'
  },
};

class Token extends React.Component {
    state = {
        open: false,
        beer: '',
        beerId: ''
    };

    //open modal, fetch json from database using beerId
    handleOpen = (id) => {
        this.setState({open: true});
        fetch(`https://powerful-caverns-35930.herokuapp.com/beerNode/${id}`)
        // fetch(`beerNode/${id}`)
            .then(res => res.json())
            .then(beer => this.setState({beer}));
            this.setState({
                beerId: id
            })
        }

    //close modal
    handleClose = () => {
        this.setState({open: false});
        };

    render() {
        let loading = this.state.beer;
        const { beers, type, id } = this.props;

        let beerModalStyle = '';

        if (type === 'ale') {
            beerModalStyle = {
                color: '#fda810',
                border: '#fda810 solid 10px',
                borderRadius: '2px'
            }
        }
        if (type === 'amber'|| type === 'specialty') {
            beerModalStyle = {
                color: '#ef4800',
                border: '#ef4800 solid 10px',
                borderRadius: '2px'
            }
        }
        if (type === 'lager') {
            beerModalStyle = {
                color: '#b10914',
                border: '#b10914 solid 10px',
                borderRadius: '2px'
            }
        }

        return (
        <div>
            <ul>
                {beers.map((key, index) => {
                    return (
                        <li key={key} className={`token-${type}`} id={id[index]} onClick={() => this.handleOpen(id[index])}>{key}</li>
                    )
                })}
            </ul>

            <Dialog
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
                contentStyle={beerModalStyle}
            >

                <div>
                    {loading ? (
                        <div className={`modal-wrapper-${type}`}>
                            <div>
                                <div>
                                    <h1><strong>{ this.state.beer.name }</strong></h1>
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
                                        {/* <div>
                                            <Stars beerId={this.state.beerId}/>
                                        </div> */}
                                        {Auth.isUserAuthenticated() ? (

                                            <Note disabled={false} value='Add your notes here.' beerId={this.state.beerId} type={type}/>
                                            ) : (
                                            <Note disabled={true} value='Login or register to add notes.' />
                                        )}

                                    </div>
                                        {/* <FlatButton
                                            label="Close"
                                            onClick={this.handleClose}
                                        /> */}
                        </div>
                    ) : (
                        <div style={style.container}>
                              <RefreshIndicator
                                size={100}
                                left={0}
                                top={0}
                                loadingColor={beerModalStyle.color}
                                status="loading"
                                style={style.refresh}
                              />
                      </div>
                    )}
                </div>

              </Dialog>
        </div>
        )
    }
}

export default Token;

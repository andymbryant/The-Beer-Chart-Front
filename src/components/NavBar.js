import React, {Component} from 'react';

import Auth from '../modules/Auth';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} label="Login" containerElement={<Link to="/login" />}/>
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
    <MenuItem primaryText="About" onClick={props.openAbout}/>
    <MenuItem
        primaryText="Data"
        onClick={props.openData}
        linkButton={true}
    />
    <MenuItem
        primaryText="Sign out"
        containerElement={<Link to="/logout"></Link>}
        linkButton={true}
    />

    </IconMenu>
);

Logged.muiName = 'IconMenu';

class NavBar extends Component {
    state = {
        logged: this.props.logged,
        openAbout: false,
        openData: false
    };

    openAbout() {
        this.setState({
        openAbout: true
        })
    }

    openData() {
        this.setState({
        openData: true
        })
    }

    closeAbout = () => {
        this.setState({openAbout: false});
    };

    closeData = () => {
        this.setState({openData: false});
    };

    componentDidMount() {
        if (!Auth.isUserAuthenticated())

            this.setState({
                openAbout: true
            })
    }

    delete = () => {
        fetch('https://powerful-caverns-35930.herokuapp.com/api/deleteNotes', {
            method: 'delete',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `bearer ${Auth.getToken()}`
            },
        })
    }

    render() {
        const aboutStyle = {
            border: '10px grey solid',
            borderRadius: '2px'
        }

        const buttonStyle1 = {
            margin: '5% auto 3%',
            display: 'block',
            width: '20%'
        }

        const buttonStyle2 = {
            marginRight: '3%'
        }

        const buttonStyle3 = {
            marginTop: ''
        }

        const style1 = {
            backgroundColor: '#fda810'
        }

        const style2 = {
            backgroundColor: '#fecb70'
        }

    return (
        <div>
            <AppBar
                title="The Beer Chart"
                iconElementRight={this.state.logged ? <Logged openAbout={()=>this.openAbout()} openData={()=>this.openData()}/> : <Login />}
                showMenuIconButton={false}
                style={{ position: "fixed" }}
            />

            <Dialog
                modal={false}
                open={this.state.openAbout}
                onRequestClose={this.closeAbout}
                contentStyle={aboutStyle}
            >

                {!Auth.isUserAuthenticated() ? (
                    <div className="about-wrapper">
                        <h1>The Beer Chart</h1>
                        <h3>The best place to learn about beer: mankind's greatest invention.</h3>
                        <p>Beer is one of the oldest and most widely consumed drinks on the planet. In fact, humans have been making beer for thousands of years, so there's a lot to know. You've come to the right place! Here you can read up on the many beer styles, write your own reviews, and find beers to try the next time you're out and about.</p>
                        <h3>Cheers!</h3>
                            <div>
                                <RaisedButton
                                    onClick={this.closeAbout}
                                    label='Browse'
                                    style={buttonStyle1}
                                >

                                </RaisedButton>
                            </div>
                            <RaisedButton
                                containerElement={<Link to="/login" />}
                                linkButton={true}
                                label={('Login')}
                                style={buttonStyle2}
                                buttonStyle={style1}
                            >
                            </RaisedButton>

                            <RaisedButton
                                containerElement={<Link to="/signup" />}
                                linkButton={true}
                                label={('Register')}
                                style={buttonStyle3}
                                buttonStyle={style2}

                            >
                            </RaisedButton>
                        <p className="copyright">Copyright 2018 - <a href="http://www.andymbryant.com">Andy Bryant</a></p>
                    </div>
                ) : (

                <div className="about-wrapper">
                    <h1>The Beer Chart</h1>
                    <h3>The best place to learn about beer: mankind's greatest invention.</h3>
                    <p>Beer is one of the oldest and most widely consumed drinks on the planet. In fact, humans have been making beer for thousands of years, so there's a lot to know. You've come to the right place! Here you can read up on the many beer styles, write your own reviews, and find beers to try the next time you're out and about.</p>
                    <h3>Cheers!</h3>
                    <p className="copyright">Copyright 2018 - <a href="http://www.andymbryant.com">Andy Bryant</a></p>
                </div>
                )}
            </Dialog>

            <Dialog
                modal={false}
                open={this.state.openData}
                onRequestClose={this.closeData}
                contentStyle={aboutStyle}
            >
                <div className='about-wrapper'>
                    <h3>Do you want to delete all of your notes? Click the button below.</h3>
                    <p><strong>Warning: </strong>This action is permanent. You will not be able to recover your data.</p>
                    <RaisedButton
                        onClick={this.delete}
                        label='Delete'
                    >
                    </RaisedButton>
                </div>
            </Dialog>
        </div>
        );
    }
}

export default NavBar;

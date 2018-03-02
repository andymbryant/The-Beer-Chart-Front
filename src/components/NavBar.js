import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Dialog from 'material-ui/Dialog';
import Auth from '../modules/Auth';
import RaisedButton from 'material-ui/RaisedButton';

import { Link } from 'react-router-dom';

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

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
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
                open: true
            })
    }

    delete = () => {
        fetch('http://localhost:3000/api/deleteNotes', {
            method: 'delete',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `bearer ${Auth.getToken()}`
            },
        })
    }



    render() {

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
            >

                <div>
                    <h1>The Beer Chart</h1>
                    <h3>The best place to learn about beer.</h3>
                </div>


            </Dialog>

            <Dialog
                modal={false}
                open={this.state.openData}
                onRequestClose={this.closeData}
            >

                <div>
                    <h1>Data</h1>
                    <h3>This is where I will delete data.</h3>
                    <RaisedButton
                        onClick={this.delete}
                    >

                    </RaisedButton>
                </div>


            </Dialog>
        </div>
        );
    }
}

export default NavBar;

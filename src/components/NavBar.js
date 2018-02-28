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
    <MenuItem primaryText="About" onClick={props.handleOpen}/>
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
        open: false
    };

    handleOpen() {
        this.setState({
        open: true
        })
    }

    handleClose = () => {
        this.setState({open: false});
    };

    componentDidMount() {
        if (!Auth.isUserAuthenticated())
            this.setState({
                open: true
            })
    }



    render() {

    return (
        <div>
            <AppBar
                title="Beer!"
                iconElementRight={this.state.logged ? <Logged handleOpen={()=>this.handleOpen()}/> : <Login />}
                showMenuIconButton={false}
                style={{ position: "fixed" }}
            />

            <Dialog
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
            >

                <div>
                    <h1>The Beer Chart</h1>
                    <h3>The best place to learn about beer.</h3>
                </div>


            </Dialog>
        </div>
        );
    }
}

export default NavBar;

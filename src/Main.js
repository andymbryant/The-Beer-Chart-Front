import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {pink500} from 'material-ui/styles/colors';
import * as Colors from 'material-ui/styles/colors';

// import routes from './routes.js';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';

import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import LogoutFunction from './containers/LogoutFunction.jsx';
import SignUpPage from './containers/SignUpPage.jsx';
import Auth from './modules/Auth';

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        Auth.isUserAuthenticated() ? (
            <Component {...props} {...rest} />
        ) : (
        <Redirect to={{
            pathname: '/',
            state: { from: props.location }
        }}/>
        )
    )}/>
)

const LoggedOutRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        Auth.isUserAuthenticated() ? (
            <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }}/>
            ) : (
            <Component {...props} {...rest} />
        )
    )}/>
)

const PropsRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        <Component {...props} {...rest} />
    )}/>
)

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false
        }
    };

    componentDidMount() {
        this.toggleAuthenticateStatus()
    }

    toggleAuthenticateStatus() {
        this.setState({ authenticated: Auth.isUserAuthenticated() })
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme({
                palette: {
                    primary1Color: Colors.grey500,
                        primary2Color: Colors.grey500,
                        accent1Color: Colors.redA200,
                        pickerHeaderColor: Colors.darkBlack,
                        alternateTextColor: Colors.grey300
                    },
                appBar: {
                    height: 50,
                    },
                })
                }>

                <Router>
                    <div>
                        <PropsRoute exact path="/" component={HomePage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
                        <LoggedOutRoute path="/login" component={LoginPage} toggleAuthenticateStatus={() => this.toggleAuthenticateStatus()} />
                        <LoggedOutRoute path="/signup" component={SignUpPage}/>
                        <Route path="/logout" component={LogoutFunction}/>
                    </div>

                </Router>
            </MuiThemeProvider>
        );
    }
}

export default Main;

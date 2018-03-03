import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
import LoginForm from '../components/LoginForm.jsx';

class LoginPage extends React.Component {
    constructor(props, context) {
    super(props, context);

    const storedMessage = localStorage.getItem('successMessage');
    let successMessage = '';

    if (storedMessage) {
        successMessage = storedMessage;
        localStorage.removeItem('successMessage');
    }

    // set the initial component state
        this.state = {
            errors: {},
            successMessage,
            user: {
                email: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

  /**
   * Process the form.
   *
   * @param {object} event
   */

    processForm(event) {
        event.preventDefault();

    // Make string for HTTP body message
        const email = encodeURIComponent(this.state.user.email);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `email=${email}&password=${password}`;

        // Make the AJAX request
        const xhr = new XMLHttpRequest();
        xhr.open('post', 'https://powerful-caverns-35930.herokuapp.com/auth/login');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                // if successful, change the component-container state
                this.setState({
                    errors: {}
                });

                // save the token
                Auth.authenticateUser(xhr.response.token);

                // update authenticated state
                this.props.toggleAuthenticateStatus()

                // redirect signed in user to homepage
                this.props.history.push('/');
            } else {
                // failure
                console.log('this login was a failure');

                // change the component state
                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

                this.setState({
                    errors
                });
            }
        });
            xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user
        });
    }

    //render the component
    render() {
        return (
            <div className="login-background">
                <div className="login-form">
                <LoginForm
                    onSubmit={this.processForm}
                    onChange={this.changeUser}
                    errors={this.state.errors}
                    successMessage={this.state.successMessage}
                    user={this.state.user}
                />
                </div>
            </div>
        );
    }
}

//send event object to router for access by API endpoint
LoginPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default LoginPage;
